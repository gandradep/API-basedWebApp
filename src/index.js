import './style.css';
import { getPokemon } from './modules/popupwindow.js';
import { display } from './modules/displaypopup.js';


getPokemon().then((json) =>console.log(json.height));
getPokemon().then((json) =>console.log(json.weight));
getPokemon().then((json) =>console.log(json.types));
getPokemon().then((json) =>display(json.abilities));
//getPokemon().then((json) =>display(json.height));
