async function fetchEvoChain(pokeObject) {

    let speciesResponse = await fetch(pokeObject.species.url);
    let speciesData = await speciesResponse.json();
    pokeObject.speciesData = speciesData;

    let evoResponse = await fetch(speciesData.evolution_chain.url);
    let evoData = await evoResponse.json();
    pokeObject.evoData = evoData;

    return pokeObject;
}


async function getOverlayEvos(inputID){  
    const pokeObject = window.pokemons[inputID];
    const evoData = pokeObject.evoData;
    let contentRef = document.getElementById("buttonOutputID");
    

    let chain = evoData.chain;
    contentRef.innerHTML = "";
    loadUnloadedPokemons(chain);
    
 }


function loadUnloadedPokemons(inputChain){
    
    while (inputChain) {
        searchPokeId(inputChain.species.name);
        if (inputChain.evolves_to && inputChain.evolves_to.length > 0) {
            inputChain = inputChain.evolves_to[0];
        }else{
            inputChain = null;
            }
        }
}


async function searchPokeId(inputName){
    const pokeAPI = window.pokemons;
    let actualID = null;
    for(let i = 1; i < pokeAPI.length; i++){
        if(pokeAPI[i] && inputName == pokeAPI[i].name){
            actualID = i;
            break;
        }
    }
    if(actualID === null) {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputName}`);
        let pokeObject = await response.json();
        window.pokemons[pokeObject.id] = pokeObject;
        actualID = pokeObject.id;
    }
    if(actualID !== null) {
        getPokeChain(actualID);
    }
    overlayButtonCase = 3;
}


 function getPokeChain(inputID){
    const pokeObject = window.pokemons[inputID];
    let contentRef = document.getElementById("buttonOutputID"); 
    contentRef.classList.add("evoChain-card-order");
    let typeName = pokeObject.types[0].type.name;
    let pokeName = pokeObject.name;
    let pokeIMG = pokeObject.sprites.front_default;
    contentRef.innerHTML += getPokeChainTemplate(typeName, pokeName, pokeIMG);
 }



