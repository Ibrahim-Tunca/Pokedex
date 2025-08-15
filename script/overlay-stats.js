function getOverlayStats(inputID){
    const pokeObject = window.pokemons[inputID];

    pokeHP = pokeObject.stats[0].base_stat;
    pokeAttack = pokeObject.stats[1].base_stat;
    pokeDefense = pokeObject.stats[2].base_stat;
    pokeSpecialAttack = pokeObject.stats[3].base_stat;
    pokeSpecialDefense = pokeObject.stats[4].base_stat;
    pokeSpeed = pokeObject.stats[5].base_stat;

    let contentRef = document.getElementById("buttonOutputID");
    contentRef.classList.remove("evoChain-card-order");

    contentRef.innerHTML = getStats(pokeHP, pokeAttack, pokeDefense, pokeSpecialAttack, pokeSpecialDefense, pokeSpeed);
    overlayButtonCase = 2;
}
