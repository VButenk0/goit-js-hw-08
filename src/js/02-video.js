import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

function onTimeUpdate(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

player.setVolume(0.3);

player.on('timeupdate', throttle(onTimeUpdate, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
