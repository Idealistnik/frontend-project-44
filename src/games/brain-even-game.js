import { getRandomNumberInterval } from '../functions.js';
import mainLogic from '../index.js';

const brainEven = () => {
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const maxNumber = 100;
  const question = getRandomNumberInterval(maxNumber);
  const rightAnswer = question % 2 === 0 ? "'yes'" : "'no'";
  const conditions = [question, rightAnswer];
  return [gameRule, conditions];
};

const brainEvenGame = () => {
  mainLogic(brainEven);
};

export default brainEvenGame;
