function getPokeValues(inputPokeID, inputPokeName, inputPokeTypeArray, inputPokeTypeName,inputPokeIMG){
        return  `

                        <div onclick="renderOverlay(${inputPokeID})" class="card ${inputPokeTypeName}" style="width: 18rem;">
                            <h2 class="card-title">${inputPokeID}#  ${makeFirstLetterBig(inputPokeName)}</h2>
                            <img src="${inputPokeIMG}"  class="card-img-top" alt="pokemon-image">
                            <div class="card-body">
                                    <div class="type-emblem-container">
                                        ${getTypeEmblemHTML(inputPokeTypeName)} 
                                        ${checkIfMoreThanOneType(inputPokeTypeArray)}
                                    </div>
                            </div>
                        </div>

                `

}

function getOverlayContent(inputPokeID, inputPokeName, inputPokeTypeArray, inputPokeTypeName, inputPokeSprite){
    return `
                                <div class="card ${inputPokeTypeName} centered-overlay-content" style="width: 35rem;">
                                    <h2 class="card-title card-title-extended">${inputPokeID}#  ${makeFirstLetterBig(inputPokeName)}</h2>
                                    <img src="${inputPokeSprite}"  class="card-img-top" alt="pokemon-image">
                                    
                                    <div class="card-body card-body-extended">
                                    <div class="type-emblem-container">
                                        ${getTypeEmblemHTML(inputPokeTypeName)}
                                        ${checkIfMoreThanOneType(inputPokeTypeArray)}
                                    </div>
                                    </div>
                                    <div class="button-order">
                                        <button onclick="getOverlayMainValues(${inputPokeID})" class="btn btn-primary button-shape">main</button>
                                        <button onclick="getOverlayStats(${inputPokeID})" class="btn btn-primary button-shape">stats</button>
                                        <button onclick="getOverlayEvos(${inputPokeID})" class="btn btn-primary button-shape">evo chain</button>
                                    </div>
                                    <div id="buttonOutputID">

                                    </div>
                                
                                </div>
                                        
                            `
}



function getTypeEmblemHTML(inputType){
    switch(inputType){
       case "grass":
            return `<img class="typeEmblemIcon grass" src=".gitignore/img/icons/poke-type/grass.png" alt="grass-type-icon">`;
        case "fire":
            return `<img class="typeEmblemIcon fire emblem_brightness" src=".gitignore/img/icons/poke-type/fire.png" alt="fire-type-icon">`;
        case "water":
            return `<img class="typeEmblemIcon water emblem_brightness" src=".gitignore/img/icons/poke-type/water.png" alt="water-type-icon">`;
        case "rock":
            return `<img class="typeEmblemIcon rock emblem_brightness" src=".gitignore/img/icons/poke-type/rock.png" alt="rock-type-icon">`;
        case "electric":
            return `<img class="typeEmblemIcon electric emblem_brightness" src=".gitignore/img/icons/poke-type/electric.png" alt="electric-type-icon">`;
        case "bug":
            return `<img class="typeEmblemIcon bug emblem_brightness" src=".gitignore/img/icons/poke-type/bug.png" alt="bug-type-icon">`;
        case "fighting":
            return `<img class="typeEmblemIcon fighting emblem_brightness" src=".gitignore/img/icons/poke-type/fight.png" alt="fight-type-icon">`;
        case "ice":
            return `<img class="typeEmblemIcon ice emblem_brightness" src=".gitignore/img/icons/poke-type/ice.png" alt="ice-type-icon">`;
        case "psychic":
            return `<img class="typeEmblemIcon psychic emblem_brightness" src=".gitignore/img/icons/poke-type/psychic.png" alt="psychic-type-icon">`;
        case "dark":
            return `<img class="typeEmblemIcon dark emblem_brightness" src=".gitignore/img/icons/poke-type/dark.png" alt="dark-type-icon">`;
        case "poison":
            return `<img class="typeEmblemIcon poison emblem_brightness" src=".gitignore/img/icons/poke-type/poison.png" alt="poison-type-icon">`;
        case "ghost":
            return `<img class="typeEmblemIcon ghost emblem_brightness" src=".gitignore/img/icons/poke-type/ghost.png" alt="ghost-type-icon">`;
        case "fairy":
            return `<img class="typeEmblemIcon fairy emblem_brightness" src=".gitignore/img/icons/poke-type/fairy.png" alt="ground-type-icon">`;
        case "steel":
            return `<img class="typeEmblemIcon steel emblem_brightness" src=".gitignore/img/icons/poke-type/steel.png" alt="steel-type-icon">`;
        case "dragon":
            return `<img class="typeEmblemIcon dragon emblem_brightness" src=".gitignore/img/icons/poke-type/dragon.png" alt="dragon-type-icon">`;
        case "normal":
            return `<img class="typeEmblemIcon normal emblem_brightness" src=".gitignore/img/icons/poke-type/normal.png" alt="normal-type-icon">`;
        case "flying":
            return `<img class="typeEmblemIcon flying emblem_brightness" src=".gitignore/img/icons/poke-type/flying.png" alt="flying-type-icon">`;
        case "ground":
            return `<img class="typeEmblemIcon ground emblem_brightness" src=".gitignore/img/icons/poke-type/ground.png" alt="ground-type-icon">`;
        default:
            return "";
    }

}

function getMainValues(inputHeight, inputWeight, inputExpirience, inputAbilities){
    return `<table class="table table-striped">
                                <tr>                    
                                        <td>height:</td>
                                        <td>${inputHeight}</td>
                                </tr>
                                <tr>                    
                                        <td>weight:</td>
                                        <td>${inputWeight}</td>
                                </tr>
                                <tr>                    
                                        <td>base exp.</td>
                                        <td>${inputExpirience}</td>
                                </tr>
                                <tr>                    
                                        <td>abilities</td>
                                        <td>${checkIfMoreThanOneAbility(inputAbilities)}</td>
                                </tr>
                            </table>`
}


function getStats(inputHP, inputAttack, inputDefense, InputSpecialAttack, inputSpecialDefense, inputSpeed){
    return `<div class="font-colour-white stats-div">

            <div>
                <i>HP</i>
                <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="${inputHP}" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-warning" style="width: ${inputHP}%">
                        ${inputHP}
                    </div>
                 </div>
            </div>

            <div>
                <i>attack</i>
                <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="${inputAttack}" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-warning" style="width: ${inputAttack}%">
                        ${inputAttack}
                    </div>
                 </div>
            </div>

            <div>
                <i>defense</i>
                <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="${inputDefense}" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-warning" style="width: ${inputDefense}%">
                        ${inputDefense}
                    </div>
                 </div>
            </div>

            <div>
                <i>special Attack</i>
                <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="${InputSpecialAttack}" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-warning" style="width: ${InputSpecialAttack}%">
                        ${InputSpecialAttack}
                    </div>
                 </div>
            </div>

            <div>
                <i>special Defense</i>
                <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="${inputSpecialDefense}" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-warning" style="width: ${inputSpecialDefense}%">
                        ${inputSpecialDefense}
                    </div>
                 </div>
            </div>

            <div>
                <i>speed</i>
                <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="${inputSpeed}" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar bg-warning" style="width: ${inputSpeed}%">
                        ${inputSpeed}
                    </div>
                 </div>
            </div>
    
    
            </div>
    `
}

