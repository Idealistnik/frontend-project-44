#!/usr/bin/env node
import brainEven, { gameCondition } from '../src/games/brain-even-game.js';
import mainLogic from '../src/index.js';

mainLogic(gameCondition, brainEven);
