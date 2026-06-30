(() => {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const KEY = 'se_quiz_mobile_v2';
  const V1_PROGRESS = 'se_quiz_progress_v1';
  const V1_MISTAKES = 'se_quiz_mistakes_v1';

  const TYPE_LABEL = { single: '单选', multiple: '多选', truefalse: '判断' };
  const VIEW_TITLE = { home: '软件工程刷题', study: '章节学习', quiz: '刷题模式', mistake: '错题本', progress: '学习进度' };

  const data = loadData();
  const state = {
    view: 'home',
    studyChapter: data.last?.chapter || 'ALL',
    studyIndex: Number(data.last?.studyIndex || 0),
    studySearch: '',
    studyReveal: false,
    homeSearch: '',
    quiz: null,
    deferredInstall: null,
  };

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    migrateV1IfNeeded();
    normalizeData();
    fillSelects();
    bindEvents();
    renderAll();
    registerPWA();
  }

  function loadData() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || blankData();
    } catch {
      return blankData();
    }
  }

  function blankData() {
    return { version: 2, records: {}, mistakes: [], bookmarks: [], last: {}, exportedAt: null };
  }

  function saveData() {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  function migrateV1IfNeeded() {
    if (data.migratedFromV1) return;
    try {
      const oldRecords = JSON.parse(localStorage.getItem(V1_PROGRESS) || '{}');
      const oldMistakes = JSON.parse(localStorage.getItem(V1_MISTAKES) || '[]');
      if (oldRecords && Object.keys(oldRecords).length) {
        for (const [qid, r] of Object.entries(oldRecords)) {
          data.records[qid] = {
            attempts: Number(r.attempts || 0),
            correct: Number(r.correct || 0),
            mastered: Boolean(r.mastered),
            lastResult: null,
            lastSelected: [],
            lastAt: r.lastAt || null,
          };
        }
      }
      if (Array.isArray(oldMistakes) && oldMistakes.length) data.mistakes = unique(oldMistakes);
    } catch {}
    data.migratedFromV1 = true;
    saveData();
  }

  function normalizeData() {
    data.records ||= {};
    data.mistakes = unique(Array.isArray(data.mistakes) ? data.mistakes : []);
    data.bookmarks = unique(Array.isArray(data.bookmarks) ? data.bookmarks : []);
    data.last ||= {};
    saveData();
  }

  function fillSelects() {
    const chapterOptions = `<option value="ALL">全部章节</option>` + CHAPTERS.map(c => `<option value="${esc(c.title)}">${esc(c.title)}（${c.count}）</option>`).join('');
    $('#studyChapter').innerHTML = chapterOptions;
    $('#quizScope').innerHTML = `<option value="ALL">全部章节</option><option value="MISTAKES">只刷错题</option>` + CHAPTERS.map(c => `<option value="${esc(c.title)}">${esc(c.title)}（${c.count}）</option>`).join('');
    $('#studyChapter').value = state.studyChapter;
  }

  function bindEvents() {
    $$('.nav-btn').forEach(btn => btn.addEventListener('click', () => setView(btn.dataset.view)));

    $('#continueBtn').addEventListener('click', () => setView('study'));
    $('#quickQuizBtn').addEventListener('click', () => {
      setView('quiz');
      $('#quizOrder').value = 'smart';
      $('#quizCount').value = '10';
      startQuiz();
    });
    $('#homeSearchToggle').addEventListener('click', () => {
      $('#homeSearchWrap').classList.toggle('hidden');
      if (!$('#homeSearchWrap').classList.contains('hidden')) $('#globalSearch').focus();
    });
    $('#globalSearch').addEventListener('input', e => {
      state.homeSearch = e.target.value.trim();
      renderHome();
    });
    $('#chapterCards').addEventListener('click', e => {
      const studyBtn = e.target.closest('[data-study-chapter]');
      const quizBtn = e.target.closest('[data-quiz-chapter]');
      const qBtn = e.target.closest('[data-study-qid]');
      if (studyBtn) {
        state.studyChapter = studyBtn.dataset.studyChapter;
        state.studyIndex = 0;
        state.studyReveal = false;
        $('#studyChapter').value = state.studyChapter;
        saveLast();
        setView('study');
      }
      if (quizBtn) {
        setView('quiz');
        $('#quizScope').value = quizBtn.dataset.quizChapter;
        startQuiz();
      }
      if (qBtn) {
        jumpToQuestion(qBtn.dataset.studyQid);
      }
    });

    $('#studyChapter').addEventListener('change', e => {
      state.studyChapter = e.target.value;
      state.studyIndex = 0;
      state.studyReveal = false;
      saveLast();
      renderStudy();
    });
    $('#studySearch').addEventListener('input', e => {
      state.studySearch = e.target.value.trim();
      state.studyIndex = 0;
      state.studyReveal = false;
      renderStudy();
    });
    $('#prevStudy').addEventListener('click', () => moveStudy(-1));
    $('#nextStudy').addEventListener('click', () => moveStudy(1));
    $('#toggleStudyAnswer').addEventListener('click', () => {
      state.studyReveal = !state.studyReveal;
      renderStudy();
    });
    $('#studyCard').addEventListener('click', e => {
      const master = e.target.closest('[data-master-qid]');
      const mistake = e.target.closest('[data-mistake-qid]');
      const bookmark = e.target.closest('[data-bookmark-qid]');
      if (master) toggleMastered(master.dataset.masterQid);
      if (mistake) toggleMistake(mistake.dataset.mistakeQid);
      if (bookmark) toggleBookmark(bookmark.dataset.bookmarkQid);
    });

    $('#startQuiz').addEventListener('click', startQuiz);
    $('#quitQuiz').addEventListener('click', quitQuiz);
    $('#quizCard').addEventListener('click', e => {
      const btn = e.target.closest('[data-option]');
      if (btn) selectQuizOption(btn.dataset.option);
    });
    $('#submitQuiz').addEventListener('click', submitQuiz);
    $('#nextQuiz').addEventListener('click', nextQuiz);

    $('#retryMistakes').addEventListener('click', () => {
      if (!data.mistakes.length) return toast('错题本还是空的。先去刷几题。');
      setView('quiz');
      $('#quizScope').value = 'MISTAKES';
      $('#quizCount').value = '9999';
      $('#quizOrder').value = 'smart';
      startQuiz();
    });
    $('#mistakeList').addEventListener('click', e => {
      const study = e.target.closest('[data-study-qid]');
      const remove = e.target.closest('[data-remove-mistake]');
      if (study) jumpToQuestion(study.dataset.studyQid);
      if (remove) {
        data.mistakes = data.mistakes.filter(id => id !== remove.dataset.removeMistake);
        saveData();
        renderAll();
        toast('已从错题本移除。');
      }
    });
    $('#clearMistakes').addEventListener('click', () => {
      if (!data.mistakes.length) return toast('错题本已经是空的。');
      if (confirm('确定清空错题本？这不会删除做题进度。')) {
        data.mistakes = [];
        saveData();
        renderAll();
      }
    });

    $('#exportData').addEventListener('click', exportData);
    $('#importData').addEventListener('change', importData);
    $('#resetData').addEventListener('click', () => {
      if (confirm('确定重置全部学习记录、错题和收藏？这个操作不可恢复。')) {
        const fresh = blankData();
        Object.assign(data, fresh);
        saveData();
        state.studyIndex = 0;
        state.studyReveal = false;
        renderAll();
        toast('已重置。');
      }
    });
  }

  function setView(view) {
    state.view = view;
    $$('.view').forEach(v => v.classList.remove('active'));
    $(`#${view}View`).classList.add('active');
    $$('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view === view));
    $('#screenTitle').textContent = VIEW_TITLE[view] || '软件工程刷题';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderCurrentView();
  }

  function renderAll() {
    renderHome();
    renderStudy();
    renderMistakes();
    renderProgress();
    renderCurrentView();
  }

  function renderCurrentView() {
    if (state.view === 'home') renderHome();
    if (state.view === 'study') renderStudy();
    if (state.view === 'mistake') renderMistakes();
    if (state.view === 'progress') renderProgress();
  }

  function renderHome() {
    const stats = getStats();
    $('#homeTotal').textContent = QUESTION_BANK.length;
    $('#homeDone').textContent = stats.attempted;
    $('#homeAccuracy').textContent = `${stats.accuracy}%`;
    $('#homeMistakes').textContent = data.mistakes.length;

    const box = $('#chapterCards');
    const term = state.homeSearch.toLowerCase();
    if (term) {
      const matches = QUESTION_BANK.filter(q => searchable(q).includes(term)).slice(0, 80);
      if (!matches.length) {
        box.innerHTML = emptyHTML('没搜到题目', '换一个关键词，例如“螺旋模型”“白盒测试”。');
        return;
      }
      box.innerHTML = matches.map(q => `
        <article class="mini-card">
          <div class="q-tags">${tagHTML(q)}<span class="pill">${esc(q.chapter)}</span></div>
          <h3>${esc(q.question)}</h3>
          <p>答案：${esc(answerText(q))}</p>
          <div class="mini-actions">
            <button class="secondary-btn small" data-study-qid="${q.id}">学习这题</button>
            <button class="ghost-btn small" data-quiz-chapter="${esc(q.chapter)}">刷本章</button>
          </div>
        </article>`).join('');
      return;
    }

    box.innerHTML = CHAPTERS.map(c => {
      const list = byChapter(c.title);
      const s = getStats(list);
      const pct = list.length ? Math.round(s.mastered / list.length * 100) : 0;
      return `
        <article class="chapter-card">
          <h3>${esc(c.title)}</h3>
          <div class="chapter-meta"><span>${c.count} 道题</span><span>已掌握 ${s.mastered}/${list.length}</span></div>
          <div class="progress-track"><div class="progress-fill good" style="width:${pct}%"></div></div>
          <div class="chapter-meta"><span>已练 ${s.attempted}</span><span>正确率 ${s.accuracy}%</span></div>
          <div class="chapter-actions">
            <button class="secondary-btn small" data-study-chapter="${esc(c.title)}">学习</button>
            <button class="primary-btn small" data-quiz-chapter="${esc(c.title)}">刷题</button>
          </div>
        </article>`;
    }).join('');
  }

  function renderStudy() {
    $('#studyChapter').value = state.studyChapter;
    $('#studySearch').value = state.studySearch;
    const list = getStudyList();
    if (!list.length) {
      $('#studyCounter').textContent = '0 / 0';
      $('#studyProgressBar').style.width = '0%';
      $('#studyCard').innerHTML = emptyHTML('当前范围没有题目', '清空搜索词，或换一个章节。');
      $('#toggleStudyAnswer').disabled = true;
      $('#prevStudy').disabled = true;
      $('#nextStudy').disabled = true;
      return;
    }
    state.studyIndex = clamp(state.studyIndex, 0, list.length - 1);
    const q = list[state.studyIndex];
    const pct = Math.round((state.studyIndex + 1) / list.length * 100);
    $('#studyCounter').textContent = `${state.studyIndex + 1} / ${list.length}`;
    $('#studyProgressBar').style.width = `${pct}%`;
    $('#toggleStudyAnswer').disabled = false;
    $('#toggleStudyAnswer').textContent = state.studyReveal ? '收起答案' : '看答案';
    $('#prevStudy').disabled = state.studyIndex <= 0;
    $('#nextStudy').disabled = state.studyIndex >= list.length - 1;
    $('#studyCard').innerHTML = questionHTML(q, {
      mode: 'study',
      reveal: state.studyReveal,
      selected: [],
      submitted: false,
      showActions: true,
    });
    saveLast();
  }

  function renderMistakes() {
    const ids = data.mistakes.filter(id => getQuestion(id));
    const box = $('#mistakeList');
    if (!ids.length) {
      box.innerHTML = emptyHTML('错题本为空', '这是好事。继续刷题，做错会自动进错题本。');
      return;
    }
    const list = ids.map(getQuestion).sort((a, b) => chapterIndex(a.chapter) - chapterIndex(b.chapter) || a.number - b.number);
    box.innerHTML = list.map(q => `
      <article class="mini-card">
        <div class="q-tags">${tagHTML(q)}<span class="pill">${esc(q.chapter)}</span></div>
        <h3>${esc(q.question)}</h3>
        <p>正确答案：${esc(answerText(q))}</p>
        <div class="mini-actions">
          <button class="primary-btn small" data-study-qid="${q.id}">学习这题</button>
          <button class="ghost-btn small danger-text" data-remove-mistake="${q.id}">移除</button>
        </div>
      </article>`).join('');
  }

  function renderProgress() {
    const s = getStats();
    $('#dashAttempted').textContent = s.attempted;
    $('#dashMastered').textContent = s.mastered;
    $('#dashAccuracy').textContent = `${s.accuracy}%`;
    $('#dashMistakes').textContent = data.mistakes.length;

    $('#chapterProgress').innerHTML = CHAPTERS.map(c => {
      const list = byChapter(c.title);
      const cs = getStats(list);
      const pct = list.length ? Math.round(cs.mastered / list.length * 100) : 0;
      return `
        <article class="progress-row">
          <div class="progress-row-top">
            <h3>${esc(c.title)}</h3>
            <small>${cs.mastered}/${list.length}</small>
          </div>
          <div class="progress-track"><div class="progress-fill good" style="width:${pct}%"></div></div>
          <div class="chapter-meta"><span>已练 ${cs.attempted}</span><span>正确率 ${cs.accuracy}%</span></div>
        </article>`;
    }).join('');
  }

  function getStudyList() {
    let list = state.studyChapter === 'ALL' ? QUESTION_BANK : byChapter(state.studyChapter);
    const term = state.studySearch.toLowerCase();
    if (term) list = list.filter(q => searchable(q).includes(term));
    return list;
  }

  function questionHTML(q, cfg) {
    const selected = cfg.selected || [];
    const correct = answerKeys(q);
    const options = q.options.map(o => {
      const isSelected = selected.includes(o.key);
      const isCorrect = correct.includes(o.key);
      let cls = 'option-btn';
      if (isSelected) cls += ' selected';
      if (cfg.submitted && cfg.reveal && isCorrect) cls += ' correct';
      if (cfg.submitted && cfg.reveal && isSelected && !isCorrect) cls += ' wrong';
      const disabled = cfg.mode === 'study' ? 'disabled' : '';
      return `<button class="${cls}" data-option="${esc(o.key)}" ${disabled}>
        <span class="key">${esc(o.key)}</span><span class="txt">${esc(o.text)}</span>
      </button>`;
    }).join('');
    const rec = record(q.id);
    const answer = cfg.reveal ? `<div class="answer-box"><strong>正确答案：${esc(answerText(q))}</strong><p>${memoryHint(q)}</p></div>` : '';
    const actions = cfg.showActions ? `<div class="inline-actions">
      <button class="secondary-btn small" data-master-qid="${q.id}">${rec.mastered ? '取消掌握' : '标记会了'}</button>
      <button class="ghost-btn small ${isMistake(q.id) ? 'danger-text' : ''}" data-mistake-qid="${q.id}">${isMistake(q.id) ? '移出错题' : '加入错题'}</button>
      <button class="ghost-btn small" data-bookmark-qid="${q.id}">${isBookmarked(q.id) ? '取消收藏' : '收藏'}</button>
    </div>` : '';
    return `
      <div class="q-head">
        <div class="q-tags">${tagHTML(q)}<span class="pill">${esc(q.chapter)}</span></div>
        <span class="pill">${rec.attempts ? `练过 ${rec.attempts}` : '未练'}</span>
      </div>
      <h2 class="q-title">${esc(q.question)}</h2>
      <div class="option-list">${options}</div>
      ${answer}
      ${actions}`;
  }

  function tagHTML(q) {
    return `<span class="pill type-${q.type}">${TYPE_LABEL[q.type] || q.type}</span><span class="pill">#${q.number}</span>`;
  }

  function startQuiz() {
    let list = getQuizScopeList($('#quizScope').value);
    if (!list.length) {
      toast($('#quizScope').value === 'MISTAKES' ? '错题本为空。' : '这个范围没有题目。');
      return;
    }
    const order = $('#quizOrder').value;
    if (order === 'random') list = shuffle(list);
    if (order === 'smart') list = smartOrder(list);
    const count = Math.min(Number($('#quizCount').value), list.length);
    list = list.slice(0, count);
    state.quiz = {
      questions: list,
      index: 0,
      selected: [],
      submitted: false,
      score: 0,
      results: [],
      reveal: Boolean($('#instantFeedback').checked),
    };
    $('#quizSetup').classList.add('hidden');
    $('#quizPanel').classList.remove('hidden');
    $('#quizFeedback').classList.add('hidden');
    $('#submitQuiz').classList.remove('hidden');
    $('#nextQuiz').classList.add('hidden');
    renderQuizQuestion();
  }

  function getQuizScopeList(scope) {
    if (scope === 'MISTAKES') return data.mistakes.map(getQuestion).filter(Boolean);
    if (scope === 'ALL') return [...QUESTION_BANK];
    return byChapter(scope);
  }

  function smartOrder(list) {
    const wrong = [];
    const fresh = [];
    const weak = [];
    const rest = [];
    for (const q of list) {
      const r = record(q.id);
      if (isMistake(q.id)) wrong.push(q);
      else if (!r.attempts) fresh.push(q);
      else if (!r.mastered || r.correct < 2) weak.push(q);
      else rest.push(q);
    }
    return [...shuffle(wrong), ...shuffle(fresh), ...shuffle(weak), ...shuffle(rest)];
  }

  function renderQuizQuestion() {
    const quiz = state.quiz;
    if (!quiz) return;
    const q = quiz.questions[quiz.index];
    const pct = Math.round((quiz.index) / quiz.questions.length * 100);
    $('#quizCounter').textContent = `${quiz.index + 1} / ${quiz.questions.length}`;
    $('#quizProgressBar').style.width = `${pct}%`;
    $('#quizCard').innerHTML = questionHTML(q, {
      mode: 'quiz',
      reveal: quiz.submitted && quiz.reveal,
      selected: quiz.selected,
      submitted: quiz.submitted,
      showActions: false,
    });
    $('#submitQuiz').classList.toggle('hidden', quiz.submitted);
    $('#nextQuiz').classList.toggle('hidden', !quiz.submitted);
    $('#nextQuiz').textContent = quiz.index >= quiz.questions.length - 1 ? '查看结果' : '下一题';
  }

  function selectQuizOption(key) {
    const quiz = state.quiz;
    if (!quiz || quiz.submitted) return;
    const q = quiz.questions[quiz.index];
    if (q.type === 'multiple') {
      quiz.selected = quiz.selected.includes(key) ? quiz.selected.filter(k => k !== key) : [...quiz.selected, key];
    } else {
      quiz.selected = [key];
    }
    renderQuizQuestion();
  }

  function submitQuiz() {
    const quiz = state.quiz;
    if (!quiz || quiz.submitted) return;
    const q = quiz.questions[quiz.index];
    if (!quiz.selected.length) {
      toast('先选一个答案。');
      return;
    }
    const ok = sameAnswer(quiz.selected, answerKeys(q));
    recordAttempt(q, quiz.selected, ok);
    quiz.score += ok ? 1 : 0;
    quiz.results.push({ qid: q.id, selected: [...quiz.selected], ok });
    quiz.submitted = true;
    const fb = $('#quizFeedback');
    fb.className = `feedback ${ok ? 'ok' : 'bad'}`;
    if (quiz.reveal) {
      fb.innerHTML = `<h3>${ok ? '答对了' : '答错了'}</h3><p>正确答案：${esc(answerText(q))}</p>`;
    } else {
      fb.innerHTML = `<h3>已提交</h3><p>${ok ? '本题记录为正确。' : '本题记录为错误，已进入错题本。'}结果页会汇总。</p>`;
    }
    fb.classList.remove('hidden');
    renderQuizQuestion();
    renderHome();
    renderProgress();
  }

  function nextQuiz() {
    const quiz = state.quiz;
    if (!quiz) return;
    if (quiz.index >= quiz.questions.length - 1) {
      showQuizResult();
      return;
    }
    quiz.index += 1;
    quiz.selected = [];
    quiz.submitted = false;
    $('#quizFeedback').classList.add('hidden');
    renderQuizQuestion();
  }

  function showQuizResult() {
    const quiz = state.quiz;
    const total = quiz.questions.length;
    const pct = Math.round(quiz.score / total * 100);
    $('#quizProgressBar').style.width = '100%';
    $('#quizCounter').textContent = `完成 ${total} 题`;
    $('#quizFeedback').classList.add('hidden');
    $('#submitQuiz').classList.add('hidden');
    $('#nextQuiz').classList.add('hidden');
    const wrongItems = quiz.results.filter(r => !r.ok).map(r => getQuestion(r.qid)).filter(Boolean);
    $('#quizCard').innerHTML = `
      <div class="q-head"><div><p class="eyebrow">Result</p><h2 class="q-title">本组练习完成</h2></div></div>
      <div class="stat-grid">
        <div class="stat-card"><span>${quiz.score}</span><small>答对</small></div>
        <div class="stat-card danger"><span>${total - quiz.score}</span><small>答错</small></div>
        <div class="stat-card"><span>${pct}%</span><small>正确率</small></div>
        <div class="stat-card"><span>${data.mistakes.length}</span><small>当前错题</small></div>
      </div>
      ${wrongItems.length ? `<div class="answer-box"><strong>别骗自己：错题要马上回炉。</strong><p>本组错了 ${wrongItems.length} 题，已经自动进入错题本。</p></div>` : `<div class="answer-box"><strong>这组全对。</strong><p>继续刷未练题，把掌握率拉上去。</p></div>`}
      <div class="inline-actions">
        <button class="primary-btn small" id="againQuiz">再来一组</button>
        <button class="secondary-btn small" id="goMistakeFromResult">看错题</button>
      </div>`;
    $('#againQuiz').addEventListener('click', () => {
      state.quiz = null;
      $('#quizSetup').classList.remove('hidden');
      $('#quizPanel').classList.add('hidden');
      startQuiz();
    });
    $('#goMistakeFromResult').addEventListener('click', () => {
      quitQuiz();
      setView('mistake');
    });
  }

  function quitQuiz() {
    state.quiz = null;
    $('#quizSetup').classList.remove('hidden');
    $('#quizPanel').classList.add('hidden');
    $('#quizFeedback').classList.add('hidden');
  }

  function moveStudy(delta) {
    const list = getStudyList();
    if (!list.length) return;
    state.studyIndex = clamp(state.studyIndex + delta, 0, list.length - 1);
    state.studyReveal = false;
    renderStudy();
  }

  function jumpToQuestion(qid) {
    const q = getQuestion(qid);
    if (!q) return;
    state.studyChapter = q.chapter;
    state.studySearch = '';
    const list = byChapter(q.chapter);
    state.studyIndex = Math.max(0, list.findIndex(x => x.id === qid));
    state.studyReveal = true;
    $('#studyChapter').value = state.studyChapter;
    setView('study');
  }

  function toggleMastered(qid) {
    const r = record(qid);
    r.mastered = !r.mastered;
    r.lastAt = new Date().toISOString();
    data.records[qid] = r;
    saveData();
    renderAll();
  }

  function toggleMistake(qid) {
    if (isMistake(qid)) data.mistakes = data.mistakes.filter(id => id !== qid);
    else data.mistakes.push(qid);
    data.mistakes = unique(data.mistakes);
    saveData();
    renderAll();
  }

  function toggleBookmark(qid) {
    if (isBookmarked(qid)) data.bookmarks = data.bookmarks.filter(id => id !== qid);
    else data.bookmarks.push(qid);
    data.bookmarks = unique(data.bookmarks);
    saveData();
    renderStudy();
  }

  function recordAttempt(q, selected, ok) {
    const r = record(q.id);
    r.attempts += 1;
    r.correct += ok ? 1 : 0;
    r.lastResult = ok;
    r.lastSelected = [...selected].sort();
    r.lastAt = new Date().toISOString();
    if (r.correct >= 2 && ok) r.mastered = true;
    if (!ok) data.mistakes = unique([...data.mistakes, q.id]);
    if (ok) data.mistakes = data.mistakes.filter(id => id !== q.id);
    data.records[q.id] = r;
    saveData();
  }

  function record(qid) {
    return data.records[qid] || { attempts: 0, correct: 0, mastered: false, lastResult: null, lastSelected: [], lastAt: null };
  }

  function getStats(list = QUESTION_BANK) {
    let attempted = 0, attempts = 0, correct = 0, mastered = 0;
    for (const q of list) {
      const r = record(q.id);
      if (r.attempts > 0) attempted += 1;
      attempts += r.attempts;
      correct += r.correct;
      if (r.mastered) mastered += 1;
    }
    return { attempted, attempts, correct, mastered, accuracy: attempts ? Math.round(correct / attempts * 100) : 0 };
  }

  function exportData() {
    const payload = { ...data, exportedAt: new Date().toISOString(), questionBankSize: QUESTION_BANK.length };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `software-engineering-quiz-progress-${dateStamp()}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function importData(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const incoming = JSON.parse(reader.result);
        if (!incoming.records || !Array.isArray(incoming.mistakes)) throw new Error('bad format');
        data.records = incoming.records || {};
        data.mistakes = unique(incoming.mistakes || []);
        data.bookmarks = unique(incoming.bookmarks || []);
        data.last = incoming.last || {};
        saveData();
        renderAll();
        toast('学习记录已导入。');
      } catch {
        toast('导入失败：文件格式不对。');
      } finally {
        e.target.value = '';
      }
    };
    reader.readAsText(file);
  }

  function saveLast() {
    data.last = { chapter: state.studyChapter, studyIndex: state.studyIndex, updatedAt: new Date().toISOString() };
    saveData();
  }

  function answerKeys(q) {
    return String(q.answer || '').split('').filter(Boolean).sort();
  }

  function sameAnswer(a, b) {
    return [...a].sort().join('') === [...b].sort().join('');
  }

  function answerText(q) {
    const keys = answerKeys(q);
    if (q.type === 'truefalse') return keys.includes('T') ? '正确 / True' : '错误 / False';
    return keys.map(k => {
      const opt = q.options.find(o => o.key === k);
      return `${k}${opt ? '：' + opt.text : ''}`;
    }).join('；');
  }

  function memoryHint(q) {
    if (q.type === 'multiple') return '多选题不要只背字母，要背每个正确选项的关键词。';
    if (q.type === 'truefalse') return '判断题重点背“为什么对 / 为什么错”，否则换个说法就容易翻车。';
    return '单选题建议把错误选项也过一遍，考试很喜欢换问法。';
  }

  function byChapter(chapter) {
    return QUESTION_BANK.filter(q => q.chapter === chapter);
  }

  function getQuestion(qid) {
    return QUESTION_BANK.find(q => q.id === qid);
  }

  function isMistake(qid) {
    return data.mistakes.includes(qid);
  }

  function isBookmarked(qid) {
    return data.bookmarks.includes(qid);
  }

  function searchable(q) {
    return [q.question, q.chapter, q.answer, ...q.options.map(o => `${o.key} ${o.text}`)].join(' ').toLowerCase();
  }

  function chapterIndex(chapter) {
    return CHAPTERS.findIndex(c => c.title === chapter);
  }

  function emptyHTML(title, body) {
    return `<div class="empty-card"><strong>${esc(title)}</strong><p class="muted">${esc(body)}</p></div>`;
  }

  function esc(value) {
    return String(value ?? '').replace(/[&<>'"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[ch]));
  }

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function unique(arr) {
    return [...new Set(arr.filter(Boolean))];
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function dateStamp() {
    const d = new Date();
    const p = n => String(n).padStart(2, '0');
    return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}`;
  }

  function toast(msg) {
    const old = $('.toast');
    if (old) old.remove();
    const div = document.createElement('div');
    div.className = 'toast';
    div.textContent = msg;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 2200);
  }

  function registerPWA() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
    }
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      state.deferredInstall = e;
      const btn = $('#installBtn');
      btn.hidden = false;
      btn.addEventListener('click', async () => {
        btn.hidden = true;
        state.deferredInstall.prompt();
        await state.deferredInstall.userChoice.catch(() => null);
        state.deferredInstall = null;
      }, { once: true });
    });
  }
})();
