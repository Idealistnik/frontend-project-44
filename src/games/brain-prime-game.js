import readlineSync from 'readline-sync';
import { getRandomNumber } from '../functions.js';

export const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const maxNumber = 100;
  const number = getRandomNumber(maxNumber);
  const playersQuestion = readlineSync.question(`Question: ${number}
Your answer: `);
  const playersAnswer = `'${playersQuestion}'`;
  const rightAnswer = isPrime(number) ? "'yes'" : "'no'";
  return [playersAnswer, rightAnswer];
};
export default brainPrime;
