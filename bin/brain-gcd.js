#!/usr/bin/env node
import brainGcd, { gameCondition } from '../src/games/brain-gcd-game.js';
import mainLogic from '../src/index.js';

mainLogic(gameCondition, brainGcd);
