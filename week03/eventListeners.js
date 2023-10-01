const buttonElement = document.getElementById("submitButton");

function copyInput(event) {
    console.log(event);
    const inputElement = document.getElementById("inputBox");
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = inputElement.value;
}

buttonElement.addEventListener("click", copyInput);

const log = document.querySelector("#log");

document.addEventListener("keydown", logKey);

function logKey(e) {
    console.log(e.keyCode);
    // e.code, e.key, and e.keyCode are all different.
    // e.code is whatever the key cap should read, it doesn't change with shift.
    // e.key is whatever you actually typed, case included, shift applies. 
    // e.keyCode is the numerical code that matches each key
}