import { createTimer } from "./utils/create-timer.js";
import { decrement, increment } from "./increment-decrement.js";
import { setTask } from "./setTask.js";
import { makeForm } from "./utils/make-form.js";
import { breakBtn } from "./utils/break-btn.js";
import { backBtnReset } from "./utils/back-btn.js";
import { isTimerRunning } from "./utils/create-timer.js";

/*------------------------------------*\
  Function calls
\*------------------------------------*/

makeForm();

/*------------------------------------*\
  Global variables
\*------------------------------------*/

let timerDuration = 0.5 * 60 * 1000;

//DOM access
const timerContainer = document.querySelector("#timer");
const controlImg = document.querySelector("#control-img");
const main = document.querySelector("#main");

//Make a new timer object
const timer = createTimer(timerDuration, controlImg);

/*------------------------------------*\
  Event listeners
\*------------------------------------*/

main.addEventListener("click", (event) => {
  const target = event.target;

  // Listener to deal with play button
  const className = target.getAttribute("class");
  if (className === "play") {
    timer.start();
  }
  if (className === "pause") {
    timer.stop();
  }

  // Listeners to reat with form buttons
  if (target.id === "up-btn") {
    event.preventDefault();
    increment();
  }
  if (target.id === "down-btn") {
    event.preventDefault();
    decrement();
  }
  if (target.id === "submit") {
    event.preventDefault();
    setTask();
  }
  if (target.id === "back-btn") {
    backBtnReset(main);
  }
  if (target.id === "break-btn") {
    breakBtn();
  }

  if (target.id === "long-btn") {
    timer.clear();
    const longTimer = createTimer(10 * 60 * 1000, controlImg);
    longTimer.start();
  }
});
