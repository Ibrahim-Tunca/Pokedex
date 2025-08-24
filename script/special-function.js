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


function filterAndRenderPokemons(){
    document.querySelector('input[type="text"]').addEventListener('input', async function(e) {
        if(e.target.value.length < 2){render();}
        if (e.target.value.length > 2) {
            let search = e.target.value.toLowerCase();
            let filteredNames = allPokemonNames.filter(name => name.includes(search));
            let contentRef = document.getElementById("content");
            contentRef.innerHTML = "";
            for (let name of filteredNames) {
                let pokeObject = window.pokemons.find(p => p && p.name === name);
                if (!pokeObject) {
                    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                    pokeObject = await response.json();
                    window.pokemons[pokeObject.id] = pokeObject;
                }
                contentRef.innerHTML += getPokeValues(pokeObject.id, pokeObject.name, pokeObject.types, pokeObject.types[0].type.name, pokeObject.sprites.front_default);
            }
        }
    });
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
    renderOverlay(inputPokeID)    
}


function showPrevPokemon(inputPokeID){
    inputPokeID--;
    if(inputPokeID < 1){
        inputPokeID = 1;
    }
    toggleOverlay();
    renderOverlay(inputPokeID)
}

