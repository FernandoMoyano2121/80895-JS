async function obtenerListaPokemons() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=6");
  const data = await response.json();

  return data.results;
}

async function mostrarCardsPokemon() {
  try {
    const pokemonList = await obtenerListaPokemons();
    pokemonList.forEach((pokemon) => {
      crearTarjetaPokemon(pokemon);
    });
  } catch (error) {}
}

function crearTarjetaPokemon(pokemon) {
  const div = document.getElementById("output");
  const tarjeta = document.createElement("div");

  tarjeta.innerHTML = `
    <h4>${pokemon.name}</h4>
    <a target= "blank" href="${pokemon.url}">Ver Detalles</a>
  `;
  div.appendChild(tarjeta);
}

mostrarCardsPokemon();
