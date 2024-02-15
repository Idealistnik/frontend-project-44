import readlineSync from 'readline-sync';
import { getRandomNumber, getRandomNumberInterval } from '../index.js';

export const gameCondition = 'What number is missing in the progression?';

const brainProgression = () => {
  const maxNumber = 50;
  const progressionFirstNum = getRandomNumber(maxNumber);
  const maxStep = 5;
  const progressionStep = getRandomNumber(maxStep);
  const progressionMinSize = 5;
  const progressionMaxSize = 10;
  const progressionSize = getRandomNumberInterval(progressionMinSize, progressionMaxSize);

  const progression = [];
  for (let i = 0; i <= progressionSize; i += 1) {
    const progressionIncrease = i * progressionStep;
    progression.push(progressionFirstNum + progressionIncrease);
  }

  const progressionReplacement = '..';
  const progressionMissedElementIndex = getRandomNumber(progressionSize);
  const progressionMissedElement = progression[progressionMissedElementIndex];
  progression[progressionMissedElementIndex] = progressionReplacement;

  const separator = ' ';
  const exercise = progression.join(separator);

  const playersQuestion = readlineSync.question(`Question: ${exercise}
Your answer: `);
  const playersAnswer = `'${playersQuestion}'`;
  const rightAnswer = `'${progressionMissedElement}'`;
  return [playersAnswer, rightAnswer];
};
export default brainProgression;
