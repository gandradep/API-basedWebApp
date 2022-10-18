import './style.css';
import logo from './pokeball.png';

import { getPokemon } from './modules/getPokemon.js';

import { display } from './modules/homeDisplay.js';



getPokemon().then((json) =>display(json.results));
