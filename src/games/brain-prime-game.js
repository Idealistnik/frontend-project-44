import { getRandomNumberInterval, isPrime} from '../functions.js';
import mainLogic from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrime = () => {
  const question = getRandomNumberInterval(100);
  const rightAnswer = isPrime(question) ? "'yes'" : "'no'";
  return [question, rightAnswer];
};

const brainPrimeGame = () => {
  mainLogic(gameRule, brainPrime);
};

export default brainPrimeGame;
