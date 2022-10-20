export const getPokemon = () => fetch('https://pokeapi.co/api/v2/pokemon')
  .then((response) => response.json())
  .then(async (json) => {
    const resPromise = await json;
    return resPromise.results;
  });

export const getLikes = () => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GZc42DTMDGJQZqgfZyNX/likes')
  .then((response) => response.json())
  .then(async (json) => {
    const resPromise = await json;
    return resPromise;
  });
