import { global } from "./global-variables.js";

export const nextBtn = () => {
  // Add to pomo count and change desplaying text
  const pomoCountText = document.querySelector("#number-pomos");
  
  // Advance pomo count if it is less then total set
  if (global.currentPomo < global.totalPomos) {
    global.currentPomo += 1;
  }
  pomoCountText.textContent = `${global.currentPomo} of ${global.totalPomos} pomos`;

  // //start timer
  // const startBtn = document.querySelector('#');
  // startBtn.click();
};
