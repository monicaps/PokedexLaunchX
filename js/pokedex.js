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
            let pokeImg1 = data.sprites.back_default;
            let peso = data.weight;
            let altura = data.height;
            let tipoPokemon = JSON.stringify(data.types[0].type.name);
            //let estadisticas = JSON.stringify(data.stats);
            let estadisticas = data.stats;
            pokeImage(pokeImg, pokeImg1);
            pokeInfo(nombre,peso,altura,tipoPokemon,estadisticas);
            console.log("Nombre del pokemon: "+nombre);
            console.log("Altura del pokemon: "+altura);
            console.log("Peso del pokemon: "+peso);
            console.log("Imagen del pokemon: "+pokeImg);
            console.log("Tipo de pokemon:");
            console.log(tipoPokemon);
            console.log("Estadísticas del pokemon: ");
            console.log(estadisticas);
            for(var i=0; i<estadisticas.length; i++){
                console.log("Estadistica "+ i + ": "+estadisticas[i].base_stat);
            }
        }
    });
}

const pokeImage = (url, url2) => {
    const pokePhoto = document.getElementById("pokeImg");
    const pokePhoto2 = document.getElementById("pokeImg1");
    pokePhoto.src = url;
    pokePhoto2.src = url2;
}

const pokeInfo = (name,weight,height,poke,stadistics) =>{
    const nombrePokemon = document.getElementById("name");
    const tipoPokemon = document.getElementById("tipoPoke");
    const pesoPokemon = document.getElementById("peso");
    const alturaPokemon = document.getElementById("altura");
    nombrePokemon.value=name;
    tipoPokemon.value=poke;
    pesoPokemon.value=weight;
    alturaPokemon.value=height;
    const ps=document.getElementById("ps");
    const attack=document.getElementById("attack");
    const defense=document.getElementById("defense");
    const spAttack=document.getElementById("sp-attack");
    const spDefense=document.getElementById("sp-defense");
    const speed=document.getElementById("speed");
    ps.value=stadistics[0].base_stat;
    attack.value=stadistics[1].base_stat;
    defense.value=stadistics[2].base_stat;
    spAttack.value= stadistics[3].base_stat;
    spDefense.value=stadistics[4].base_stat;
    speed.value=stadistics[5].base_stat;
}