function getPokeValues(inputPokeTypeName, inputPokeID, inputPokeName, inputPokeSprite, inputDivID){
        return  `

                        <div class="card ${inputPokeTypeName}" style="width: 18rem;">
                            <h2 class="card-title">${inputPokeID}#  ${makeFirstLetterBig(inputPokeName)}</h2>
                            <img src="${inputPokeSprite}"  class="card-img-top" alt="pokemon-image">
                            <div id="${inputDivID}" class="card-body"> 
                        </div>

                `

}


function getTypeEmblem(typeInput){
    contentRef = document.getElementById(typeEmblemID);
    switch(typeInput){
        case "grass":
            return contentRef.innerHTML +=  `<img class="typeEmblemIcon grass" src=".gitignore/img/icons/poke-type/grass.png" alt="grass-type-icon">`;
        case "fire":
            return contentRef.innerHTML += `<img class="typeEmblemIcon fire emblem_brightness" src=".gitignore/img/icons/poke-type/fire.png" alt="fire-type-icon">`;
        case "water":
            return contentRef.innerHTML +=  `<img class="typeEmblemIcon water emblem_brightness" src=".gitignore/img/icons/poke-type/water.png" alt="water-type-icon">`;
        case "rock":
            return contentRef.innerHTML +=  `<img class="typeEmblemIcon rock emblem_brightness" src=".gitignore/img/icons/poke-type/rock.png" alt="rock-type-icon">`;
        case "electric":
            return contentRef.innerHTML += `<img class="typeEmblemIcon electric emblem_brightness" src=".gitignore/img/icons/poke-type/electric.png" alt="electric-type-icon">`;
        case "bug":
            return contentRef.innerHTML += `<img class="typeEmblemIcon bug emblem_brightness" src=".gitignore/img/icons/poke-type/bug.png" alt="bug-type-icon">`;
        case "fight":
            return contentRef.innerHTML += `<img class="typeEmblemIcon fight emblem_brightness" src=".gitignore/img/icons/poke-type/fight.png" alt="fight-type-icon">`;
        case "ice":
            return contentRef.innerHTML += `<img class="typeEmblemIcon ice emblem_brightness" src=".gitignore/img/icons/poke-type/ice.png" alt="ice-type-icon">`;
        case "psychic":
            return contentRef.innerHTML += `<img class="typeEmblemIcon psychic emblem_brightness" src=".gitignore/img/icons/poke-type/psychic.png" alt="psychic-type-icon">`;
        case "dark":
            return contentRef.innerHTML += `<img class="typeEmblemIcon dark emblem_brightness" src=".gitignore/img/icons/poke-type/dark.png" alt="dark-type-icon">`;
        case "poison":
            return contentRef.innerHTML += `<img class="typeEmblemIcon poison emblem_brightness" src=".gitignore/img/icons/poke-type/poison.png" alt="poison-type-icon">`;
        case "ghost":
            return contentRef.innerHTML += `<img class="typeEmblemIcon ghost emblem_brightness" src=".gitignore/img/icons/poke-type/ghost.png" alt="ghost-type-icon">`;
        case "dark":
            return contentRef.innerHTML += `<img class="typeEmblemIcon dark emblem_brightness" src=".gitignore/img/icons/poke-type/dark.png" alt="dark-type-icon">`;
        case "steel":
            return contentRef.innerHTML += `<img class="typeEmblemIcon steel emblem_brightness" src=".gitignore/img/icons/poke-type/steel.png" alt="steel-type-icon">`;
        case "dragon":
            return contentRef.innerHTML += `<img class="typeEmblemIcon dragon emblem_brightness" src=".gitignore/img/icons/poke-type/dragon.png" alt="dragon-type-icon">`;
        case "normal":
            return contentRef.innerHTML += `<img class="typeEmblemIcon normal emblem_brightness" src=".gitignore/img/icons/poke-type/normal.png" alt="normal-type-icon">`;
        case "flying":
            return contentRef.innerHTML += `<img class="typeEmblemIcon flying emblem_brightness" src=".gitignore/img/icons/poke-type/flying.png" alt="flying-type-icon">`;
        case "ground":
            return contentRef.innerHTML += `<img class="typeEmblemIcon ground emblem_brightness" src=".gitignore/img/icons/poke-type/ground.png" alt="ground-type-icon">`;
        default:
            return "";
    }
}