#!/usr/bin/env node
import brainPrime, { gameCondition } from '../src/games/brain-prime-game.js';
import mainLogic from '../src/index.js';

mainLogic(gameCondition, brainPrime);
