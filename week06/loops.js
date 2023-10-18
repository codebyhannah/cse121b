myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
        {
            place: "Rexburg, ID",
            length: "5 years",
        },
        {
            place: "Ammon, ID",
            length: "3 years",
        },
        {
            place: "Sandy, UT",
            length: "1 year",
        },
    ],
};

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
/*
// .foreach
myInfo.favoriteFoods.forEach((food) => {
    let favFood = document.createElement("li");
    favFood.textContent = food;
    document.querySelector("#favorite-foods").appendChild(favFood);
})

// .map
myInfo.favoriteFoods.map((food) => {
    document.querySelector("#favorite-foods").innerHTML += `<li>${food}</li>`;
})
*/

// reusable 
var makeListItem = (string) => {
    return `<li>${string}</li>`;
}

var makePlaceHtml = (place) => {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

function listToHtmlString(list, callback) {
    var htmlString = list.map((item) => {
        return callback(item);
    }).join("");
    console.log(htmlString);
    return htmlString;
}

document.getElementById("favorite-foods").innerHTML = listToHtmlString(myInfo.favoriteFoods, makeListItem);

document.getElementById("places-lived").innerHTML = listToHtmlString(myInfo.placesLived, makePlaceHtml);