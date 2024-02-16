import { getRandomNumberInterval } from '../functions.js';

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

export const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrime = () => {
  const maxNumber = 100;
  const question = getRandomNumberInterval(maxNumber);
  const rightAnswer = isPrime(question) ? "'yes'" : "'no'";
  return [question, rightAnswer];
};
export default brainPrime;
