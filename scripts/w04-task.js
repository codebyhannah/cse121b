/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name : "Hannah Anderson",
    photo : "images/IMG_1994.PNG",
    favoriteFoods : [
        "Nine Boy Curry",
        "Cheesy Potato Soup",
        "Chicken Basil Soup",
        "Chili",
        "Honey Walnut Shrimp",
        "Barbecue Ribs",
        "Caramel Ice Cream",
        "Lazy Daisy Cake",
        "Rasberries",
        "Blackberries",
        "Blueberry Muffins",
        "Coconut Cream Pie",
        "Boiled Cream Treats"
    ],
    hobbies : [
        "Reading",
        "Drawing",
        "Writing Poetry",
        "Singing",
        "Video Games",
        "Misc. Crafts",
        "Baking"
    ],
    placesLived : [],
};

/* Populate Profile Object with placesLived objects */

myProfile.placesLived.push(
    {
        place : "Rexburg, ID",
        length : "1 year and 4 months"
    },
    {
        place : "Boise, ID",
        length : "18 years and 8 months"
    }
);

/* DOM Manipulation - Output */

/* Name */

document.getElementById("name").innerText = myProfile.name;

/* Photo with attributes */

document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = "Hannah Anderson";

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    console.log(food);
    let li = document.createElement("li");
    li.textContent = food;
    document.getElementById("favorite-foods").appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.getElementById("hobbies").appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement("dt");
    dt.innerHTML = placeLived.place;
    let dd = document.createElement("dd");
    dd.innerHTML = placeLived.length;
    document.getElementById("places-lived").appendChild(dt);
    document.getElementById("places-lived").appendChild(dd);
});