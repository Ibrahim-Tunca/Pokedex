function getOverlayEvos(inputID){
    const pokeObject = window.pokemons[inputID];
    const evoData = pokeObject.evoData;

    contentRef = document.getElementById("buttonOutputID");

    let chain = evoData.chain;

    contentRef.innerHTML = "";

    switch(chain.evolves_to.length){
        case 1:
          searchPokeId(chain.species.name)
          break;
        case 2:
          searchPokeId(chain.species.name)
          searchPokeId(chain.evolves_to[0].species.name)
          break;
        case 3:
          searchPokeId(chain.species.name)
          searchPokeId(chain.evolves_to[0].species.name)
          searchPokeId(chain.evolves_to[0].evolves_to[0].species.name)
          break;
        default:
          return
    }


    overlayButtonCase = 3;
 }

 function searchPokeId(inputName){
   const pokeAPI = window.pokemons;
   let actualID = null;

   for(i = 1; i < actualCountOffHowManyPokemonsAreBeenShownOnThePage; i++){

      if(pokeAPI[i] && inputName == pokeAPI[i].name){
               actualID = i;
               break;
      }

   }

 if (actualID !== null) {
        getPokeChain(actualID);
    }


 }

 function getPokeChain(inputID){
   const pokeObject = window.pokemons[inputID];
   if (!pokeObject) {
        // Optional: Fehlermeldung anzeigen oder einfach nichts tun
        console.warn("Pokémon mit ID", inputID, "nicht gefunden!");
        return;
    }
   let contentRef = document.getElementById("buttonOutputID"); 
   contentRef.classList.add("evoChain-card-order");

   contentRef.innerHTML += ` 
           
              <div>
                  <div class="card ${pokeObject.types[0].type.name}" style="width: 7rem;">
                  <h5 class="card-title margin-null">${pokeObject.name}</h5>
                  <img src="${pokeObject.sprites.front_default}" class="card-img-top" alt="poke-pic.png">
                  </div>
              </div>
   

`
 }