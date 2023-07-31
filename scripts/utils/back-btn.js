import { makeForm } from "./make-form.js";

export const backBtnReset = (main) => {
  // Clear task display
  const taskContainer = document.querySelector("#task-display-container");
  main.removeChild(taskContainer);

  // Add the form back to DOM set listeners
  const formContainer = document.querySelector('#form');
  formContainer.reset();
  formContainer.style.display = 'flex';
};
