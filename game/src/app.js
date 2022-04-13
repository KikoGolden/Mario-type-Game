import {badConnectedFuncs} from './allFuncsTashlyConnected.js';
import {skinPicker} from './skinChange.js';
import {scoreChecker} from './scoreChangePlayer.js';

badConnectedFuncs();
skinPicker();
let scoreSkins = setInterval(scoreChecker,20);

