import { getRandomNumberInterval } from '../functions.js';

export const gameRule = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  const maxNumber = 20;
  const firstNumber = getRandomNumberInterval(maxNumber);
  const secondNumber = getRandomNumberInterval(maxNumber);
  const lesserNumber = firstNumber < secondNumber ? firstNumber : secondNumber;
  const biggestNumber = lesserNumber === firstNumber ? secondNumber : firstNumber;
  let maxDivider;

  for (let i = lesserNumber; i > 0; i -= 1) {
    if ((lesserNumber % i === 0) && (biggestNumber % i === 0)) {
      maxDivider = i;
      break;
    }
  }
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = `'${maxDivider}'`;
  return [question, rightAnswer];
};
export default brainGcd;
