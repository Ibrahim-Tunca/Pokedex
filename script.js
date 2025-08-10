const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0";
let pickUrl = "https://pokeapi.co/api/v2/pokemon/";
let evoChainURL =  "https://pokeapi.co/api/v2/pokemon-species/";

let pokeID = 1;
let typeEmblemID = "TypeEmblemID" + pokeID;

window.pokemons = [];


function render(){
    loadAndRenderPokemons();
}

function makeFirstLetterBig(inputString){
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

async function loadAndRenderPokemons(){
    
    for(index = 0; index < 9; index++){

        await new Promise(resolve => setTimeout(resolve, 1000));
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

function checkIfMoreThanOneType(inputArray){
  
     let html = "";
           if(inputArray.length > 1){
               html += getTypeEmblemHTML(inputArray[1].type.name);
            }
           if(inputArray.length > 2){
               html += getTypeEmblemHTML(inputArray[2].type.name);
            }
    return html;
}

function renderAllPokemons(inputPokeID){
    const pokeObject = window.pokemons[inputPokeID];
    let contentRef = document.getElementById("content");

   
   
    
        contentRef.innerHTML += getPokeValues(pokeObject.id, pokeObject.name, pokeObject.types, pokeObject.types[0].type.name, pokeObject.sprites.front_default);
       

}

function hideLoadingSpinner() {
    document.getElementById('loading').style.display = 'none';
}

function showLoadingSpinner() {
    contentRef = document.getElementById('loading').style.display = 'flex';
}
   



function filterAndRenderPokemons(){
    document.querySelector('input[type="text"]').addEventListener('input', function(e) {
    let search = e.target.value.toLowerCase();
    let filtered = window.pokemons.filter (poke => poke && poke.name.toLowerCase().includes(search));
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";
    filtered.forEach(poke => {
        contentRef.innerHTML += getPokeValues(
            poke.id,
            poke.name,
            poke.types,
            poke.types[0].type.name,
            poke.sprites.front_default
            );
        });
    });
}
