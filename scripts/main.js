import { createTimer } from "./utils/create-timer.js";
import { decrement, increment } from "./increment-decrement.js";
import { setTask } from "./setTask.js";
import { makeForm } from "./make-form.js";
import { backButtonListener } from "./utils/back-btn-listener.js";

/*------------------------------------*\
  Global variables
\*------------------------------------*/

let timerDuration = 0.5 * 60 * 1000;
const timerContainer = document.querySelector("#timer");
const controlImg = document.querySelector("#control-img");

const timer = createTimer(timerDuration, controlImg);

/*------------------------------------*\
  Function calls
\*------------------------------------*/

makeForm();

/*------------------------------------*\
  Event listeners
\*------------------------------------*/

timerContainer.addEventListener("click", (event) => {
  const target = event.target;
  const className = target.getAttribute("class");
  if (className === "play") {
    timer.start();
  }
  if (className === "pause") {
    timer.stop();
  }
});

// when up button is clicked, it increments by one
const upButton = document.getElementById("up-btn");
upButton.addEventListener("click", (event) => {
  event.preventDefault();
  increment();
});

// when down button is clicked, it increments by one
const downButton = document.getElementById("down-btn");
downButton.addEventListener("click", (event) => {
  event.preventDefault();
  decrement();
});

const addButton = document.getElementById("submit");
addButton.addEventListener("click", (event) => {
  event.preventDefault();
  setTask();
  backButtonListener();
});
