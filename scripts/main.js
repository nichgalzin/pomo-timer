import { decrement, increment } from "./increment-decrement.js";

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