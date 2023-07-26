export const setTask = () => {
    // select elements
    const main = document.getElementById('main');
    let taskInput = document.getElementById('task-input').value;
    let pomoNumber = document.getElementById('pomo-number').value;
    const formContainer = document.getElementById('form');

    // hide set task and related buttons
    formContainer.style.display = 'none';

    // create text render
    const pomoResult = document.createElement('div');
    const taskResult = document.createElement('p');
    taskResult.classList.add('text-render');
    const taskResultText = document.createTextNode(taskInput);
    taskResult.append(taskResultText);
    const numberOfPomos = document.createElement('p');
    numberOfPomos.classList.add('text-render');
    const numberOfPomosText = document.createTextNode(`1 of ${pomoNumber} pomos`);
    numberOfPomos.append(numberOfPomosText);

    // create buttons
    const breakButton = document.createElement('button');
    breakButton.classList.add('button', 'break-back');
    const breakButtonText = document.createTextNode('Break');
    breakButton.append(breakButtonText);
    const backButton = document.createElement('button');
    backButton.classList.add('button', 'break-back');
    const backButtonText = document.createTextNode('Back');
    backButton.append(backButtonText);
    pomoResult.append(taskResult, numberOfPomos, breakButton, backButton);
    main.append(pomoResult);
};