function getOverlayMainValues(inputID){
    const pokeObject = window.pokemons[inputID];
    pokeHeight = pokeObject.height;
    pokeWeight = pokeObject.weight;
    pokeExpirience = pokeObject.base_experience;
    pokeAbilities = pokeObject.abilities;
    

    let contentRef = document.getElementById("buttonOutputID");
    
    contentRef.innerHTML = getMainValues(pokeHeight, pokeWeight, pokeExpirience, pokeAbilities);
    overlayButtonCase = 1;
}

function checkIfMoreThanOneAbility(inputArray){
     let html = "";
            if(inputArray.length > 0){
               html += inputArray[0].ability.name;
            }
            if(inputArray.length > 1){
               html += inputArray[1].ability.name;
            }
            if(inputArray.length > 2){
               html += inputArray[2].ability.name;
            }
            if(inputArray.length > 3){
               html += inputArray[3].ability.name;
            }

            //return is only to get an separator after every string
    return inputArray.map(a => a.ability.name).join(', ');
}

