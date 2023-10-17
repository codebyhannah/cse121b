/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
var templeList = [];

/* async displayTemples Function */

const displayTemples = (listOfTemples) => {
    listOfTemples.forEach(temple => {
        var articleElement = document.createElement("article");
        var nameElement = document.createElement("h3");
        nameElement.innerText = temple.templeName;
        var imgElement = document.createElement("img");
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;
        // Added width edit because one of the pictures was way bigger than all the rest.
        imgElement.style.width = "400px";
        articleElement.appendChild(nameElement);
        articleElement.appendChild(imgElement);
        templesElement.appendChild(articleElement);
    });
}

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();
        displayTemples(templeList);
    }
}

/* reset Function */
function reset() {
    templesElement.innerHTML = "";
}

/* sortBy Function */
const sortBy = function (temples) {
    reset();
    var filter = document.getElementById("sortBy").value;
    switch(filter) {
        case "utah":
            displayTemples(templeList.filter((temple) => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(templeList.filter((temple) => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(templeList.filter((temple) => Date.parse(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "alphabetical":
            displayTemples(temples.sort((a, b) => {
                if (a.templeName > b.templeName){
                    // Sort b before a
                    return 1;
                } else if (a.templeName < b.templeName) {
                    // a and b different but unchanged (already in the correct order)
                    return -1;
                } else return 0; // a and b are equal
            }));
            break;
        case "all":
            displayTemples(temples);
            break;
    }
}

getTemples();

/* Event Listener */

document.getElementById("sortBy").addEventListener("change", () => {sortBy(templeList)});