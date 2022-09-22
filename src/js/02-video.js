import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_TIME_PLAYER = 'videoplayer-current-time';

const onPlay = function (data) {
  const playTime = data.seconds;

  localStorage.setItem(LOCALSTORAGE_TIME_PLAYER, playTime);
};

player.on('timeupdate', throttle(onPlay, 1000));

let playbackTime = localStorage.getItem(LOCALSTORAGE_TIME_PLAYER);

player
  .setCurrentTime(playbackTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
