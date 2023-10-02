/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.getElementById("add1").value); 
    let addNumber2 = Number(document.getElementById("add2").value);
    document.getElementById("sum").value = add(addNumber1, addNumber2);
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
var subtract = function (number1, number2) {
    return number1 - number2;
}

var subtractNumber = function () {
    let subNumber1 = Number(document.getElementById("subtract1").value);
    let subNumber2 = Number(document.getElementById("subtract2").value);
    document.getElementById("difference").value = subtract(subNumber1, subNumber2);
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumber);

/* Arrow Function - Multiply Numbers */
var multiply = (number1, number2) => number1 * number2;

var multiplyNumbers = () => document.getElementById("product").value = multiply(Number(document.getElementById("factor1").value), Number(document.getElementById("factor2").value));

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
var divide = (number1, number2) => number1 / number2;

function divideNumbers() {
    let dividend = Number(document.getElementById("dividend").value);
    let divisor = Number(document.getElementById("divisor").value);
    document.getElementById("quotient").value = divide(dividend, divisor);
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
var date = new Date();
var currentYear = date.getFullYear();
document.getElementById("year").innerHTML = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById("array").innerHTML = numbersArray;

/* Output Odds Only Array */
let odds = numbersArray.filter((num) => num % 2 !== 0);
document.getElementById("odds").innerHTML = odds;

/* Output Evens Only Array */
let evens = numbersArray.filter((num) => num % 2 === 0);
document.getElementById("evens").innerHTML = evens;

/* Output Sum of Org. Array */
let sum = numbersArray.reduce((total, num) => total + num, 0);
document.getElementById("sumOfArray").innerHTML = sum;

/* Output Multiplied by 2 Array */
let multiplied = numbersArray.map((num) => num * 2);
document.getElementById("multiplied").innerHTML = multiplied;

/* Output Sum of Multiplied by 2 Array */
let multSum = multiplied.reduce((total, num) => total + num, 0);
document.getElementById("sumOfMultiplied").innerHTML = multSum;