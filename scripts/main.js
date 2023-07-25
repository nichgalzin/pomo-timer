let timerInterval;
let endTime;
let isTimerRunning = false;
let timerDuration;

timerDuration = 25 * 60 * 1000;
const timerContainer = document.querySelector('#timer');
const controlImg = document.querySelector('#control-img');

const startTimer = (timerDuration) => {
  if (!isTimerRunning) {
    endTime = Date.now() + timerDuration;
    isTimerRunning = true;
    timerInterval = setInterval(updateTimerDisplay, 1000);

    // Handle pause button symbol and class name
    controlImg.src = "./resources/pause.svg"
    controlImg.className = 'pause';
 
  }
}

const stopTimer = () => {
  if (isTimerRunning) {
    clearInterval(timerInterval);
    isTimerRunning = false;
    timerDuration = remainingTime();
    // Handle play button and class name
    controlImg.src = "./resources/play.svg" 
    controlImg.className = 'play';
  }
}

const remainingTime = () => {
  const currentTime = Date.now();
  return Math.max(endTime - currentTime, 0);
}

const updateTimerDisplay = () => {
  const remaining = remainingTime();
  const formattedTime = formatTime(remaining);
  document.getElementById('time').innerText = formattedTime;

  if (remainingTime === 0) {
    stopTimer();
    // add sound here
  }
}

const formatTime = (timeInMiliseconds) => {
  const totalSeconds = Math.floor(timeInMiliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}


timerContainer.addEventListener('click', (event) => {
  const target = event.target;
  const className = target.getAttribute('class');
  if (className === 'play') {
    startTimer(timerDuration);
  }
  if (className === 'pause') {
    stopTimer();
  }
})


