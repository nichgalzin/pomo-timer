export const breakBtn = () => {
  const shortBtn = document.querySelector("#short-btn");
  shortBtn.click();

  // Set the text to 'take a break'
  const textMessage = document.querySelector(".text-render");
  textMessage.textContent = "Take a break!";

  // Change the function of the button
  const breakBtn = document.querySelector("#break-btn");
  breakBtn.textContent = "Next pomo";
  breakBtn.id = "next-btn";
};
