import colorObj from "./colors.js"

var powers;

//import colors as a module
var numColors = colorObj.basicColors.length;

var hero = {
    name : "",
    secretIdentity : "",
    gender : "",
    hideout : "",
    powers : [],
    weakness : "",
    colors : [],
}

var heroElement = document.getElementById("heroDiv");

const getPowers = async () => {
    const response = await fetch("https://run.mocky.io/v3/13e6871c-b577-4495-b831-18166d7ee224");
    if (response.ok) {
        powers = await response.json();
        //console.log(powers);
        //console.log(powers.powers.fire); //requires powers twice to work
    }
    doThingsThatRelyOnTheJson();
}

function doThingsThatRelyOnTheJson() {
    intializeSelectors();
}

// Initialize Selectors to correct number of options
function intializeSelectors(){
    var numCategories = Object.keys(powers.powers).length;
    var numPowers = 0;
    for (var category in powers.powers) {
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
}
var powerNum = 1;
function selectPowerNum(){
    powerNum = parseInt(document.getElementById("powerNum").value);
}
var selectedCategoriesList = []
function selectCategories(){
    var categories = []
    var categoryNum = parseInt(document.getElementById("categoryNum").value);
    for(var i = 0; i < categoryNum; i++) {
        categories.push(getRandomInt(0,Object.keys(powers.powers).length-1));
    }
    categories.forEach(num => {
        var name = Object.keys(powers.powers)[num]
        selectedCategoriesList = selectedCategoriesList.concat(powers.powers[name]);
    });
}

function generatePowers() {
    for(var i = 0; i < powerNum; i++) {
        var num = getRandomInt(0,selectedCategoriesList.length-1)
        hero.powers.push(selectedCategoriesList[num]);
    }
}

function selectColors(){
    hero.colors = []
    var colorNum = parseInt(document.getElementById("colorNum").value);
    for(var i = 0; i < colorNum; i++) {
        var num = getRandomInt(0,colorNum-1)
        hero.colors.push(colorObj.basicColors[num]);
    }
}

function generateHero(){
    generatePowers();

    heroElement.innerHTML = `<p>Name: ${hero.name}</p><p>Secret Identity: ${hero.secretIdentity}</p><p>Gender: ${hero.gender}</p><p>Hideout: ${hero.hideout}</p><p>Powers: ${hero.powers}</p><p>Weakness: ${hero.weakness}</p><p>Colors: ${hero.colors}</p>`
}

getPowers();

// Event Listeners

document.getElementById("gender").addEventListener("change", selectGender);

document.getElementById("powerNum").addEventListener("change", selectPowerNum);

document.getElementById("categoryNum").addEventListener("change", selectCategories);

document.getElementById("colorNum").addEventListener("change", selectColors);

document.getElementById("generateButton").addEventListener("click", generateHero);
