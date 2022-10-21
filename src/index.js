import './style.css';
import './popup.css';
import getPokemonDetails from './modules/popupwindow.js';
import displayDetails from './modules/displaypopup.js';
import addComment from './modules/addComments.js';
import { buildObj } from './modules/homeObjPokemon.js';

import { display } from './modules/homeDisplay.js';
const popContainer = document.querySelector('.popup-window')
buildObj().then((json) => display(json));
getPokemonDetails().then(async (json) => await displayDetails(json));




popContainer.addEventListener('click', async (e) => {

  if (e.target.classList.contains('submit')) {
    e.preventDefault();
    const form = e.target.closest('form');
    const user = form.elements.username.value;
    const message = form.elements.comment.value;
    await addComment(user, message);
    form.reset();
    getPokemonDetails().then((json) => displayDetails(json));

    console.log(message);
  }





});
