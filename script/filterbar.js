async function filterAndRenderPokemons(){
    fetchFilterPokemon();
    document.querySelector('input[type="text"]').addEventListener('input', async function(e) {
            let search = e.target.value.toLowerCase();
            let filteredNames = allPokemonNames.filter(name => name.includes(search));
            let contentRef = document.getElementById("content");
            contentRef.innerHTML = "";
            for (let name of filteredNames) {
                let pokeObject = window.pokemons.find(p => p && p.name === name);
                if (!pokeObject) {
                   if (e.target.value.length === 0) {
                        render();
                        return; // Stoppe die weitere Ausführung!
                    }
                    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                    pokeObject = await response.json();
                    window.pokemons[pokeObject.id] = pokeObject;
                }
                    contentRef.innerHTML += getPokeValues(pokeObject.id, pokeObject.name, pokeObject.types, pokeObject.types[0].type.name, pokeObject.sprites.front_default);
            };
        });
}


function checkCharLenght(){
    inputField = document.getElementById("searchBarID");
    if(inputField.value.length > 1){
        filterAndRenderPokemons();
    }
}


async function fetchFilterPokemon(){
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0");
    let data = await response.json();
    allPokemonNames = data.results.map(p => p.name);
}