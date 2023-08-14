import { createTimer } from "./utils/create-timer.js";
import { decrement, increment } from "./increment-decrement.js";
import { setTask } from "./setTask.js";
import { makeForm } from "./utils/make-form.js";
import { backBtnReset } from "./utils/back-btn.js";
import { nextBtn } from "./utils/next-btn.js";
import { global } from "./utils/global-variables.js";
import { setTaskTimer, shortBreakTimer, longBreakTimer } from "./utils/timer-duration-btns.js";


/*------------------------------------*\
  Function calls
\*------------------------------------*/

makeForm();

/*------------------------------------*\
  Global variables
\*------------------------------------*/


//DOM access
const controlImg = document.querySelector("#control-img");
const main = document.querySelector("#main");

//Make a new timer object
const timer = createTimer(controlImg);

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

  // Listeners to set timer durations
  if (target.id === 'pomo-btn') {
    setTaskTimer();
  }
  if (target.id === 'short-btn') {
    shortBreakTimer();
  }
  if (target.id === 'long-btn') {
    longBreakTimer();
  }

  // Listeners to react with form buttons
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
  // if (target.id === "break-btn") {
  //   breakBtn();
  // }
  if (target.id === "next-btn") {
    nextBtn();
  }

});
