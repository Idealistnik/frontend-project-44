import { getRandomNumberInterval } from '../functions.js';
import mainLogic from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let divider = 2; divider < num / 2; divider += 1) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
};

const brainPrime = () => {
  const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const maxNumber = 100;
  const question = getRandomNumberInterval(maxNumber);
  const rightAnswer = isPrime(question) ? "'yes'" : "'no'";
  const conditions = [question, rightAnswer];
  return [gameRule, conditions];
};

const brainPrimeGame = () => {
  mainLogic(brainPrime);
};

export default brainPrimeGame;
