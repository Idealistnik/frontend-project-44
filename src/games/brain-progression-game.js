import { getRandomNumberInterval, makeProgression } from '../functions.js';
import mainLogic from '../index.js';

const gameRule = 'What number is missing in the progression?';

const brainProgression = () => {
  const progressionFirstNum = getRandomNumberInterval(50);
  const progressionStep = getRandomNumberInterval(5);
  const progressionSize = getRandomNumberInterval(5, 10);
  const progression = makeProgression(progressionFirstNum, progressionSize, progressionStep);

  const progressionReplacement = '..';
  const progressionMissedElementIndex = getRandomNumberInterval(progressionSize);
  const progressionMissedElement = progression[progressionMissedElementIndex];
  progression[progressionMissedElementIndex] = progressionReplacement;

  const separator = ' ';
  const question = progression.join(separator);
  const rightAnswer = `'${progressionMissedElement}'`;
  return [question, rightAnswer];
};

const brainProgressionGame = () => {
  mainLogic(gameRule, brainProgression);
};

export default brainProgressionGame;
