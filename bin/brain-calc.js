#!/usr/bin/env node
import brainCalc, { gameRule } from '../src/games/brain-calc-game.js';
import mainLogic from '../src/index.js';

mainLogic(gameRule, brainCalc);
