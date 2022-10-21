import './style.css';
import './popup.css';
import getPokemonDetails from './modules/popupwindow.js';
import displayDetails from './modules/displaypopup.js';

import { buildObj } from './modules/homeObjPokemon.js';

import display from './modules/homeDisplay.js';

import postLike from './modules/postLike.js';

const mainContainer = document.getElementById('main');

const likeArr = [];
buildObj(likeArr).then((json) => display(json));
getPokemonDetails().then((json) => displayDetails(json));

mainContainer.addEventListener('click', async (e) => {
  if (e.target.classList.contains('fa-heart')) {
    const idClick = e.target.parentNode.parentNode.parentNode.id;
    e.target.classList.add('fa-solid');
    if (!likeArr.includes(idClick)) {
      likeArr.push(idClick);
      await postLike(idClick);
      buildObj(likeArr).then((json) => display(json));
    }
  }
});
