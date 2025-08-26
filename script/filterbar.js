async function filterAndRenderPokemons() {
    const inputField = document.getElementById("searchBarID");
    const search = inputField.value.toLowerCase();

    let filteredNames = allPokemonNames.filter(name => name.includes(search));
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let name of filteredNames) {
        let pokeObject = window.pokemons.find(p => p && p.name === name);
        if (!pokeObject) {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            pokeObject = await response.json();
            window.pokemons[pokeObject.id] = pokeObject;
        }
        contentRef.innerHTML += getPokeValues(
            pokeObject.id,
            pokeObject.name,
            pokeObject.types,
            pokeObject.types[0].type.name,
            pokeObject.sprites.front_default
        );
    }
}


async function checkCharLenght(){
    hideMorePokemonsButton();
    inputField = document.getElementById("searchBarID");
    if(inputField.value.length > 2){
        await fetchFilterPokemon();
        filterAndRenderPokemons();
    }else if(inputField.value.length === 1 || inputField.value.length === 2){
        return
    }else if(inputField.value.length === 0){
        render();
    }
}


async function fetchFilterPokemon(){
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0");
    let data = await response.json();
    allPokemonNames = data.results.map(p => p.name);
}