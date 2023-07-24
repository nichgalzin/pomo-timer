export const increment = (numberOfPomos) => {
    let pomoNumber = document.getElementById('pomo-number');
    if(pomoNumber && pomoNumber.value) {
    //     turn value from string to number
        pomoNumber.value = parseInt(pomoNumber.value) + 1;
    }
}

export const decrement = (numberOfPomos) => {
    let pomoNumber = document.getElementById('pomo-number');
    if(pomoNumber && pomoNumber.value) {
        if(pomoNumber.value < 1) {
            return
        }
    //     turn value from string to number
        pomoNumber.value = parseInt(pomoNumber.value) - 1;
    }
}