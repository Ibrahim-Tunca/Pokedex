function renderOverlay(inputPokeID){
    const pokeObject = window.pokemons[inputPokeID];

    let contentRef = document.getElementById("overlayContent");
    contentRef.innerHTML =  getOverlayContent(inputPokeID, pokeObject.name, pokeObject.types, pokeObject.types[0].type.name, pokeObject.sprites.front_default);
    
    toggleOverlay()
    showActualpokeCardTab(overlayButtonCase, inputPokeID)
}  


function toggleOverlay(){
    const screenDarkerRef = document.getElementById("overlayID");
    const overlayContentRef = document.getElementById("overlayContent");
    
    screenDarkerRef.classList.toggle("d_none");
    overlayContentRef.classList.toggle("d_none");
    
}


function showActualpokeCardTab(overlayButtonCase, inputPokeID){
        switch (overlayButtonCase){
            case 1:
            return getOverlayMainValues(inputPokeID);
            case 2:
            return getOverlayStats(inputPokeID);
            case 3:
            return getOverlayEvos(inputPokeID);
            default:
            return
    }
}