import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

export const gameCondition = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  const maxNumber = 20;
  const firstNumber = getRandomNumber(maxNumber);
  const secondNumber = getRandomNumber(maxNumber);
  const lesserNumber = Math.min(firstNumber, secondNumber);
  const biggestNumber = lesserNumber === firstNumber ? secondNumber : firstNumber;
  let maxDivider;

  for (let i = lesserNumber - 1; i > 0; i -= 1) {
    if (lesserNumber === biggestNumber || biggestNumber % lesserNumber === 0) {
      maxDivider = lesserNumber;
    } else if ((lesserNumber % i === 0) && (biggestNumber % i === 0)) {
      maxDivider = i;
      break;
    }
  }
  const exercise = `${firstNumber} ${secondNumber}`;
  const playersQuestion = readlineSync.question(`Question: ${exercise}
Your answer: `);
  const playersAnswer = `'${playersQuestion}'`;
  const rightAnswer = `'${maxDivider}'`;
  return [playersAnswer, rightAnswer];
};
export default brainGcd;
