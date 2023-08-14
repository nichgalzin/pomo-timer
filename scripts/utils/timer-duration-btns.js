import { global } from "./global-variables.js";

// DOM access
const time = document.querySelector("#time");
const timerContainer = document.querySelector("#timer");

//Pomo button
const pomoBtn = document.querySelector("#pomo-btn");

export const setTaskTimer = () => {
  global.timerDuration = 1500000;
  time.textContent = "25:00";
  timerContainer.style.background = "var(--tertiary-light)";
};

export const shortBreakTimer = () => {
  global.timerDuration = 300000;
  time.textContent = "5:00";
  timerContainer.style.background = "var(--secondary-light)";
};

export const longBreakTimer = () => {
  global.timerDuration = 600000;
  time.textContent = "10:00";
  timerContainer.style.background = "var(--primary-light)";
};
