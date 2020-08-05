const note = document.getElementById('note');
const close = document.getElementById('cros');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  console.log(1);
  note.classList.add('div-animation-back');
  note.addEventListener('animationend', () => {
    console.log(2);
    note.classList.remove('div-animation-back');
    note.style.opacity = 1;
    close.addEventListener('click', () => {
      btn.style.opacity = 1;
      note.classList.add('div-animation');
      console.log(3);
      note.addEventListener('animationend', () => {
        note.classList.remove('div-animation');
        note.style.opacity = 0;
        console.log(4);
      });
    });
  });
});
btn.addEventListener('animationend', () => {
  btn.style.transform = "scale(1.2)";
});
btn.addEventListener('click', () => {
  btn.classList.add('btn-click');
  btn.addEventListener('animationend', () => {
    btn.classList.remove('btn-click');
    btn.style.opacity = 0;
  });
});
