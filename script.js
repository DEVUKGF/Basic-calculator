let screen = document.getElementById('screen');

function inputValue(value) {
    screen.value += value;
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = "Error";
    }
}

function clearScreen() {
    screen.value = "";
}