import getRandomNumberInterval from '../functions.js';
import mainLogic from '../index.js';

const isEven = (number) => number % 2 === 0;

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  const question = getRandomNumberInterval(100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const brainEvenGame = () => {
  mainLogic(gameRule, brainEven);
};

export default brainEvenGame;
