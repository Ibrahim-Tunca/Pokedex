function renderOverlay(inputPokeID){
    const pokeObject = window.pokemons[inputPokeID];

    let contentRef = document.getElementById("overlayContent");
    contentRef.innerHTML =  getOverlayContent(inputPokeID, pokeObject.name, pokeObject.types, pokeObject.types[0].type.name, pokeObject.sprites.front_default);
    
    openOverlay()
    document.getElementById('buttonOutputID').innerHTML = getOverlayMainValues(inputPokeID);
}  

function openOverlay(){
    const screenDarkerRef = document.getElementById("overlayID");
    const overlayContentRef = document.getElementById("overlayContent");
    
    screenDarkerRef.classList.toggle("d_none");
    overlayContentRef.classList.toggle("d_none");
    
}




function getOverlayMainValues(inputID){
    const pokeObject = window.pokemons[inputID];
    pokeHeight = pokeObject.height;
    pokeWeight = pokeObject.weight;
    pokeExpirience = pokeObject.base_experience;
    pokeAbilities = pokeObject.abilities;
    

    let contentRef = document.getElementById("buttonOutputID");
    
    contentRef.innerHTML = getMainValues(pokeHeight, pokeWeight, pokeExpirience, pokeAbilities);
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



function getOverlayStats(inputID){
    const pokeObject = window.pokemons[inputID];

    pokeHP = pokeObject.stats[0].base_stat;
    pokeAttack = pokeObject.stats[1].base_stat;
    pokeDefense = pokeObject.stats[2].base_stat;
    pokeSpecialAttack = pokeObject.stats[3].base_stat;
    pokeSpecialDefense = pokeObject.stats[4].base_stat;
    pokeSpeed = pokeObject.stats[5].base_stat;

    let contentRef = document.getElementById("buttonOutputID");

    contentRef.innerHTML = getStats(pokeHP, pokeAttack, pokeDefense, pokeSpecialAttack, pokeSpecialDefense, pokeSpeed);
}


 async function getOverlayEvos(inputID){
    const pokeObject = window.pokemons[inputID]

    let speciesResponse = await fetch(pokeObject.species.url);
    let speciesData = await speciesResponse.json();

    let evoResponse = await fetch(speciesData.evolution_chain.url);
    let evoData = await evoResponse.json();

    //console.log(evoData.chain.species);
    //console.log(evoData.chain.evolves_to[0].species);
    //console.log(evoData.chain.evolves_to[0].evolves_to[0].species);

    
    searchPokeId(evoData.chain.species.name)
    searchPokeId(evoData.chain.evolves_to[0].species.name)
    searchPokeId(evoData.chain.evolves_to[0].evolves_to[0].species.name)


    return `<div>
               <p></p>
               <p></p>
               <p></p>
            </div>` 
 }

 function searchPokeId(inputName){
   const pokeAPI = window.pokemons;
   let actualID = 0;

   for(i = 1; i < 10; i++){
      if(inputName == pokeAPI[i].name){

               //console.log("gefunden");
               actualID += i;
         
      }else { 

               //console.log("ID nicht gefunden");
            }
   }

   console.log("Die aktuelle ID ist: " + actualID);
   
   getPokeChain(actualID);
   
 }

 function getPokeChain(inputID){
   const pokeObject = window.pokemons[inputID];
   let contentRef = document.getElementById("buttonOutputID"); 

   contentRef.innerHTML += `    <div>
                  <a>${pokeObject.name}</a>
                  <img src="${pokeObject.sprites.front_default}">
               </div>`
 }