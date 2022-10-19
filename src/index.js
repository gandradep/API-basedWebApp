import './popup.css';
import getPokemon from './modules/popupwindow.js';
import display from './modules/displaypopup.js';

getPokemon().then((json) => display(json));
