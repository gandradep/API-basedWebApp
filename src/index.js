import './style.css';

import { buildObj } from './modules/getPokemon.js';

import { display } from './modules/homeDisplay.js';

buildObj().then((json) => display(json));
