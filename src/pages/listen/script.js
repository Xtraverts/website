const sample = '../../assets/audio/sample.mp3';

const player = document.getElementById('player');

const deselectElement = (element, event) => {
  element.forEach((child, index) => {
    if (index % 2 !== 0) {
      child.classList.remove('selected-song')
    }
  })
  event.target.classList.add('selected-song');
}


player.addEventListener('click', (e) => {
  switch (e.target.id) {
    
    case 'song-1':
      deselectElement(player.childNodes, e);
      let audio = new Audio(sample);
      audio.play();
      break;

    case 'song-2':
      deselectElement(player.childNodes, e);
      break;

    case 'song-3':
      deselectElement(player.childNodes, e);
      break;

    case 'song-4':
      deselectElement(player.childNodes, e);
      break;

    case 'song-5':
      deselectElement(player.childNodes, e);
      break;

    case 'song-6':
      deselectElement(player.childNodes, e);
      break;

    default:
      return;
  }
})