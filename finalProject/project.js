var powers;

//import colors as a module
var numColors = 10;

var hero = {
    name : "",
    secretIdentity : "",
    gender : "",
    hideout : "",
    powers : [],
    weakness : "",
}
console.log(hero)

const heroElement = document.getElementById("heroDiv");

const getPowers = async () => {
    const response = await fetch("https://run.mocky.io/v3/13e6871c-b577-4495-b831-18166d7ee224");
    if (response.ok) {
        powers = await response.json();
        //console.log(powers);
        //console.log(powers.powers.fire); //requires powers twice to work
    }
    displayHero();
}

function displayHero() {
    intializeSelectors();
}

// Initialize Selectors to correct number of options
function intializeSelectors(){
    var numCategories = 0;
    var numPowers = 0;
    for (category in powers.powers) {
        numCategories++;
        numPowers += powers.powers[category].length;
    }
    var powerNumSelectElement = document.getElementById("powerNum");
    powerNumSelectElement.innerHTML = `<option value="" disabled selected>Select Number</option><option value="random">Randomize</option>`;
    for(let i = 0; i < numPowers; i++){
        var opt = document.createElement("option");
        opt.setAttribute("value",`${i+1}`);
        opt.innerHTML=`${i+1}`;
        powerNumSelectElement.appendChild(opt);
    }
    var categoryNumSelectElement = document.getElementById("categoryNum");
    categoryNumSelectElement.innerHTML = `<option value="" disabled selected>Select Number</option><option value="random">Randomize</option>`;
    for(let i = 0; i < numCategories; i++){
        var opt = document.createElement("option");
        opt.setAttribute("value",`${i+1}`);
        opt.innerHTML=`${i+1}`;
        categoryNumSelectElement.appendChild(opt);
    }
    var colorNumSelectElement = document.getElementById("colorNum");
    colorNumSelectElement.innerHTML = `<option value="" disabled selected>Select Number</option><option value="random">Randomize</option>`;
    for(let i = 0; i < numColors; i++){
        var opt = document.createElement("option");
        opt.setAttribute("value",`${i+1}`);
        opt.innerHTML=`${i+1}`;
        colorNumSelectElement.appendChild(opt);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function selectGender(){
    var gender;
    var selection = document.getElementById("gender").value;
    switch(selection) {
        case "random":
            var num = getRandomInt(1,2);
            if(num == 1){
                gender = "Female";
            } else {
                gender = "Male";
            }
            break;
        case "male":
            gender = "Male";
            break;
        case "female":
            gender = "Female";
            break;
    }
    hero.gender = gender;
    console.log(hero);
}
var powerNum = 1;
function selectPowers(){
    powerNum = document.getElementById("");
}
var selectCategories = 1;
function selectCategories(){

}

function selectColors(){

}

function generateHero(){

}

/*
•	Use ES modules.
o	Module containing basic superhero format (object) and all related methods.
o	Module for the name/secret identity/hideout etc. generator, can accept two inputs, like the first letter of first name, and first letter of last name, or first letter of childhood home, or whatever, and use those to pick which things are used, or do it entirely randomly, user’s choice. Puts together two strings from the lists to get the end result. 

•	Include conditional branching. (if/else and switch)
o	Use with the inputs and selections.

•	Exclusively use template literals when building strings.
o	Do this in the display of the finalized hero.
•	Use an array and at least one array method. 
o	Array of powers, each of which might be an object so as to include power categories, like fire, ice, superhuman abilities (super strength, super speed, super senses), and the like so they can be sorted by those specific categories for specialized heroes. User can choose to have the super hero’s powers only chosen from one specialized category, two specialized categories, or from all categories. 
•	The project must consume external data using Fetch and where the data is delivered in JSON format be that through a third-party API or your own data source.
o	Put lists of powers, name pieces, secret identity name pieces, hideout locations, etc. in the JSON file. Is there a JSON out there with a list of super powers already?
*/
getPowers();

// Event Listeners

document.getElementById("gender").addEventListener("change", selectGender);

document.getElementById("powerNum").addEventListener("change", selectPowers);

document.getElementById("categoryNum").addEventListener("change", selectCategories);

document.getElementById("colorNum").addEventListener("change", selectColors);

document.getElementById("generate").addEventListener("click", generateHero);