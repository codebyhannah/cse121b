const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url, doThis) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        doThis(data);
    }
}
/*
async function getPokemonList(url) {
    const response = await fetch(url);
    if(response.ok) {
        const data = await response.json();
        doStuffList(data);
    }
}*/

function doStuff(data) {
    var outputElement = document.getElementById("output");
    results = data;
    var html = `<h2>${results.name}</h2><img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
    outputElement.innerHTML = html;
    console.log("first: ", results);
}

function compare(a, b) {
    if (a.name > b.name){
        // Sort b before a
        return 1;
    } else if (a.name < b.name) {
        // a and b different but unchanged (already in the correct order)
        return -1;
    } else return 0; // a and b are equal
}

function sortPokemon(list) {
    let sortedList = list.sort(compare);
    return sortedList;
}

function doStuffList(data) {
    console.log("List: ", data);
    var outputListElement = document.getElementById("outputList");
    var pokeList = data.results;
    // sort the list 
    pokeList = sortPokemon(pokeList);
    pokeList.forEach((pokemon) => {
        var html = `<li>${pokemon.name}</li>`
        outputListElement.innerHTML += html;
    });
}

getPokemon(url, doStuff);
console.log("second: ", results);
//getPokemonList(urlList);
getPokemon(urlList, doStuffList);