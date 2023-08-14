import { global } from "./utils/global-variables.js";

export const setTask = () => {
  // select elements
  const main = document.getElementById("main");
  let taskInput = document.getElementById("task-input").value;
  global.totalPomos = document.getElementById("pomo-number").value;
  const formContainer = document.getElementById("form");

  // hide set task and related buttons
  formContainer.style.display = "none";

  // create text render
  const pomoResult = document.createElement("div");
  pomoResult.id = "task-display-container";

  const taskResult = document.createElement("h2");
  taskResult.classList.add("text-render");

  const taskResultText = document.createTextNode(taskInput);
  taskResult.append(taskResultText);

  const numberOfPomos = document.createElement("p");
  numberOfPomos.classList.add("text-render");
  numberOfPomos.id = "number-pomos";

  const numberOfPomosText = document.createTextNode(
    `${global.currentPomo} of ${global.totalPomos} pomos`
  );
  numberOfPomos.append(numberOfPomosText);

  // create buttons
  const nextButton = document.createElement("button");
  nextButton.classList.add("button", "break-back");
  nextButton.id = "next-btn";
  nextButton.textContent = 'Next';

  const backButton = document.createElement("button");
  backButton.classList.add("button", "break-back");
  backButton.id = "back-btn";
  const backButtonText = document.createTextNode("Back");
  backButton.append(backButtonText);

  pomoResult.append(taskResult, numberOfPomos, nextButton, backButton);
  main.append(pomoResult);
};
