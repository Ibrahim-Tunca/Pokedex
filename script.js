const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0";
let pickUrl = "https://pokeapi.co/api/v2/pokemon/";
let evoChainURL =  "https://pokeapi.co/api/v2/pokemon-species/";

let pokeID = 1;
let typeEmblemID = "TypeEmblemID" + pokeID;

//did anyone have a better name for this variable?
let actualCountOffHowManyPokemonsAreBeenShownOnThePage = 9;

window.pokemons = [];


function render(){
    loadAndRenderPokemons();
}


async function loadAndRenderPokemons(){

    await new Promise(resolve => setTimeout(resolve, 3000));

    for(index = 0; index < actualCountOffHowManyPokemonsAreBeenShownOnThePage; index++){

        let responsePokeValues = await fetch(pickUrl + pokeID);
        let responsePokeValuesJson = await responsePokeValues.json();
        window.pokemons[responsePokeValuesJson.id] = responsePokeValuesJson;

        showLoadingSpinner();
        renderAllPokemons(pokeID);
        hideLoadingSpinner();

        pokeID++;
        typeEmblemID = typeEmblemID.slice(0, -1) + pokeID;
    }      

}



function renderAllPokemons(inputPokeID){
    const pokeObject = window.pokemons[inputPokeID];
    let contentRef = document.getElementById("content");
    contentRef.innerHTML += getPokeValues(pokeObject.id, pokeObject.name, pokeObject.types, pokeObject.types[0].type.name, pokeObject.sprites.front_default);
}



async function renderMorePokemons(){
   
    const contentRef = document.getElementById("morePokemonID");
    contentRef.classList.add("d_none")

    actualCountOffHowManyPokemonsAreBeenShownOnThePage += 9;

    showLoadingSpinner();
    await loadAndRenderPokemons();
    hideLoadingSpinner();

    contentRef.classList.remove("d_none");
}

