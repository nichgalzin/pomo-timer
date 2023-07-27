import { makeForm } from "../make-form.js";

export const backBtnReset = () => {
  // Clear task display
  const main = document.querySelector("main");
  const taskContainer = document.querySelector("#task-display-container");
  main.removeChild(taskContainer);

  // Add the form back to DOM
  makeForm();
};
