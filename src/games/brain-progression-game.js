import getRandomNumberInterval from '../functions.js';
import mainLogic from '../index.js';

export const makeProgression = (progressionFirstNum, progressionSize, progressionStep) => {
  const result = [];
  for (let i = 0; i < progressionSize; i += 1) {
    const progressionIncrease = i * progressionStep;
    result.push(progressionFirstNum + progressionIncrease);
  }
  return result;
};

const gameRule = 'What number is missing in the progression?';

const brainProgression = () => {
  const progressionFirstNum = getRandomNumberInterval(50);
  const progressionStep = getRandomNumberInterval(5);
  const progressionSize = getRandomNumberInterval(5, 10);
  const progression = makeProgression(progressionFirstNum, progressionSize, progressionStep);

  const progressionReplacement = '..';
  const progressionMissedElementIndex = getRandomNumberInterval(progressionSize - 1);
  const progressionMissedElement = progression[progressionMissedElementIndex];
  progression[progressionMissedElementIndex] = progressionReplacement;

  const question = progression.join(' ');
  const rightAnswer = progressionMissedElement.toString();
  return [question, rightAnswer];
};

const brainProgressionGame = () => {
  mainLogic(gameRule, brainProgression);
};

export default brainProgressionGame;
