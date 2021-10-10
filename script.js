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
setTimeout(bgOff, 2900);
setTimeout(bgOn, 3080);
setTimeout(bgOff, 3260);
setTimeout(bgOn, 3380);
