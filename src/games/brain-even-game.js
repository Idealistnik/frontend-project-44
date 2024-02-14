import readlineSync from 'readline-sync';

export const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  const exercise = Math.floor(Math.random() * 100);
  const playersAnswer = readlineSync.question(`Question: ${exercise}
Your answer: `);
  const rightAnswer = exercise % 2 === 0 ? 'yes' : 'no';
  return [playersAnswer, rightAnswer];
};
export default brainEven;
