import { getRandomNumberInterval } from '../functions.js';

export const gameRule = 'What number is missing in the progression?';

const brainProgression = () => {
  const maxNumber = 50;
  const progressionFirstNum = getRandomNumberInterval(maxNumber);
  const maxStep = 5;
  const progressionStep = getRandomNumberInterval(maxStep);
  const progressionMinSize = 5;
  const progressionMaxSize = 10;
  const progressionSize = getRandomNumberInterval(progressionMinSize, progressionMaxSize);

  const progression = [];
  for (let i = 0; i <= progressionSize; i += 1) {
    const progressionIncrease = i * progressionStep;
    progression.push(progressionFirstNum + progressionIncrease);
  }

  const progressionReplacement = '..';
  const progressionMissedElementIndex = getRandomNumberInterval(progressionSize);
  const progressionMissedElement = progression[progressionMissedElementIndex];
  progression[progressionMissedElementIndex] = progressionReplacement;

  const separator = ' ';
  const question = progression.join(separator);
  const rightAnswer = `'${progressionMissedElement}'`;
  return [question, rightAnswer];
};
export default brainProgression;
