/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
var fullName = "Hannah Anderson";
var currentYear = 2023;
var profilePicture = "images/IMG_1994.PNG"

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
var favFoods = ["Rasberries","Blackberries","Nine Boy Curry","Potato Soup","Chili","Caramel Ice Cream","Lazy Daisy Cake"];
foodElement.innerText = favFoods;
var singleFood = "Chicken Basil Soup";
favFoods.push(singleFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;