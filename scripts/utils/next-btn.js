import { global } from "./global-variables.js";

export const nextBtn = () => {
  // Add to pomo count and change desplaying text
  const pomoCountText = document.querySelector(".text-render");
  global.currentPomo += 1;
  pomoCountText.innerHTML = `${global.currentPomo} of ${global.totalPomos} pomos`;

  //Change button back to break 
  const nextBtn = document.querySelector('#next-btn');
  nextBtn.textContent = 'Break';
  nextBtn.id = 'break-btn';

  // //start timer
  // const startBtn = document.querySelector('#');
  // startBtn.click();
};
