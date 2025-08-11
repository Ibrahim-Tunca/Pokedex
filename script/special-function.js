function makeFirstLetterBig(inputString){
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}


function hideLoadingSpinner() {
    document.getElementById('loading').style.display = 'none';
}

function showLoadingSpinner() {
    contentRef = document.getElementById('loading').style.display = 'flex';
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
