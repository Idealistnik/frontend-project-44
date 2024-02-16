#!/usr/bin/env node
import brainGcd, { gameRule } from '../src/games/brain-gcd-game.js';
import mainLogic from '../src/index.js';

mainLogic(gameRule, brainGcd);
