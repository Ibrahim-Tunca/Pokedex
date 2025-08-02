function renderOverlay(inputPokeID){
    const pokeObject = window.pokemons[inputPokeID];

    let contentRef = document.getElementById("overlayContent");
    contentRef.innerHTML =  getOverlayContent(inputPokeID, pokeObject.name, pokeObject.types, pokeObject.types[0].type.name, pokeObject.sprites.front_default);

    openOverlay()
}  

function openOverlay(){
    let overlayRef = document.getElementById("overlayID");
    const contentRef = document.getElementById("overlayContent");
    overlayRef.classList.toggle("d_none");
    contentRef.classList.toggle("d_none");
}


