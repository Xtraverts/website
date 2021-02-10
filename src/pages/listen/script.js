const song_speed = '../../assets/audio/speed.mp3';
const song_johnny = '../../assets/audio/jhonny.wav';
const song_1984 = '../../assets/audio/1984.mp3';
const song_plastic = '../../assets/audio/plastic.mp3';
const song_blank_generation = '../../assets/audio/blank-generation.mp3';
const song_police_state = '../../assets/audio/police-state.mp3';

const player = document.getElementById('player');

const deselectElement = (element, event) => {
  element.forEach((child, index) => {
    if (index % 2 !== 0) {
      child.classList.remove('selected-song')
    }
  })
  event.target.classList.add('selected-song');
}

let audio;

const handleAudio = (song) => {
  if (audio) {
    audio.pause();
  }
  audio = new Audio(song);
  audio.load();
  audio.play();
}

player.addEventListener('click', (e) => {
  switch (e.target.id) {
    
    case 'song-1':
      deselectElement(player.childNodes, e);
      handleAudio(song_speed);
      break;

    case 'song-2':
      deselectElement(player.childNodes, e);
      handleAudio(song_johnny);
      break;

    case 'song-3':
      deselectElement(player.childNodes, e);
      handleAudio(song_1984);
      break;

    case 'song-4':
      deselectElement(player.childNodes, e);
      handleAudio(song_plastic);
      break;

    case 'song-5':
      deselectElement(player.childNodes, e);
      handleAudio(song_blank_generation);
      break;

    case 'song-6':
      deselectElement(player.childNodes, e);
      handleAudio(song_police_state);
      break;

    default:
      return;
  }
})