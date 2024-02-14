import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

export const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  const maxNumber = 100;
  const exercise = getRandomNumber(maxNumber);
  const playersAnswer1 = readlineSync.question(`Question: ${exercise}
Your answer: `);
  const playersAnswer = `'${playersAnswer1}'`;
  const rightAnswer = exercise % 2 === 0 ? "'yes'" : "'no'";
  return [playersAnswer, rightAnswer];
};
export default brainEven;
