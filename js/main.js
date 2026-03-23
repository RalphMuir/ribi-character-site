// 上方切換（目前只是UI）
function switchTop(i){
  document.querySelectorAll('.tab').forEach((t,idx)=>{
    t.classList.toggle('active', idx===i);
  });
}

// 下方切換
function switchBottom(i){
  document.querySelectorAll('.sub-tab').forEach((t,idx)=>{
    t.classList.toggle('active', idx===i);
  });

  document.querySelectorAll('.sub-content').forEach((c,idx)=>{
    c.classList.toggle('active', idx===i);
  });
}