#!/usr/bin/env node
import brainPrime, { gameRule } from '../src/games/brain-prime-game.js';
import mainLogic from '../src/index.js';

mainLogic(gameRule, brainPrime);
