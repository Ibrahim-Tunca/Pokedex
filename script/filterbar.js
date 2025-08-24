
async function filterAndRenderPokemons(){
    fetchFilterPokemon();
    document.querySelector('input[type="text"]').addEventListener('input', async function(e) {
        if(e.target.value.length < 2){
            render();
        }
        if (e.target.value.length > 2) {
            let search = e.target.value.toLowerCase();
            let filteredNames = allPokemonNames.filter(name => name.includes(search));
            let contentRef = document.getElementById("content");
            let renderedIds = new Set();

            contentRef.innerHTML = "";
            
            for (let name of filteredNames) {
                let pokeObject = window.pokemons.find(p => p && p.name === name);
                if (!pokeObject) {
                    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                    pokeObject = await response.json();
                    window.pokemons[pokeObject.id] = pokeObject;
                }
                if (!renderedIds.has(pokeObject.id)) {
                    contentRef.innerHTML += getPokeValues(pokeObject.id, pokeObject.name, pokeObject.types, pokeObject.types[0].type.name, pokeObject.sprites.front_default);
                };
                renderedIds.add(pokeObject.id);
            }
        }
    });
}


async function fetchFilterPokemon(){
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0");
    let data = await response.json();
    allPokemonNames = data.results.map(p => p.name);
}