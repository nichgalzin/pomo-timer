import { createTimer } from "./utils/create-timer.js";

/*------------------------------------*\
  Global variables
\*------------------------------------*/

let timerDuration = .5 * 60 * 1000;
const timerContainer = document.querySelector('#timer');
const controlImg = document.querySelector('#control-img');

const timer = createTimer(timerDuration, controlImg);

/*------------------------------------*\
  Event listeners
\*------------------------------------*/


timerContainer.addEventListener('click', (event) => {
  const target = event.target;
  const className = target.getAttribute('class');
  if (className === 'play') {
    timer.start();
  }
  if (className === 'pause') {
    timer.stop();
  }
})


