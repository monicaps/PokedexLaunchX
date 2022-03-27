const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log("Respuesta del servidor: "+res);
            pokeImage("resources/oldgame.svg")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log("Respuesta del server:\n");
            console.log(data);
            let nombre = data.name;
            let pokeImg = data.sprites.front_default;
            let peso = data.weight;
            let altura = data.height;
            let tipoPokemon = JSON.stringify(data.types[0].type.name);
            let estadisticas = JSON.stringify(data.stats);
            let movimientos = JSON.stringify(data.moves);
            pokeImage(pokeImg);
            pokeInfo(nombre,peso,altura,tipoPokemon,estadisticas,movimientos);
            console.log("Nombre del pokemon: "+nombre);
            console.log("Altura del pokemon: "+altura);
            console.log("Peso del pokemon: "+peso);
            console.log("Imagen del pokemon: "+pokeImg);
            console.log("Tipo de pokemon:");
            console.log(tipoPokemon);
            console.log("Estadísticas del pokemon: ");
            console.log(estadisticas);
            console.log("Movimientos del pokemon: ");
            console.log(movimientos);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeInfo = (name,weight,height,poke,stadistics,moves) =>{
}