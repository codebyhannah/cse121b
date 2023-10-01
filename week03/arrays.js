var strings = ["one", "two", "three"];

var listItems = strings.map((string) => `<li>${string}</li>`);

document.getElementById("myList").innerHTML = listItems.join("");

var grades = ["A", "B", "A"];

function getGpa(grade){
    var points = 0;
    switch(grade) {
        case "A":
            points = 4;
            break;
        case "B":
            points = 3;
            break;
        case "C":
            points = 2;
            break;
        case "D":
            points = 1;
            break;
        default:
            points = 0;
    }
    return points;
}

var gpaPoints = grades.map(getGpa);

console.log(gpaPoints);

var gpa = gpaPoints.reduce((total,points) => total + points, 0) / gpaPoints.length;

console.log(gpa);

var fruits = ["watermelon", "peach", "apple", "tomato", "grape"]

var fruitSix = fruits.filter((fruit) => fruit.length < 6);

console.log(fruits);

console.log(fruitSix);

var numbers = [12,34,21,54];

luckyNumber = 21;

var luckyIndex = numbers.indexOf(luckyNumber);

console.log(luckyIndex);