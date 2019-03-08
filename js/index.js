const display = document.querySelector('.display');

document.querySelectorAll('.digits button, .opers button').forEach(button=>button.addEventListener('click', digitPressed));

function digitPressed(e) {
    display.value += e.target.innerHTML;
}

document.querySelectorAll('.equal').forEach(button=>button.addEventListener('click', equalPressed));

function equalPressed() {
    display.value = eval(display.value);
}

document.querySelectorAll('.clear').forEach(button=>button.addEventListener('click', clearPressed));

function clearPressed() {
    display.value = "";

}