function render(){
    loadAndRenderPokemons();
}

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0";
let pickUrl = "https://pokeapi.co/api/v2/pokemon/";
let pokeID = 1;
let typeEmblemID = "TypeEmblemID" + pokeID;

async function loadAndRenderPokemons(){

    for(index = 0; index < 9; index++){

        let responseBASE = await fetch(BASE_URL + "json.js");
        let responsePokeValues = await fetch(pickUrl + pokeID);
        let responseBASEToJson = await responseBASE.json();
        let responsePokeValuesJson = await responsePokeValues.json();
        let pokeName = (responseBASEToJson.results[index].name);

        contentRef = document.getElementById("content");
        contentRef.innerHTML += getPokeValues(responsePokeValuesJson.types[0].type.name, responsePokeValuesJson.id, pokeName, responsePokeValuesJson.sprites.front_default, typeEmblemID);
            
            getTypeEmblem(responsePokeValuesJson.types[0].type.name);
            checkIfMoreThanOneType(responsePokeValuesJson);
            
            
        pokeID++;
        typeEmblemID = typeEmblemID.slice(0, -1) + pokeID;
    }      

}

function checkIfMoreThanOneType(inputPokeValuesJson){
            if(inputPokeValuesJson.types.length > 1){
                getTypeEmblem(inputPokeValuesJson.types[1].type.name);
            }
            if(inputPokeValuesJson.types.length > 2){
                getTypeEmblem(inputPokeValuesJson.types[2].type.name);
            }
}


function makeFirstLetterBig(inputString){
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

function openOverlay(){
    let overlayRef = document.getElementById("overlayID");
    const contentRef = document.getElementById("overlayContent");
    overlayRef.classList.toggle("d_none");
     contentRef.classList.toggle("d_none");
}

function renderOverlay(inputPokeTypeName, inputPokeID, inputPokeName, inputPokeSprite, inputDivID){
    openOverlay()
    const contentRef = document.getElementById("overlayContent");
    contentRef.innerHTML =  getOverlayContent(inputPokeTypeName, inputPokeID, inputPokeName, inputPokeSprite, inputDivID);
    
    
    
}

function getOverlayContent(inputPokeTypeName, inputPokeID, inputPokeName, inputPokeSprite, inputDivID){
    return `
                                <div class="card ${inputPokeTypeName} centered-overlay-content" style="width: 35rem;">
                                    <h2 class="card-title card-title-extended">${inputPokeID}#  ${makeFirstLetterBig(inputPokeName)}</h2>
                                    <img src="${inputPokeSprite}"  class="card-img-top" alt="pokemon-image">
                                    <div id="${inputDivID}" class="card-body card-body-extended">
                                    <div class="button-order">
                                        <button class="btn btn-primary button-shape">main</button>
                                        <button class="btn btn-primary button-shape">stats</button>
                                        <button class="btn btn-primary button-shape">evo chain</button>
                                    </div>
                                    </div>
                                </div>
    
                            `
}


//function function1(inputPokeName, inputBASEJson, inputPokeValuesJson, inputTypeEmblemID){

//        contentRef = document.getElementById("content");
//        contentRef.innerHTML += getPokeValues(inputBASEJson.types[0].type.name, inputPokeValuesJson.id, inputPokeName, inputPokeValuesJson.sprites.front_default, inputTypeEmblemID);
            
//        getTypeEmblem(inputBASEJson.types[0].type.name);
//            if(inputPokeValuesJson.types.length > 1){
//                getTypeEmblem(inputPokeValuesJson.types[1].type.name);
//            }
        
//            pokeID++;
//        inputTypeEmblemID = inputTypeEmblemID.slice(0, -1) + pokeID;
        
//}

//                                <div class="card ${inputPokeTypeName} position-absolute" style="width: 18rem;">
//                                    <h2 class="card-title">${inputPokeID}#  ${makeFirstLetterBig(inputPokeName)}</h2>
//                                    <img src="${inputPokeSprite}"  class="card-img-top" alt="pokemon-image">
//                                    <div id="${inputDivID}" class="card-body"> 
//                                </div>