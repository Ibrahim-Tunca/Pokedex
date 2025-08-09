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


 