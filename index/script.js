const bg = document.querySelector('body');
bg.classList.add('bg_on');

function bgOn() {
  bg.classList.add('bg_on');
  bg.classList.remove('bg_off');
};

function bgOff() {
  bg.classList.add('bg_off');
  bg.classList.remove('bg_on');
};

setTimeout(bgOff, 2000);
setTimeout(bgOn, 2200);
setTimeout(bgOff, 2500);
setTimeout(bgOn, 2700);
