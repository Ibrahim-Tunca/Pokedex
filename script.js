const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=400&offset=0";
let pickUrl = "https://pokeapi.co/api/v2/pokemon/";
let evoChainURL =  "https://pokeapi.co/api/v2/pokemon-species/";

let pokeID = 1;
let typeEmblemID = "TypeEmblemID" + pokeID;

let overlayButtonCase = 1;

//did anyone have a better name for this variable?
let actualCountOffHowManyPokemonsAreBeenShownOnThePage = 9;

window.pokemons = [];


function render(){
    loadAndRenderPokemons();
}


async function loadAndRenderPokemons(){

    hideMorePokemonsButton()

    await new Promise(resolve => setTimeout(resolve, 1000));

    for(index = 0; index < actualCountOffHowManyPokemonsAreBeenShownOnThePage; index++){

        let responsePokeValues = await fetch(pickUrl + pokeID);
        let responsePokeValuesJson = await responsePokeValues.json();
        window.pokemons[responsePokeValuesJson.id] = responsePokeValuesJson;

        let speciesResponse = await fetch(responsePokeValuesJson.species.url);
        let speciesData = await speciesResponse.json();
        responsePokeValuesJson.speciesData = speciesData;

        let evoResponse = await fetch(speciesData.evolution_chain.url);
        let evoData = await evoResponse.json();
        responsePokeValuesJson.evoData = evoData;
        

        


        
        showLoadingSpinner();
        renderAllPokemons(pokeID);
        hideLoadingSpinner();
        

        pokeID++;
        typeEmblemID = typeEmblemID.slice(0, -1) + pokeID;
    }      
    showMorePokemonsButton()
}



function renderAllPokemons(inputPokeID){
    const pokeObject = window.pokemons[inputPokeID];
    let contentRef = document.getElementById("content");
    contentRef.innerHTML += getPokeValues(pokeObject.id, pokeObject.name, pokeObject.types, pokeObject.types[0].type.name, pokeObject.sprites.front_default);
}


