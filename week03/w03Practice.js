//let firstName = 'Antonia';
//let lastName = 'Francesca';

let firstName = 'Hannah';
let lastName = 'Anderson';

function fullName(first, last) {
    return `${first} ${last}`;
}

/*var fullName = function (first, last) {
    return `${first} ${last}`;
}*/

//var fullName = (first, last) => `${first} ${last}`;

document.getElementById("fullName").innerText = fullName(firstName, lastName);


let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

document.getElementById("names").innerText = names;

var namesB = names.filter((name) => name[0].toUpperCase()=="B");

document.getElementById("namesB").innerText = namesB;

var namesLength = names.map((name) => name.length);

document.getElementById("namesLength").innerText = namesLength;

var namesAvLen = names.reduce((total,name) => total + name.length, 0) / names.length;

document.getElementById("namesAvLen").innerText = namesAvLen;