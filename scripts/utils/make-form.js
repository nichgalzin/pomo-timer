export const makeForm = () => {
  // Select form template and make a new form
  const formTemplate = document.querySelector("#form-template");
  const newForm = formTemplate.content.cloneNode(true);

  // Select parent container and append
  const main = document.querySelector("main");
  main.append(newForm);

};
