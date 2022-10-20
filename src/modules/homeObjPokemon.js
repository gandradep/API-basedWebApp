/* eslint-disable import/prefer-default-export */
import { getPokemon, getLikes } from './homeFetching.js';

export const buildObj = async (likeArr) => {
  const imgUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';
  let indexImg;
  const resultPokemon = await getPokemon();
  const resultLikes = await getLikes();

  const newObjArr = [];
  let count = 1;

  resultPokemon.forEach((item) => {
    indexImg = count.toString().padStart(3, '0');
    const responseObj = {
      id: count,
      imgSrc: `${imgUrl}${indexImg}.png`,
      likes: 0,
      clicked: false,
      ...item,
    };
    let countStr = count.toString();
    if(likeArr.includes(countStr)){
      responseObj.clicked = true;
    }
    const value = resultLikes.find((obj) => Number(obj.item_id) === responseObj.id);
    if (value) {
      responseObj.likes = value.likes;
    }
    newObjArr.push(responseObj);
    count += 1;
  });  
  return newObjArr;
};
