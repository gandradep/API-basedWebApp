import './style.css';
import './popup.css';
import getPokemonDetails from './modules/popupwindow.js';
import displayDetails from './modules/displaypopup.js';

import { buildObj } from './modules/homeObjPokemon.js';

import { display } from './modules/homeDisplay.js';

const mainContainer = document.getElementById('main');
buildObj().then((json) => display(json));
getPokemonDetails().then((json) => displayDetails(json));

mainContainer.addEventListener('click', (e) => {
  if(e.target.classList.contains('fa-heart')){
    const idClick = e.target.parentNode.parentNode.parentNode.id
    console.log(idClick);
  }

})
