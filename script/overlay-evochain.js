async function getOverlayEvos(inputID){
    const pokeObject = window.pokemons[inputID]
    contentRef = document.getElementById("buttonOutputID");

   let speciesResponse = await fetch(pokeObject.species.url);
        let speciesData = await speciesResponse.json();

        let evoResponse = await fetch(speciesData.evolution_chain.url);
        let evoData = await evoResponse.json();

    contentRef.innerHTML = "";
    searchPokeId(evoData.chain.species.name)
    searchPokeId(evoData.chain.evolves_to[0].species.name)
    searchPokeId(evoData.chain.evolves_to[0].evolves_to[0].species.name)
 }

 function searchPokeId(inputName){
   const pokeAPI = window.pokemons;
   let actualID = 0;

   for(i = 1; i < 10; i++){
      if(inputName == pokeAPI[i].name){
               actualID += i;
      }
   }


   getPokeChain(actualID);
 }

 function getPokeChain(inputID){
   const pokeObject = window.pokemons[inputID];
   let contentRef = document.getElementById("buttonOutputID"); 

   contentRef.innerHTML += ` 
           
               <div class="card ${pokeObject.types[0].type.name}" style="width: 7rem;">
               <h5 class="card-title margin-null">${pokeObject.name}</h5>
               <img src="${pokeObject.sprites.front_default}" class="card-img-top" alt="poke-pic.png">
               </div>
   

`
 }