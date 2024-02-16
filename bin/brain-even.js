#!/usr/bin/env node
import brainEven, { gameRule } from '../src/games/brain-even-game.js';
import mainLogic from '../src/index.js';

mainLogic(gameRule, brainEven);
