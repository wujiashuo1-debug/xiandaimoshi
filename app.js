(() => {
  'use strict';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const KEY = 'se_quiz_v3_shared';
  const OLD_V2 = 'se_quiz_mobile_v2';
  const OLD_V1_PROGRESS = 'se_quiz_progress_v1';
  const OLD_V1_MISTAKES = 'se_quiz_mistakes_v1';

  const TYPE_LABEL = { single: '单选', multiple: '多选', truefalse: '判断' };
  const MOBILE_TITLES = { chapters: '章节', study: '学习', quiz: '刷题', mine: '我的' };

  const data = loadData();
  const desktop = { chapter: 'ALL', view: 'learn', search: '', practice: null };
  const mobile = {
    view: 'chapters',
    search: '',
    studyChapter: data.last?.studyChapter || 'ALL',
    studyIndex: Number(data.last?.studyIndex || 0),
    studySearch: '',
    studyReveal: false,
    quiz: null,
    deferredInstall: null,
  };

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    migrateOldData();
    normalizeData();
    fillControls();
    bindDesktopEvents();
    bindMobileEvents();
    registerPWA();
    renderAll();
  }

  function blankData() {
    return { version: 3, records: {}, mistakes: [], bookmarks: [], last: {}, migrated: false };
  }

  function loadData() {
    try { return JSON.parse(localStorage.getItem(KEY)) || blankData(); }
    catch { return blankData(); }
  }

  function saveData() {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  function migrateOldData() {
    if (data.migrated) return;
    try {
      const v2 = JSON.parse(localStorage.getItem(OLD_V2) || 'null');
      if (v2 && v2.records) {
        Object.assign(data.records, v2.records || {});
        data.mistakes = unique([...(data.mistakes || []), ...((v2.mistakes || []))]);
        data.bookmarks = unique([...(data.bookmarks || []), ...((v2.bookmarks || []))]);
        if (v2.last) data.last = { ...data.last, ...v2.last };
      }
    } catch {}
    try {
      const oldRecords = JSON.parse(localStorage.getItem(OLD_V1_PROGRESS) || '{}');
      const oldMistakes = JSON.parse(localStorage.getItem(OLD_V1_MISTAKES) || '[]');
      for (const [qid, r] of Object.entries(oldRecords || {})) {
        if (!data.records[qid]) {
          data.records[qid] = {
            attempts: Number(r.attempts || 0),
            correct: Number(r.correct || 0),
            mastered: Boolean(r.mastered),
            lastSelected: [],
            lastResult: null,
            lastAt: r.lastAt || null,
          };
        }
      }
      if (Array.isArray(oldMistakes)) data.mistakes = unique([...(data.mistakes || []), ...oldMistakes]);
    } catch {}
    data.migrated = true;
    saveData();
  }

  function normalizeData() {
    data.records ||= {};
    data.mistakes = unique(Array.isArray(data.mistakes) ? data.mistakes : []);
    data.bookmarks = unique(Array.isArray(data.bookmarks) ? data.bookmarks : []);
    data.last ||= {};
    for (const q of QUESTION_BANK) {
      if (data.records[q.id]) {
        data.records[q.id].attempts = Number(data.records[q.id].attempts || 0);
        data.records[q.id].correct = Number(data.records[q.id].correct || 0);
        data.records[q.id].mastered = Boolean(data.records[q.id].mastered);
        data.records[q.id].lastSelected = Array.isArray(data.records[q.id].lastSelected) ? data.records[q.id].lastSelected : [];
      }
    }
    saveData();
  }

  function fillControls() {
    const allOption = `<option value="ALL">全部章节</option>`;
    const chapterOptions = allOption + CHAPTERS.map(c => `<option value="${attr(c.title)}">${esc(c.title)}（${c.count}）</option>`).join('');
    const practiceOptions = `<option value="ALL">全部章节</option><option value="MISTAKES">只刷错题</option>` + CHAPTERS.map(c => `<option value="${attr(c.title)}">${esc(c.title)}（${c.count}）</option>`).join('');

    $('#dChapterSelect').innerHTML = chapterOptions;
    $('#dPracticeScope').innerHTML = chapterOptions;
    $('#mStudyChapter').innerHTML = chapterOptions;
    $('#mQuizScope').innerHTML = practiceOptions;
    $('#mStudyChapter').value = mobile.studyChapter;

    $('#dChapterList').innerHTML = `<button class="desktop-chapter-item active" data-d-chapter="ALL"><strong>全部章节</strong><span>${QUESTION_BANK.length} 道题</span></button>` +
      CHAPTERS.map(c => `<button class="desktop-chapter-item" data-d-chapter="${attr(c.title)}"><strong>${esc(c.title)}</strong><span>${c.count} 道题</span></button>`).join('');
  }

  function bindDesktopEvents() {
    $('#dChapterSelect').addEventListener('change', e => {
      desktop.chapter = e.target.value;
      syncDesktopChapterUI();
      renderDesktopCurrent();
    });
    $('#dChapterList').addEventListener('click', e => {
      const btn = e.target.closest('[data-d-chapter]');
      if (!btn) return;
      desktop.chapter = btn.dataset.dChapter;
      syncDesktopChapterUI();
      renderDesktopCurrent();
    });
    $('#dSearchInput').addEventListener('input', e => {
      desktop.search = e.target.value.trim();
      renderDesktopCurrent();
    });
    $$('.desktop-tab').forEach(btn => btn.addEventListener('click', () => setDesktopView(btn.dataset.dView)));
    $('#dShowAllAnswers').addEventListener('click', () => $$('.answer-row', $('#dLearnList')).forEach(x => x.classList.remove('hidden')));
    $('#dHideAllAnswers').addEventListener('click', () => $$('.answer-row', $('#dLearnList')).forEach(x => x.classList.add('hidden')));
    $('#dLearnList').addEventListener('click', handleDesktopCardClick);
    $('#dMistakesList').addEventListener('click', handleDesktopCardClick);

    $('#dStartPractice').addEventListener('click', startDesktopPractice);
    $('#dSubmitAnswer').addEventListener('click', submitDesktopPractice);
    $('#dNextQuestion').addEventListener('click', nextDesktopPractice);
    $('#dFinishPractice').addEventListener('click', finishDesktopPractice);
    $('#dRetryMistakes').addEventListener('click', () => {
      if (!data.mistakes.length) return toast('错题本是空的。先做几题。');
      setDesktopView('practice');
      $('#dOnlyMistakes').checked = true;
      startDesktopPractice();
    });
    $('#dClearMistakes').addEventListener('click', () => {
      if (!data.mistakes.length) return toast('错题本已经是空的。');
      if (confirm('确定清空错题本？')) {
        data.mistakes = [];
        saveData();
        renderAll();
      }
    });
    $('#dExportProgress').addEventListener('click', () => exportData($('#dExportBox')));
    $('#dImportProgress').addEventListener('change', importData);
    $('#dResetProgress').addEventListener('click', resetAllData);
  }

  function bindMobileEvents() {
    $$('.m-nav').forEach(btn => btn.addEventListener('click', () => setMobileView(btn.dataset.mView)));
    $('#mContinueStudy').addEventListener('click', () => setMobileView('study'));
    $('#mQuickTen').addEventListener('click', () => {
      setMobileView('quiz');
      $('#mQuizScope').value = 'ALL';
      $('#mQuizCount').value = '10';
      $('#mQuizOrder').value = 'smart';
      startMobileQuiz();
    });
    $('#mSearch').addEventListener('input', e => {
      mobile.search = e.target.value.trim();
      renderMobileChapters();
    });
    $('#mChapterCards').addEventListener('click', e => {
      const study = e.target.closest('[data-m-study-chapter]');
      const quiz = e.target.closest('[data-m-quiz-chapter]');
      const qid = e.target.closest('[data-m-study-qid]');
      if (study) {
        mobile.studyChapter = study.dataset.mStudyChapter;
        mobile.studyIndex = 0;
        mobile.studyReveal = false;
        $('#mStudyChapter').value = mobile.studyChapter;
        saveLastMobile();
        setMobileView('study');
      }
      if (quiz) {
        setMobileView('quiz');
        $('#mQuizScope').value = quiz.dataset.mQuizChapter;
        $('#mQuizCount').value = '10';
        $('#mQuizOrder').value = 'smart';
        startMobileQuiz();
      }
      if (qid) jumpMobileToQuestion(qid.dataset.mStudyQid);
    });

    $('#mStudyChapter').addEventListener('change', e => {
      mobile.studyChapter = e.target.value;
      mobile.studyIndex = 0;
      mobile.studyReveal = false;
      saveLastMobile();
      renderMobileStudy();
    });
    $('#mStudySearch').addEventListener('input', e => {
      mobile.studySearch = e.target.value.trim();
      mobile.studyIndex = 0;
      mobile.studyReveal = false;
      renderMobileStudy();
    });
    $('#mPrevStudy').addEventListener('click', () => moveMobileStudy(-1));
    $('#mNextStudy').addEventListener('click', () => moveMobileStudy(1));
    $('#mToggleStudyAnswer').addEventListener('click', () => {
      mobile.studyReveal = !mobile.studyReveal;
      renderMobileStudy();
    });
    $('#mStudyCard').addEventListener('click', e => {
      const master = e.target.closest('[data-m-master]');
      const mistake = e.target.closest('[data-m-mistake]');
      const bookmark = e.target.closest('[data-m-bookmark]');
      if (master) toggleMastered(master.dataset.mMaster);
      if (mistake) toggleMistake(mistake.dataset.mMistake);
      if (bookmark) toggleBookmark(bookmark.dataset.mBookmark);
    });

    $('#mStartQuiz').addEventListener('click', startMobileQuiz);
    $('#mQuitQuiz').addEventListener('click', quitMobileQuiz);
    $('#mQuizCard').addEventListener('click', e => {
      const opt = e.target.closest('[data-m-option]');
      if (opt) selectMobileQuizOption(opt.dataset.mOption);
    });
    $('#mQuizMainAction').addEventListener('click', () => {
      if (!mobile.quiz) return startMobileQuiz();
      if (mobile.quiz.ended) return startMobileQuiz();
      if (mobile.quiz.submitted) return nextMobileQuiz();
      submitMobileQuiz();
    });
    $('#mRetryMistakes').addEventListener('click', () => {
      if (!data.mistakes.length) return toast('错题本是空的。先做几题。');
      setMobileView('quiz');
      $('#mQuizScope').value = 'MISTAKES';
      $('#mQuizCount').value = '9999';
      $('#mQuizOrder').value = 'smart';
      startMobileQuiz();
    });
    $('#mMistakeList').addEventListener('click', e => {
      const jump = e.target.closest('[data-m-study-qid]');
      const remove = e.target.closest('[data-m-remove-mistake]');
      if (jump) jumpMobileToQuestion(jump.dataset.mStudyQid);
      if (remove) {
        data.mistakes = data.mistakes.filter(id => id !== remove.dataset.mRemoveMistake);
        saveData();
        renderAll();
        toast('已移出错题本。');
      }
    });
    $('#mExportData').addEventListener('click', () => exportData());
    $('#mImportData').addEventListener('change', importData);
    $('#mResetData').addEventListener('click', resetAllData);
  }

  function setDesktopView(view) {
    desktop.view = view;
    $$('.desktop-tab').forEach(b => b.classList.toggle('active', b.dataset.dView === view));
    $$('.desktop-view').forEach(v => v.classList.remove('active'));
    $(`#d${cap(view)}View`).classList.add('active');
    const titles = { learn: '章节学习', practice: '刷题模式', mistakes: '错题本', dashboard: '进度总览' };
    $('#dPageTitle').textContent = titles[view] || '章节学习';
    renderDesktopCurrent();
  }

  function setMobileView(view) {
    mobile.view = view;
    $$('.mobile-view').forEach(v => v.classList.remove('active'));
    const id = view === 'chapters' ? 'mChaptersView' : view === 'mine' ? 'mMineView' : `m${cap(view)}View`;
    $(`#${id}`).classList.add('active');
    $$('.m-nav').forEach(b => b.classList.toggle('active', b.dataset.mView === view));
    $('#mTitle').textContent = MOBILE_TITLES[view] || '软件工程刷题';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderMobileCurrent();
    updateMobileActionBars();
  }

  function renderAll() {
    renderSharedStats();
    renderDesktopCurrent();
    renderMobileCurrent();
  }

  function renderDesktopCurrent() {
    renderSharedStats();
    if (desktop.view === 'learn') renderDesktopLearn();
    if (desktop.view === 'mistakes') renderDesktopMistakes();
    if (desktop.view === 'dashboard') renderDesktopDashboard();
    if (desktop.view === 'practice' && desktop.practice) renderDesktopPracticePanel();
  }

  function renderMobileCurrent() {
    renderSharedStats();
    if (mobile.view === 'chapters') renderMobileChapters();
    if (mobile.view === 'study') renderMobileStudy();
    if (mobile.view === 'quiz') renderMobileQuizArea();
    if (mobile.view === 'mine') renderMobileMine();
    updateMobileActionBars();
  }

  function renderSharedStats() {
    const stats = getStats();
    text('#dTotalQuestions', QUESTION_BANK.length);
    text('#dDoneCount', stats.attempted);
    text('#dAccuracy', `${stats.accuracy}%`);
    text('#dMetricTotal', QUESTION_BANK.length);
    text('#dMetricAttempted', stats.attempted);
    text('#dMetricCorrectRate', `${stats.accuracy}%`);
    text('#dMetricMistakes', data.mistakes.length);
    text('#mTotal', QUESTION_BANK.length);
    text('#mDone', stats.attempted);
    text('#mAcc', `${stats.accuracy}%`);
    text('#mWrong', data.mistakes.length);
    text('#mDashDone', stats.attempted);
    text('#mDashMastered', stats.mastered);
    text('#mDashAcc', `${stats.accuracy}%`);
    text('#mDashWrong', data.mistakes.length);
  }

  function syncDesktopChapterUI() {
    $('#dChapterSelect').value = desktop.chapter;
    $$('.desktop-chapter-item').forEach(b => b.classList.toggle('active', b.dataset.dChapter === desktop.chapter));
  }

  function renderDesktopLearn() {
    const list = applySearch(questionsForChapter(desktop.chapter), desktop.search);
    const root = $('#dLearnList');
    if (!list.length) return root.innerHTML = `<div class="empty">没有找到匹配题目。</div>`;
    root.innerHTML = list.map(q => desktopQuestionHTML(q, false)).join('');
  }

  function renderDesktopMistakes() {
    const ids = new Set(data.mistakes);
    const list = applySearch(QUESTION_BANK.filter(q => ids.has(q.id)), desktop.search);
    const root = $('#dMistakesList');
    if (!list.length) return root.innerHTML = `<div class="empty">目前没有错题。别急，刷一轮以后这里才有价值。</div>`;
    root.innerHTML = list.map(q => desktopQuestionHTML(q, true)).join('');
  }

  function desktopQuestionHTML(q, reveal) {
    const r = getRecord(q.id);
    return `<article class="desktop-question-card" data-card-qid="${q.id}">
      <div class="question-meta"><span class="tag">${q.id}</span>${typeTag(q)}<span>${esc(q.chapter)}</span><span>原题号：${q.number}</span>${r.mastered ? '<span class="pill">已掌握</span>' : ''}${data.bookmarks.includes(q.id) ? '<span class="pill">已收藏</span>' : ''}</div>
      <h4>${esc(q.question)}</h4>
      <div class="options">${q.options.map(o => `<div class="option"><span class="key">${esc(o.key)}</span><span>${esc(o.text)}</span></div>`).join('')}</div>
      <div class="answer-row ${reveal ? '' : 'hidden'}"><div><strong>答案：</strong>${esc(answerText(q))}</div>${explanationHTML(q)}</div>
      <div class="card-actions">
        <button class="secondary" data-d-toggle-answer>查看/隐藏答案</button>
        <button class="ghost" data-d-master="${q.id}">${r.mastered ? '取消掌握' : '标记掌握'}</button>
        <button class="ghost" data-d-mistake="${q.id}">${data.mistakes.includes(q.id) ? '移出错题' : '加入错题'}</button>
        <button class="ghost" data-d-bookmark="${q.id}">${data.bookmarks.includes(q.id) ? '取消收藏' : '收藏'}</button>
      </div>
    </article>`;
  }

  function handleDesktopCardClick(e) {
    const answer = e.target.closest('[data-d-toggle-answer]');
    const master = e.target.closest('[data-d-master]');
    const mistake = e.target.closest('[data-d-mistake]');
    const bookmark = e.target.closest('[data-d-bookmark]');
    if (answer) answer.closest('.desktop-question-card').querySelector('.answer-row').classList.toggle('hidden');
    if (master) toggleMastered(master.dataset.dMaster);
    if (mistake) toggleMistake(mistake.dataset.dMistake);
    if (bookmark) toggleBookmark(bookmark.dataset.dBookmark);
  }

  function startDesktopPractice() {
    const scope = $('#dOnlyMistakes').checked ? 'MISTAKES' : $('#dPracticeScope').value;
    const countVal = $('#dPracticeSize').value;
    const count = countVal === 'all' ? 99999 : Number(countVal);
    const order = $('#dPracticeOrder').value;
    const list = buildPracticeList(scope, count, order);
    if (!list.length) return toast(scope === 'MISTAKES' ? '错题本是空的。' : '没有可刷的题。');
    desktop.practice = { list, index: 0, selected: [], submitted: false, score: 0, ended: false };
    $('#dPracticeBox').classList.remove('hidden');
    renderDesktopPracticePanel();
  }

  function renderDesktopPracticePanel() {
    const p = desktop.practice;
    if (!p) return;
    if (p.ended) {
      $('#dPracticeQuestion').innerHTML = `<div class="desktop-summary"><h3>本轮完成</h3><p>得分：<strong>${p.score}/${p.list.length}</strong>，正确率：<strong>${Math.round(p.score / p.list.length * 100)}%</strong></p><p>真正该看的不是分数，是错题本里留下来的题。</p></div>`;
      $('#dPracticeFeedback').classList.add('hidden');
      $('#dPracticeProgress').textContent = `完成 ${p.list.length} 题`;
      $('#dPracticeChapter').textContent = '';
      $('#dPracticeScore').textContent = p.score;
      $('#dPracticeBar').style.width = '100%';
      $('#dSubmitAnswer').textContent = '再来一轮';
      $('#dSubmitAnswer').classList.remove('hidden');
      $('#dNextQuestion').classList.add('hidden');
      return;
    }
    const q = p.list[p.index];
    $('#dPracticeProgress').textContent = `第 ${p.index + 1} / ${p.list.length} 题`;
    $('#dPracticeChapter').textContent = q.chapter;
    $('#dPracticeScore').textContent = p.score;
    $('#dPracticeBar').style.width = `${Math.round((p.index) / p.list.length * 100)}%`;
    $('#dPracticeQuestion').innerHTML = practiceQuestionHTML(q, p.selected, p.submitted, false);
    $('#dPracticeFeedback').classList.toggle('hidden', !p.submitted);
    if (p.submitted) {
      const ok = isCorrect(q, p.selected);
      $('#dPracticeFeedback').className = `desktop-feedback ${ok ? '' : ''}`;
      $('#dPracticeFeedback').innerHTML = `<div>${ok ? '✅ 正确。' : '❌ 错误。'} 正确答案：${esc(answerText(q))}</div>${explanationHTML(q)}`;
    }
    $('#dSubmitAnswer').textContent = '提交答案';
    $('#dSubmitAnswer').classList.toggle('hidden', p.submitted);
    $('#dNextQuestion').classList.toggle('hidden', !p.submitted);
  }

  function submitDesktopPractice() {
    const p = desktop.practice;
    if (!p) return;
    if (p.ended) return startDesktopPractice();
    const q = p.list[p.index];
    if (!p.selected.length) return toast('先选一个答案。');
    const ok = recordAttempt(q, p.selected);
    if (ok) p.score += 1;
    p.submitted = true;
    renderAll();
  }

  function nextDesktopPractice() {
    const p = desktop.practice;
    if (!p) return;
    if (p.index >= p.list.length - 1) {
      p.ended = true;
    } else {
      p.index += 1;
      p.selected = [];
      p.submitted = false;
    }
    renderDesktopPracticePanel();
  }

  function finishDesktopPractice() {
    if (!desktop.practice) return;
    desktop.practice.ended = true;
    renderDesktopPracticePanel();
  }

  function renderDesktopDashboard() {
    renderSharedStats();
    $('#dChapterProgress').innerHTML = CHAPTERS.map(c => {
      const qs = questionsForChapter(c.title);
      const attempted = qs.filter(q => getRecord(q.id).attempts > 0).length;
      const mastered = qs.filter(q => getRecord(q.id).mastered).length;
      const pct = qs.length ? Math.round(attempted / qs.length * 100) : 0;
      return `<div class="chapter-row"><div><strong>${esc(c.title)}</strong><div class="mini-bar"><div style="width:${pct}%"></div></div></div><span>${attempted}/${qs.length} 已练 · ${mastered} 掌握</span></div>`;
    }).join('');
  }

  function renderMobileChapters() {
    const term = mobile.search.toLowerCase();
    const root = $('#mChapterCards');
    if (term) {
      const matches = QUESTION_BANK.filter(q => searchable(q).includes(term)).slice(0, 80);
      if (!matches.length) return root.innerHTML = `<div class="mobile-empty">没搜到。换个关键词，例如“螺旋模型”“白盒测试”。</div>`;
      root.innerHTML = matches.map(q => `<article class="mobile-chapter-card mobile-search-result">
        <div class="mobile-q-top"><span class="tag">${q.id}</span>${typeTag(q)}<span class="pill">${esc(q.chapter)}</span></div>
        <h3>${esc(q.question)}</h3>
        <p>答案：${esc(answerText(q))}</p>${explanationHTML(q)}
        <div class="mobile-chapter-actions"><button class="mobile-primary" data-m-study-qid="${q.id}">学习这题</button></div>
      </article>`).join('');
      return;
    }
    root.innerHTML = CHAPTERS.map(c => {
      const qs = questionsForChapter(c.title);
      const attempted = qs.filter(q => getRecord(q.id).attempts > 0).length;
      const wrong = qs.filter(q => data.mistakes.includes(q.id)).length;
      const pct = qs.length ? Math.round(attempted / qs.length * 100) : 0;
      return `<article class="mobile-chapter-card">
        <h3>${esc(c.title)}</h3>
        <p>${c.count} 道题 · 已练 ${attempted} · 错题 ${wrong}</p>
        <div class="mobile-card-progress"><i style="width:${pct}%"></i></div>
        <div class="mobile-chapter-actions">
          <button class="mobile-secondary" data-m-study-chapter="${attr(c.title)}">学习本章</button>
          <button class="mobile-primary" data-m-quiz-chapter="${attr(c.title)}">刷本章</button>
        </div>
      </article>`;
    }).join('');
  }

  function getMobileStudyList() {
    return applySearch(questionsForChapter(mobile.studyChapter), mobile.studySearch);
  }

  function renderMobileStudy() {
    $('#mStudyChapter').value = mobile.studyChapter;
    const list = getMobileStudyList();
    const root = $('#mStudyCard');
    if (!list.length) {
      $('#mStudyCounter').textContent = '0/0';
      $('#mStudyBar').style.width = '0%';
      root.innerHTML = `<div class="mobile-empty">当前范围没有题。换个章节或清空搜索。</div>`;
      return;
    }
    if (mobile.studyIndex < 0) mobile.studyIndex = 0;
    if (mobile.studyIndex >= list.length) mobile.studyIndex = list.length - 1;
    const q = list[mobile.studyIndex];
    const pct = Math.round((mobile.studyIndex + 1) / list.length * 100);
    $('#mStudyCounter').textContent = `${mobile.studyIndex + 1}/${list.length}`;
    $('#mStudyBar').style.width = `${pct}%`;
    $('#mToggleStudyAnswer').textContent = mobile.studyReveal ? '隐藏答案' : '看答案';
    root.innerHTML = mobileQuestionHTML(q, mobile.studyReveal);
    data.last.studyChapter = mobile.studyChapter;
    data.last.studyIndex = mobile.studyIndex;
    saveData();
  }

  function mobileQuestionHTML(q, reveal) {
    const r = getRecord(q.id);
    return `<div class="mobile-q-top"><span class="tag">${q.id}</span>${typeTag(q)}<span class="pill">原题 ${q.number}</span>${r.mastered ? '<span class="pill">已掌握</span>' : ''}</div>
      <h2 class="mobile-q-title">${esc(q.question)}</h2>
      <div class="mobile-options">${q.options.map(o => `<div class="mobile-option"><span class="key">${esc(o.key)}</span><span>${esc(o.text)}</span></div>`).join('')}</div>
      ${reveal ? `<div class="mobile-answer-box"><div><strong>答案：</strong>${esc(answerText(q))}</div>${explanationHTML(q)}</div>` : ''}
      <div class="mobile-card-actions">
        <button class="mobile-secondary small ${r.mastered ? 'active' : ''}" data-m-master="${q.id}">${r.mastered ? '已掌握' : '掌握'}</button>
        <button class="mobile-secondary small ${data.mistakes.includes(q.id) ? 'active' : ''}" data-m-mistake="${q.id}">${data.mistakes.includes(q.id) ? '错题中' : '错题'}</button>
        <button class="mobile-secondary small ${data.bookmarks.includes(q.id) ? 'active' : ''}" data-m-bookmark="${q.id}">${data.bookmarks.includes(q.id) ? '已收藏' : '收藏'}</button>
      </div>`;
  }

  function moveMobileStudy(delta) {
    const list = getMobileStudyList();
    if (!list.length) return;
    mobile.studyIndex = Math.max(0, Math.min(list.length - 1, mobile.studyIndex + delta));
    mobile.studyReveal = false;
    saveLastMobile();
    renderMobileStudy();
  }

  function startMobileQuiz() {
    const scope = $('#mQuizScope').value;
    const count = Number($('#mQuizCount').value || 10);
    const order = $('#mQuizOrder').value;
    const list = buildPracticeList(scope, count, order);
    if (!list.length) return toast(scope === 'MISTAKES' ? '错题本是空的。' : '没有可刷的题。');
    mobile.quiz = { list, index: 0, selected: [], submitted: false, score: 0, ended: false };
    renderMobileQuizArea();
  }

  function renderMobileQuizArea() {
    if (!mobile.quiz) {
      $('#mQuizSetup').classList.remove('hidden');
      $('#mQuizPanel').classList.add('hidden');
      updateMobileActionBars();
      return;
    }
    $('#mQuizSetup').classList.add('hidden');
    $('#mQuizPanel').classList.remove('hidden');
    const qz = mobile.quiz;
    if (qz.ended) {
      $('#mQuizCounter').textContent = '完成';
      $('#mQuizScore').textContent = `${qz.score} 对`;
      $('#mQuizBar').style.width = '100%';
      $('#mQuizCard').innerHTML = `<div class="mobile-summary"><h2>本轮完成</h2><p>得分：<strong>${qz.score}/${qz.list.length}</strong></p><p>正确率：<strong>${Math.round(qz.score / qz.list.length * 100)}%</strong></p><p>错题本里留下来的题，才是下一轮复习重点。</p></div>`;
      $('#mQuizFeedback').classList.add('hidden');
      $('#mQuizMainAction').textContent = '再练一组';
      updateMobileActionBars();
      return;
    }
    const q = qz.list[qz.index];
    $('#mQuizCounter').textContent = `${qz.index + 1}/${qz.list.length}`;
    $('#mQuizScore').textContent = `${qz.score} 对`;
    $('#mQuizBar').style.width = `${Math.round(qz.index / qz.list.length * 100)}%`;
    $('#mQuizCard').innerHTML = practiceQuestionHTML(q, qz.selected, qz.submitted, true);
    $('#mQuizFeedback').classList.toggle('hidden', !qz.submitted);
    if (qz.submitted) {
      const ok = isCorrect(q, qz.selected);
      $('#mQuizFeedback').className = `mobile-feedback ${ok ? 'ok' : 'bad'}`;
      $('#mQuizFeedback').innerHTML = `<div>${ok ? '✅ 正确。' : '❌ 错误。'}<br>正确答案：${esc(answerText(q))}</div>${explanationHTML(q)}`;
      $('#mQuizMainAction').textContent = qz.index >= qz.list.length - 1 ? '完成本轮' : '下一题';
    } else {
      $('#mQuizMainAction').textContent = q.type === 'multiple' ? '提交答案（可多选）' : '提交答案';
    }
    updateMobileActionBars();
  }

  function selectMobileQuizOption(key) {
    const qz = mobile.quiz;
    if (!qz || qz.submitted || qz.ended) return;
    const q = qz.list[qz.index];
    if (q.type === 'multiple') {
      qz.selected = qz.selected.includes(key) ? qz.selected.filter(k => k !== key) : [...qz.selected, key];
    } else {
      qz.selected = [key];
    }
    renderMobileQuizArea();
  }

  function submitMobileQuiz() {
    const qz = mobile.quiz;
    if (!qz || qz.ended) return;
    const q = qz.list[qz.index];
    if (!qz.selected.length) return toast('先选答案，再提交。');
    const ok = recordAttempt(q, qz.selected);
    if (ok) qz.score += 1;
    qz.submitted = true;
    renderAll();
  }

  function nextMobileQuiz() {
    const qz = mobile.quiz;
    if (!qz) return;
    if (qz.index >= qz.list.length - 1) {
      qz.ended = true;
    } else {
      qz.index += 1;
      qz.selected = [];
      qz.submitted = false;
    }
    renderMobileQuizArea();
  }

  function quitMobileQuiz() {
    if (!mobile.quiz) return;
    if (confirm('确定退出本轮刷题？已提交的题目记录会保留。')) {
      mobile.quiz = null;
      renderMobileQuizArea();
    }
  }

  function renderMobileMine() {
    renderSharedStats();
    const ids = new Set(data.mistakes);
    const mistakes = QUESTION_BANK.filter(q => ids.has(q.id));
    $('#mMistakeList').innerHTML = mistakes.length ? mistakes.slice(0, 20).map(q => `<article class="mobile-mini-card">
      <div class="mobile-q-top"><span class="tag">${q.id}</span>${typeTag(q)}</div>
      <h3>${esc(q.question)}</h3><p>答案：${esc(answerText(q))}</p>${explanationHTML(q)}
      <div class="mobile-mini-actions"><button class="mobile-secondary small" data-m-study-qid="${q.id}">去学习</button><button class="mobile-ghost small" data-m-remove-mistake="${q.id}">移除</button></div>
    </article>`).join('') : `<div class="mobile-empty">目前没有错题。不要自我感觉良好，刷一组再看。</div>`;

    $('#mProgressList').innerHTML = CHAPTERS.map(c => {
      const qs = questionsForChapter(c.title);
      const attempted = qs.filter(q => getRecord(q.id).attempts > 0).length;
      const mastered = qs.filter(q => getRecord(q.id).mastered).length;
      const pct = qs.length ? Math.round(attempted / qs.length * 100) : 0;
      return `<div class="mobile-progress-row"><strong>${esc(c.title)}</strong><span>${attempted}/${qs.length} 已练 · ${mastered} 掌握</span><div class="mobile-card-progress"><i style="width:${pct}%"></i></div></div>`;
    }).join('');
  }

  function updateMobileActionBars() {
    $('#mStudyActionBar').classList.toggle('hidden', mobile.view !== 'study');
    const showQuiz = mobile.view === 'quiz' && mobile.quiz && !$('#mQuizPanel').classList.contains('hidden');
    $('#mQuizActionBar').classList.toggle('hidden', !showQuiz);
  }

  function practiceQuestionHTML(q, selected, submitted, mobileMode) {
    const optClass = mobileMode ? 'mobile-option' : 'option selectable';
    const rootClass = mobileMode ? 'mobile-options' : 'options';
    const titleClass = mobileMode ? 'mobile-q-title' : '';
    const topClass = mobileMode ? 'mobile-q-top' : 'question-meta';
    const selectedSet = new Set(selected);
    const correctSet = new Set(q.answer.split(''));
    const options = q.options.map(o => {
      let cls = optClass;
      if (selectedSet.has(o.key)) cls += ' selected';
      if (submitted && correctSet.has(o.key)) cls += ' correct';
      if (submitted && selectedSet.has(o.key) && !correctSet.has(o.key)) cls += ' wrong';
      const attrName = mobileMode ? 'data-m-option' : 'data-d-option';
      return `<button class="${cls}" ${attrName}="${esc(o.key)}"><span class="key">${esc(o.key)}</span><span>${esc(o.text)}</span></button>`;
    }).join('');
    if (!mobileMode) {
      setTimeout(() => {
        $$('#dPracticeQuestion [data-d-option]').forEach(btn => btn.onclick = () => selectDesktopPracticeOption(btn.dataset.dOption));
      }, 0);
    }
    return `<div class="${topClass}"><span class="tag">${q.id}</span>${typeTag(q)}<span class="pill">原题 ${q.number}</span></div><h4 class="${titleClass}">${esc(q.question)}</h4><div class="${rootClass}">${options}</div>${submitted ? explanationHTML(q) : ''}`;
  }

  function selectDesktopPracticeOption(key) {
    const p = desktop.practice;
    if (!p || p.submitted || p.ended) return;
    const q = p.list[p.index];
    if (q.type === 'multiple') {
      p.selected = p.selected.includes(key) ? p.selected.filter(k => k !== key) : [...p.selected, key];
    } else {
      p.selected = [key];
    }
    renderDesktopPracticePanel();
  }

  function buildPracticeList(scope, count, order) {
    let list;
    if (scope === 'MISTAKES') {
      const ids = new Set(data.mistakes);
      list = QUESTION_BANK.filter(q => ids.has(q.id));
    } else {
      list = questionsForChapter(scope);
    }
    if (order === 'random') list = shuffle(list);
    else if (order === 'smart') list = smartSort(list);
    else list = [...list];
    return list.slice(0, Math.min(count, list.length));
  }

  function smartSort(list) {
    return [...list].sort((a, b) => priorityScore(b) - priorityScore(a));
  }

  function priorityScore(q) {
    const r = getRecord(q.id);
    let score = 0;
    if (data.mistakes.includes(q.id)) score += 100;
    if (!r.attempts) score += 50;
    if (r.attempts && r.correct / r.attempts < 0.7) score += 20;
    if (r.mastered) score -= 60;
    return score + Math.random();
  }

  function recordAttempt(q, selected) {
    const ok = isCorrect(q, selected);
    const r = getRecord(q.id);
    r.attempts += 1;
    if (ok) r.correct += 1;
    r.lastSelected = [...selected].sort();
    r.lastResult = ok;
    r.lastAt = new Date().toISOString();
    if (ok && r.attempts >= 2) r.mastered = true;
    data.records[q.id] = r;
    if (!ok && !data.mistakes.includes(q.id)) data.mistakes.push(q.id);
    if (ok) data.mistakes = data.mistakes.filter(id => id !== q.id);
    saveData();
    return ok;
  }

  function toggleMastered(qid) {
    const r = getRecord(qid);
    r.mastered = !r.mastered;
    data.records[qid] = r;
    saveData();
    renderAll();
    toast(r.mastered ? '已标记掌握。' : '已取消掌握。');
  }

  function toggleMistake(qid) {
    data.mistakes = data.mistakes.includes(qid) ? data.mistakes.filter(id => id !== qid) : unique([...data.mistakes, qid]);
    saveData();
    renderAll();
    toast(data.mistakes.includes(qid) ? '已加入错题本。' : '已移出错题本。');
  }

  function toggleBookmark(qid) {
    data.bookmarks = data.bookmarks.includes(qid) ? data.bookmarks.filter(id => id !== qid) : unique([...data.bookmarks, qid]);
    saveData();
    renderAll();
    toast(data.bookmarks.includes(qid) ? '已收藏。' : '已取消收藏。');
  }

  function jumpMobileToQuestion(qid) {
    const q = QUESTION_BANK.find(x => x.id === qid);
    if (!q) return;
    mobile.studyChapter = q.chapter;
    mobile.studySearch = '';
    $('#mStudySearch').value = '';
    $('#mStudyChapter').value = q.chapter;
    const list = getMobileStudyList();
    mobile.studyIndex = Math.max(0, list.findIndex(x => x.id === qid));
    mobile.studyReveal = true;
    saveLastMobile();
    setMobileView('study');
  }

  function saveLastMobile() {
    data.last.studyChapter = mobile.studyChapter;
    data.last.studyIndex = mobile.studyIndex;
    saveData();
  }

  function questionsForChapter(chapter) {
    if (!chapter || chapter === 'ALL') return QUESTION_BANK;
    return QUESTION_BANK.filter(q => q.chapter === chapter);
  }

  function applySearch(list, term) {
    const s = (term || '').trim().toLowerCase();
    if (!s) return list;
    return list.filter(q => searchable(q).includes(s));
  }

  function searchable(q) {
    return [q.id, q.chapter, q.question, q.answer, ...q.options.map(o => `${o.key} ${o.text}`)].join(' ').toLowerCase();
  }

  function getRecord(qid) {
    return data.records[qid] || { attempts: 0, correct: 0, mastered: false, lastSelected: [], lastResult: null, lastAt: null };
  }

  function getStats() {
    const records = Object.values(data.records || {});
    const attempted = Object.values(data.records || {}).filter(r => r.attempts > 0).length;
    const attempts = records.reduce((s, r) => s + Number(r.attempts || 0), 0);
    const correct = records.reduce((s, r) => s + Number(r.correct || 0), 0);
    const mastered = records.filter(r => r.mastered).length;
    return { attempted, attempts, correct, mastered, accuracy: attempts ? Math.round(correct / attempts * 100) : 0 };
  }

  function isCorrect(q, selected) {
    return normalize(selected) === normalize(q.answer.split(''));
  }

  function normalize(arr) {
    return [...new Set(arr)].sort().join('');
  }

  function explanationHTML(q) {
    return q.explanation ? `<div class="explanation-box"><strong>解析：</strong>${esc(q.explanation)}</div>` : '';
  }

  function answerText(q) {
    if (q.type === 'truefalse') return q.answer === 'T' ? '正确 / True' : '错误 / False';
    return q.answer.split('').map(k => {
      const opt = q.options.find(o => o.key === k);
      return `${k}${opt ? '：' + opt.text : ''}`;
    }).join('；');
  }

  function typeTag(q) {
    const cls = q.type === 'multiple' ? 'multi' : q.type === 'truefalse' ? 'tf' : '';
    return `<span class="tag ${cls}">${TYPE_LABEL[q.type] || '题目'}</span>`;
  }

  function exportData(output) {
    const payload = JSON.stringify({ exportedAt: new Date().toISOString(), app: 'software-engineering-quiz-v3', data }, null, 2);
    if (output) output.value = payload;
    const blob = new Blob([payload], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `software-engineering-quiz-progress-${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    toast('学习记录已导出。');
  }

  function importData(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const obj = JSON.parse(reader.result);
        const incoming = obj.data || obj;
        if (!incoming.records) throw new Error('bad file');
        data.records = incoming.records || {};
        data.mistakes = unique(incoming.mistakes || []);
        data.bookmarks = unique(incoming.bookmarks || []);
        data.last = incoming.last || {};
        data.version = 3;
        saveData();
        normalizeData();
        renderAll();
        toast('导入成功。');
      } catch {
        alert('导入失败：这个 JSON 不是有效的学习记录。');
      } finally {
        e.target.value = '';
      }
    };
    reader.readAsText(file);
  }

  function resetAllData() {
    if (!confirm('确定重置全部学习记录、错题和收藏？这个操作不可恢复。')) return;
    const fresh = blankData();
    Object.assign(data, fresh, { migrated: true });
    saveData();
    desktop.practice = null;
    mobile.quiz = null;
    mobile.studyIndex = 0;
    mobile.studyReveal = false;
    renderAll();
    toast('已重置。');
  }

  function quitDesktopPracticeIfNeeded() {}

  function registerPWA() {
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      mobile.deferredInstall = e;
      $('#mInstallBtn').hidden = false;
    });
    $('#mInstallBtn').addEventListener('click', async () => {
      if (!mobile.deferredInstall) return;
      mobile.deferredInstall.prompt();
      await mobile.deferredInstall.userChoice;
      mobile.deferredInstall = null;
      $('#mInstallBtn').hidden = true;
    });
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    }
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function unique(arr) { return [...new Set(arr)]; }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function text(sel, val) { const el = $(sel); if (el) el.textContent = val; }
  function esc(value) {
    return String(value ?? '').replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
  }
  function attr(value) { return esc(value).replace(/'/g, '&#39;'); }
  function toast(message) {
    const el = $('#toast');
    el.textContent = message;
    el.classList.remove('hidden');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => el.classList.add('hidden'), 1900);
  }
})();
