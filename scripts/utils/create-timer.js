export const createTimer = (timerDuration, controlImg) => {
  let timerInterval;
  let endTime;
  let isTimerRunning = false;

  const startTimer = () => {
    if (!isTimerRunning) {
      endTime = Date.now() + timerDuration;
      isTimerRunning = true;
      timerInterval = setInterval(updateTimerDisplay, 1000);

      // Handle pause button symbol and class name
      controlImg.src = "./resources/pause.svg";
      controlImg.className = "pause";
    }
  };

  const stopTimer = () => {
    if (isTimerRunning) {
      clearInterval(timerInterval);
      isTimerRunning = false;
      timerDuration = remainingTime();
      controlImg.src = "./resources/play.svg";
      controlImg.className = "play";
    }
  };

  const remainingTime = () => {
    const currentTime = Date.now();
    return Math.max(endTime - currentTime, 0);
  };

  const updateTimerDisplay = () => {
    const remaining = remainingTime();
    const formattedTime = formatTime(remaining);
    document.getElementById("time").innerText = formattedTime;

    if (remainingTime === 0) {
      stopTimer();
      // add sound here
    }
  };

  const formatTime = (timeInMiliseconds) => {
    const totalSeconds = Math.floor(timeInMiliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${padZero(minutes)}:${padZero(seconds)}`;
  };

  function padZero(number) {
    return number.toString().padStart(2, "0");
  }

  return {
    start: startTimer,
    stop: stopTimer,
  };
};
