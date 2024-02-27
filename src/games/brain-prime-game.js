import getRandomNumberInterval from '../functions.js';
import mainLogic from '../index.js';

export const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let divider = 2; divider <= num / 2; divider += 1) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
};

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrime = () => {
  const question = getRandomNumberInterval(100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const brainPrimeGame = () => {
  mainLogic(gameRule, brainPrime);
};

export default brainPrimeGame;
