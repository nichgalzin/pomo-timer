export const breakBtnListener = () => {
  const breakBtn = document.querySelector("#break-btn");
  breakBtn.addEventListener("click", () => {
    // click the short break button to set timer for break.
    // const shortBtn = document.querySelector("#short-btn");
    // shortBtn.click();

    // Set the text to 'take a break'
    const textContent = breakBtn.previousElementSibling;
    console.log(textContent);
  });
};
