
const getPokemon = () => fetch('https://pokeapi.co/api/v2/pokemon')
.then((response) => response.json())
.then( async (json) => {
  const resPromise = await json;
  return resPromise.results;
});

export const buildObj = async () => {
  const imgUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';
  let indexImg;
  const result = await getPokemon();
  let newObjArr = [];
  let count = 1;

  result.forEach((item) => {
    indexImg = count.toString().padStart(3, '0');
    const responseObj = {
      id: count,
      imgSrc: `${imgUrl}${indexImg}.png`,
      ...item,
    };
    newObjArr.push(responseObj);

    count ++;
  });
  console.log(newObjArr);
  return newObjArr;
}
