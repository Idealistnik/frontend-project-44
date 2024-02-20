import getRandomNumberInterval from '../functions.js';
import mainLogic from '../index.js';

const getNod = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return getNod(secondNumber, firstNumber % secondNumber);
};

const gameRule = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  const firstNumber = getRandomNumberInterval(20);
  const secondNumber = getRandomNumberInterval(20);
  const maxDivider = getNod(firstNumber, secondNumber);

  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = maxDivider.toString();
  return [question, rightAnswer];
};

const brainGcdGame = () => {
  mainLogic(gameRule, brainGcd);
};

export default brainGcdGame;
