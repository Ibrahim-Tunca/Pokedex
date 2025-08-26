function makeFirstLetterBig(inputString){
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}


function hideLoadingSpinner() {
    document.getElementById('loading').style.display = 'none';
}


function showLoadingSpinner() {
    contentRef = document.getElementById('loading').style.display = 'block';
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


async function renderMorePokemons(){
    hideMorePokemonsButton()
    actualCountOffHowManyPokemonsAreBeenShownOnThePage += 20;
    showLoadingSpinner();
    await loadAndRenderPokemons();
    hideLoadingSpinner();
    showMorePokemonsButton()
    
}


function hideMorePokemonsButton(){
    let contentRef = document.getElementById("morePokemonID");
    contentRef.classList.add("d_none");
}


function showMorePokemonsButton(){
    let contentRef = document.getElementById("morePokemonID");
    contentRef.classList.remove("d_none");
}


function showNextPokemon(inputPokeID){
    inputPokeID++;
    if(inputPokeID > actualCountOffHowManyPokemonsAreBeenShownOnThePage){
        inputPokeID = actualCountOffHowManyPokemonsAreBeenShownOnThePage;
    }
    toggleOverlay();
    renderOverlay(inputPokeID);    
}


function showPrevPokemon(inputPokeID){
    inputPokeID--;
    if(inputPokeID < 1){
        inputPokeID = 1;
    }
    toggleOverlay();
    renderOverlay(inputPokeID);
}

