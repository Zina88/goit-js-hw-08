const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);
const throttle = require('lodash.throttle');

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
