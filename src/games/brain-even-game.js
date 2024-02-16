import { getRandomNumberInterval } from '../functions.js';

export const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  const maxNumber = 100;
  const question = getRandomNumberInterval(maxNumber);
  const rightAnswer = question % 2 === 0 ? "'yes'" : "'no'";
  return [question, rightAnswer];
};
export default brainEven;
