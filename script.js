const bg = document.querySelector('body');
bg.classList.add('bg_on');

function bgOn() {
  bg.classList.remove('bg_off');
  bg.classList.add('bg_on');
};

function bgOff() {
  bg.classList.add('bg_off');
  bg.classList.remove('bg_on');
};

setTimeout(bgOff, 2000);
setTimeout(bgOn, 2400);
setTimeout(bgOff, 2600);
setTimeout(bgOn, 2700);
setTimeout(bgOff, 2880);
setTimeout(bgOn, 3000);