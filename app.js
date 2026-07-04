
(function(){
  const DATA = window.QUIZ_DATA || {questions:[],chapters:[]};
  const KEY = 'textWebMiningQuizMultiFileProgress_v1';
  const $ = (id)=>document.getElementById(id);
  let state = loadState();
  let selectedChapter = state.selectedChapter || 'all';
  let currentView = state.currentView || 'study';
  let quizQueue = [];
  let quizPos = 0;
  let selected = new Set();
  let answered = false;

  function baseState(){return {attempts:{}, wrong:{}, mastered:{}, favorite:{}, selectedChapter:'all', currentView:'study'};}
  function loadState(){try{return Object.assign(baseState(), JSON.parse(localStorage.getItem(KEY)||'{}'));}catch(e){return baseState();}}
  function save(){state.selectedChapter=selectedChapter;state.currentView=currentView;localStorage.setItem(KEY,JSON.stringify(state));}
  function qById(id){return DATA.questions.find(q=>q.id===Number(id));}
  function chapterById(id){return DATA.chapters.find(c=>c.id===id);}
  function idsForChapter(id){return id==='all'?DATA.questions.map(q=>q.id):(chapterById(id)?.questionIds||[]);} 
  function currentQuestions(){
    let ids = idsForChapter(selectedChapter);
    const kw = ($('searchInput')?.value||'').trim().toLowerCase();
    let qs=ids.map(qById).filter(Boolean);
    if(kw){qs=qs.filter(q => [q.stem, q.explanation, ...q.options.map(o=>o.text)].join(' ').toLowerCase().includes(kw));}
    return qs;
  }
  function correctRate(){
    const a=Object.values(state.attempts); const total=a.reduce((s,x)=>s+x.total,0); const ok=a.reduce((s,x)=>s+x.correct,0); return total?Math.round(ok/total*100):0;
  }
  function renderStats(){
    const tried=Object.keys(state.attempts).length;
    const wrong=Object.keys(state.wrong).length;
    const mastered=Object.keys(state.mastered).length;
    $('statGrid').innerHTML = [
      ['总题数', DATA.questions.length], ['已练', tried], ['正确率', correctRate()+'%'], ['错题', wrong]
    ].map(([k,v])=>`<div class="stat-card"><b>${v}</b><span>${k}</span></div>`).join('');
  }
  function renderChapters(){
    const list=[{id:'all',title:'全部题库',shortTitle:'全部题库',questionIds:DATA.questions.map(q=>q.id)},...DATA.chapters];
    $('chapterList').innerHTML=list.map(ch=>{
      const ids=ch.questionIds; const tried=ids.filter(id=>state.attempts[id]).length; const pct=ids.length?Math.round(tried/ids.length*100):0;
      return `<button class="chapter-btn ${selectedChapter===ch.id?'active':''}" data-chapter="${ch.id}">
        <strong>${escapeHtml(ch.shortTitle||ch.title)}</strong><small>${ids.length}题｜已练${tried}题｜${pct}%</small><div class="mini-progress"><i style="width:${pct}%"></i></div></button>`
    }).join('');
    $('chapterSelect').innerHTML=list.map(ch=>`<option value="${ch.id}" ${selectedChapter===ch.id?'selected':''}>${escapeHtml(ch.title)}</option>`).join('');
    document.querySelectorAll('.chapter-btn').forEach(btn=>btn.onclick=()=>{selectedChapter=btn.dataset.chapter;save();renderAll();});
  }
  function escapeHtml(s){return String(s??'').replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));}
  function answerText(q){return q.answer.join('');}
  function questionCard(q, show=false){
    const att=state.attempts[q.id];
    return `<article class="question-card" data-qid="${q.id}">
      <div class="q-head"><div class="q-meta">第 ${q.id} 题｜${escapeHtml(q.module)}</div><div class="q-meta">${att?`已练 ${att.total} 次｜对 ${att.correct} 次`:'未练习'}</div></div>
      <div class="q-stem">${escapeHtml(q.stem)}</div>
      <div>${q.options.map(o=>`<div class="option ${q.answer.includes(o.key)?'correct':''}"><span class="key">${o.key}</span><span>${escapeHtml(o.text)}</span></div>`).join('')}</div>
      <div class="answer-box ${show?'show':''}"><div class="answer-line">正确答案：${answerText(q)}</div><div class="explain">解析：${escapeHtml(q.explanation||'这题主要考察基础概念，记住关键词和对应定义即可。')}</div></div>
      <div class="card-actions"><button class="chip toggle-answer">${show?'隐藏答案':'看答案'}</button><button class="chip mark-master ${state.mastered[q.id]?'active':''}">${state.mastered[q.id]?'已掌握':'标记掌握'}</button><button class="chip mark-wrong ${state.wrong[q.id]?'warn':''}">${state.wrong[q.id]?'移出错题':'加入错题'}</button><button class="chip mark-fav ${state.favorite[q.id]?'active':''}">${state.favorite[q.id]?'已收藏':'收藏'}</button></div>
    </article>`;
  }
  function renderStudy(showAll=false){
    const qs=currentQuestions();
    $('viewRoot').innerHTML = qs.length? qs.map(q=>questionCard(q,showAll)).join('') : '<div class="empty">没有匹配到题目。</div>';
    bindCardActions();
  }
  function bindCardActions(){
    document.querySelectorAll('.question-card').forEach(card=>{
      const id=card.dataset.qid;
      const box=card.querySelector('.answer-box');
      card.querySelector('.toggle-answer')?.addEventListener('click',e=>{box.classList.toggle('show'); e.target.textContent=box.classList.contains('show')?'隐藏答案':'看答案';});
      card.querySelector('.mark-master')?.addEventListener('click',()=>{state.mastered[id]?delete state.mastered[id]:state.mastered[id]=true; save(); renderAll();});
      card.querySelector('.mark-wrong')?.addEventListener('click',()=>{state.wrong[id]?delete state.wrong[id]:state.wrong[id]=true; save(); renderAll();});
      card.querySelector('.mark-fav')?.addEventListener('click',()=>{state.favorite[id]?delete state.favorite[id]:state.favorite[id]=true; save(); renderAll();});
    });
  }
  function buildQuizQueue(mode){
    let ids=idsForChapter(selectedChapter);
    if(mode==='wrong') ids=Object.keys(state.wrong).map(Number);
    if(mode==='untried') ids=ids.filter(id=>!state.attempts[id]);
    if(mode==='weak') ids=ids.filter(id=>state.wrong[id] || !state.attempts[id]);
    return ids.map(qById).filter(Boolean);
  }
  function renderQuizSetup(){
    $('viewRoot').innerHTML=`<div class="quiz-setup">
      <div class="quiz-box"><h3>刷当前章节</h3><p>按当前左侧/下拉选择的章节出题。</p><button class="primary start-quiz" data-mode="chapter">开始</button></div>
      <div class="quiz-box"><h3>只刷错题</h3><p>集中处理做错或手动加入错题本的题。</p><button class="secondary start-quiz" data-mode="wrong">开始</button></div>
      <div class="quiz-box"><h3>薄弱优先</h3><p>优先刷错题和未练题，考前效率最高。</p><button class="secondary start-quiz" data-mode="weak">开始</button></div>
    </div>`;
    document.querySelectorAll('.start-quiz').forEach(b=>b.onclick=()=>{quizQueue=buildQuizQueue(b.dataset.mode==='chapter'?'all':b.dataset.mode);quizPos=0;answered=false;selected.clear();renderQuizQuestion();});
  }
  function renderQuizQuestion(){
    if(!quizQueue.length){$('viewRoot').innerHTML='<div class="empty">没有可刷的题。</div>';return;}
    const q=quizQueue[quizPos];
    $('viewRoot').innerHTML=`<div class="quiz-card question-card"><div class="q-meta">${quizPos+1}/${quizQueue.length}｜第 ${q.id} 题｜${escapeHtml(q.module)}</div><div class="q-stem">${escapeHtml(q.stem)}</div>
      <div class="quiz-options">${q.options.map(o=>`<label class="option"><input type="radio" name="ans" value="${o.key}"><span class="key">${o.key}</span><span>${escapeHtml(o.text)}</span></label>`).join('')}</div>
      <div id="quizFeedback"></div><div class="quiz-submit"><button id="submitQuiz" class="primary">提交答案</button><button id="nextQuiz" class="secondary">下一题</button><button id="endQuiz" class="ghost">结束</button></div></div>`;
    answered=false; selected.clear();
    document.querySelectorAll('input[name="ans"]').forEach(i=>i.onchange=()=>{selected=new Set([i.value]);});
    $('submitQuiz').onclick=submitQuiz;
    $('nextQuiz').onclick=()=>{quizPos=(quizPos+1)%quizQueue.length;renderQuizQuestion();};
    $('endQuiz').onclick=renderQuizSetup;
  }
  function submitQuiz(){
    const q=quizQueue[quizPos];
    if(!selected.size){$('quizFeedback').innerHTML='<div class="feedback bad">先选一个答案。</div>';return;}
    if(answered)return; answered=true;
    const pick=[...selected].sort().join(''); const ans=answerText(q); const ok=pick===ans;
    state.attempts[q.id]=state.attempts[q.id]||{total:0,correct:0}; state.attempts[q.id].total++; if(ok) state.attempts[q.id].correct++;
    if(ok) delete state.wrong[q.id]; else state.wrong[q.id]=true;
    save();
    document.querySelectorAll('.quiz-options .option').forEach(label=>{
      const v=label.querySelector('input').value; if(q.answer.includes(v)) label.classList.add('correct'); else if(selected.has(v)) label.classList.add('wrong');
    });
    $('quizFeedback').innerHTML=`<div class="feedback ${ok?'ok':'bad'}">${ok?'答对了':'答错了'}｜你的答案：${pick}｜正确答案：${ans}</div><div class="answer-box show"><div class="explain">解析：${escapeHtml(q.explanation)}</div></div>`;
    renderStats(); renderChapters();
  }
  function renderWrong(){
    const qs=Object.keys(state.wrong).map(qById).filter(Boolean);
    $('viewRoot').innerHTML=qs.length?qs.map(q=>questionCard(q,true)).join(''):'<div class="empty">错题本为空。现在别自嗨，去刷题把错题暴露出来。</div>';
    bindCardActions();
  }
  function renderProgress(){
    const rows=DATA.chapters.map(ch=>{const ids=ch.questionIds; const tried=ids.filter(id=>state.attempts[id]).length; const wrong=ids.filter(id=>state.wrong[id]).length; const mastered=ids.filter(id=>state.mastered[id]).length; const pct=ids.length?Math.round(tried/ids.length*100):0; return `<tr><td>${escapeHtml(ch.shortTitle)}</td><td>${ids.length}</td><td>${tried}</td><td>${wrong}</td><td>${mastered}</td><td><div class="bar"><i style="width:${pct}%"></i></div></td></tr>`}).join('');
    $('viewRoot').innerHTML=`<table class="progress-table"><thead><tr><th>章节</th><th>题数</th><th>已练</th><th>错题</th><th>掌握</th><th>进度</th></tr></thead><tbody>${rows}</tbody></table>`;
  }
  function switchView(v){currentView=v;save(); document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===v)); renderView();}
  function renderView(){if(currentView==='study')renderStudy(false); else if(currentView==='quiz')renderQuizSetup(); else if(currentView==='wrong')renderWrong(); else renderProgress();}
  function renderAll(){renderStats();renderChapters();renderView();}

  document.addEventListener('click',e=>{const v=e.target?.dataset?.view;if(v)switchView(v);});
  $('chapterSelect').onchange=e=>{selectedChapter=e.target.value;save();renderAll();};
  $('searchInput').oninput=()=>{if(currentView!=='study') switchView('study'); else renderStudy(false);};
  $('btnShowAll').onclick=()=>renderStudy(true); $('btnHideAll').onclick=()=>renderStudy(false);
  $('btnReset').onclick=()=>{if(confirm('确定清空所有学习记录？')){state=baseState();selectedChapter='all';currentView='study';save();renderAll();}};
  $('btnExport').onclick=()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='文本与Web挖掘刷题记录.json'; a.click(); URL.revokeObjectURL(a.href);};
  $('importFile').onchange=e=>{const file=e.target.files[0]; if(!file)return; const r=new FileReader(); r.onload=()=>{try{state=Object.assign(baseState(), JSON.parse(r.result));selectedChapter=state.selectedChapter||'all';currentView=state.currentView||'study';save();renderAll();alert('导入成功');}catch(err){alert('导入失败：JSON格式不对');}}; r.readAsText(file);};
  renderAll();
})();
