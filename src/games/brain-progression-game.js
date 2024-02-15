import readlineSync from 'readline-sync';
import { getRandomNumber, getRandomNumberInterval } from '../index.js';

export const gameCondition = 'What number is missing in the progression?';

const brainProgression = () => {
  const progressionFirstNum = getRandomNumber(50);
  const progressionStep = getRandomNumber(5);
  const progressionSize = getRandomNumberInterval(5, 10);
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
