const textBtn = document.getElementById('btn');
textBtn.addEventListener('click', () => {
  const textStr = document.getElementById('text');

  setTimeout(() => {
    textStr.textContent="ボタンをクリックしました";
  }, 2000);
});