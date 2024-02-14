#!/usr/bin/env node
import brainCalc, { gameCondition } from '../src/games/brain-calc-game.js';
import mainLogic from '../src/index.js';

mainLogic(gameCondition, brainCalc);
