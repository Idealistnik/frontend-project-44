import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

export const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  const maxNumber = 100;
  const number = getRandomNumber(maxNumber);
  const playersQuestion = readlineSync.question(`Question: ${number}
Your answer: `);
  const playersAnswer = `'${playersQuestion}'`;
  const rightAnswer = number % 2 === 0 ? "'yes'" : "'no'";
  return [playersAnswer, rightAnswer];
};
export default brainEven;
