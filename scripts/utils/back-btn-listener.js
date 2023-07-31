import { backBtnReset } from "./back-btn.js";

export const backButtonListener = () => {
  // Select btn and run reset function
  const backBtn = document.querySelector("#back-btn");
  backBtn.addEventListener("click", backBtnReset);
};
