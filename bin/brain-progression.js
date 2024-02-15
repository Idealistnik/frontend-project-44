#!/usr/bin/env node
import brainProgression, { gameCondition } from '../src/games/brain-progression-game.js';
import mainLogic from '../src/index.js';

mainLogic(gameCondition, brainProgression);
