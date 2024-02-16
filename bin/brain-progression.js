#!/usr/bin/env node
import brainProgression, { gameRule } from '../src/games/brain-progression-game.js';
import mainLogic from '../src/index.js';

mainLogic(gameRule, brainProgression);
