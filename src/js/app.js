const note = document.getElementById('note');
const close = document.getElementById('cros');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  note.classList.add('div-animation-back');
  note.addEventListener('animationend', () => {
    note.classList.remove('div-animation-back');
    note.style.opacity = 1;
    close.addEventListener('click', () => {
      btn.style.opacity = 1;
      btn.style.transform = 'scale(1)';
      note.classList.add('div-animation');
      note.addEventListener('animationend', () => {
        note.classList.remove('div-animation');
        note.style.opacity = 0;
      });
    });
  });
});
btn.addEventListener('animationend', () => {
  btn.style.transform = 'scale(1.2)';
});
let coin = 0;
btn.addEventListener('click', () => {
  coin = 1;
  btn.classList.add('btn-click');
  btn.addEventListener('animationend', () => {
    if (coin === 1) {
      btn.classList.remove('btn-click');
      btn.style.opacity = 0;
    }
    coin = 0;
  });
});
