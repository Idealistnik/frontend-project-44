import { getRandomNumberInterval, getNod } from '../functions.js';
import mainLogic from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  const firstNumber = getRandomNumberInterval(20);
  const secondNumber = getRandomNumberInterval(20);
  const maxDivider = getNod(firstNumber, secondNumber);

  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = `'${maxDivider}'`;
  return [question, rightAnswer];
};

const brainGcdGame = () => {
  mainLogic(gameRule, brainGcd);
};

export default brainGcdGame;
