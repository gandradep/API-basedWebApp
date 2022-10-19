import './popup.css';
import getPokemonDetails from './modules/popupwindow.js';
import displayDetails from './modules/displaypopup.js';

getPokemonDetails().then((json) => displayDetails(json));
