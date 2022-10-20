import './style.css';
import './popup.css';
import getPokemonDetails from './modules/popupwindow.js';
import displayDetails from './modules/displaypopup.js';

import { buildObj } from './modules/getPokemon.js';

import { display } from './modules/homeDisplay.js';

buildObj().then((json) => display(json));
getPokemonDetails().then((json) => displayDetails(json));

// displayComments();
