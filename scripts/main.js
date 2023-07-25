import { decrement, increment } from "./increment-decrement.js";
import { setTask } from "./setTask.js";

// when up button is clicked, it increments by one
const upButton = document.getElementById('up-btn')
upButton.addEventListener('click', (event) => {
    event.preventDefault();
    increment();
});

// when down button is clicked, it increments by one
const downButton = document.getElementById('down-btn')
downButton.addEventListener('click', (event) => {
    event.preventDefault();
    decrement();
});

const addButton = document.getElementById('submit')
addButton.addEventListener('click', (event) => {
    event.preventDefault();
    setTask();
})