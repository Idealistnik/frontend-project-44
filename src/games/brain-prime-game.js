import readlineSync from 'readline-sync';
import { getRandomNumber, isPrime } from '../index.js';

export const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
