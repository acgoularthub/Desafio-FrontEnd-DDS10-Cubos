const btnTheme = document.querySelector('.btn-theme');
const root = document.querySelector(':root');

function applyCurrentTheme() {
  const currentTheme = localStorage.getItem('theme');
  if (!currentTheme || currentTheme === 'dark') {
    btnTheme.src = '../assets/dark-mode.svg';
    root.style.setProperty('--background', '#181a1b');
    root.style.setProperty('--input-color', '#665F5F');
    root.style.setProperty('--text-color', '#FFFFFF');
    root.style.setProperty('--bg-secondary', '#2D3440');
    btnNext.src = '../assets/arrow-right-light.svg';
    btnPrev.src = '../assets/arrow-left-light.svg';
    modalClose.src = '../assets/close.svg';
    return;
  }

  btnTheme.src = '../assets/light-mode.svg';
  root.style.setProperty('--background', '#fff');
  root.style.setProperty('--input-color', '#979797');
  root.style.setProperty('--text-color', '#1b2028');
  root.style.setProperty('--bg-secondary', '#ededed');
  btnNext.src = '../assets/arrow-right-dark.svg';
  btnPrev.src = '../assets/arrow-left-dark.svg';
  modalClose.src = '../assets/close-dark.svg';
  
}

applyCurrentTheme();

btnTheme.addEventListener('click', () => {
  const currentTheme = localStorage.getItem('theme');

  if (!currentTheme || currentTheme === 'dark') {
    localStorage.setItem('theme', 'light');
    applyCurrentTheme();
    return;
  }

  localStorage.setItem('theme', 'dark');
  applyCurrentTheme();

} );