const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=400&offset=0";
let pickUrl = "https://pokeapi.co/api/v2/pokemon/";
let evoChainURL =  "https://pokeapi.co/api/v2/pokemon-species/";

let pokeID = 1;
let typeEmblemID = "TypeEmblemID" + pokeID;

let overlayButtonCase = 1;

//did anyone have a better name for this variable?
let actualCountOffHowManyPokemonsAreBeenShownOnThePage = 20;

window.pokemons = [];
//this is only reqired for the filter bar function
let allPokemonNames = [];


function render(){
    loadAndRenderPokemons();
}


async function fetchAndEnrichPokemonData(pokeID) {
    let responsePokeValues = await fetch(pickUrl + pokeID);
    let responsePokeValuesJson = await responsePokeValues.json();
    window.pokemons[responsePokeValuesJson.id] = responsePokeValuesJson;

    // Evochain
    let speciesResponse = await fetch(responsePokeValuesJson.species.url);
    let speciesData = await speciesResponse.json();
    responsePokeValuesJson.speciesData = speciesData;

    let evoResponse = await fetch(speciesData.evolution_chain.url);
    let evoData = await evoResponse.json();
    responsePokeValuesJson.evoData = evoData;

    // Filterbar
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0");
    let data = await response.json();
    allPokemonNames = data.results.map(p => p.name);

    return responsePokeValuesJson;
}



async function loadAndRenderPokemons() {
    hideMorePokemonsButton();
    let contentRef = document.getElementById("content");
    await new Promise(resolve => setTimeout(resolve, 1000));
    pokeID = 1;
    contentRef.innerHTML = "";

    for (let index = 0; index < actualCountOffHowManyPokemonsAreBeenShownOnThePage; index++) {
        let pokeObject = await fetchAndEnrichPokemonData(pokeID);
        showLoadingSpinner();
        renderAllPokemons(pokeID);
        hideLoadingSpinner();
        pokeID++;
        typeEmblemID = typeEmblemID.slice(0, -1) + pokeID;
    }
    showMorePokemonsButton();
}


function renderAllPokemons(inputPokeID){
    const pokeObject = window.pokemons[inputPokeID];
    if (!pokeObject) return;
    let contentRef = document.getElementById("content");
    contentRef.innerHTML += getPokeValues(pokeObject.id, pokeObject.name, pokeObject.types, pokeObject.types[0].type.name, pokeObject.sprites.front_default);
}


