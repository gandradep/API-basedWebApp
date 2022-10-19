export const getPokemon = () => fetch('https://pokeapi.co/api/v2/pokemon/6')
.then( async(response) => await response.json());
//.then( (json) => console.log(json));
//getPokemon().then((json) =>console.log(json.abilities));
