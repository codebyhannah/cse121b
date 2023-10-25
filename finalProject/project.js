var powers;

const heroElement = document.getElementById("heroDiv");

const getPowers = async () => {
    const response = await fetch("https://run.mocky.io/v3/c0d123a9-65f7-4aa0-8e75-4a12dc9c00e2");
    if (response.ok) {
        powers = await response.json();
        //console.log(powers);
        //console.log(powers.powers.fire); //requires powers twice to work
    }
    displayHero();
}

function displayHero() {
    intializeSelectors()
}

// Initialize Selectors to correct number of options
function intializeSelectors(){
    for (category in powers.powers) {
        console.log(category)
    }
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