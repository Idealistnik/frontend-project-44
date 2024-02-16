import readlineSync from 'readline-sync';

const mainLogic = (gameRule, game) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameRule);

  let roundCount = 0;
  for (; roundCount < 3;) {
    const gameConditions = game();
    const [question, rightAnswer] = gameConditions;
    const playersQuestion = readlineSync.question(`Question: ${question}
Your answer: `);
    const playersAnswer = `'${playersQuestion}'`;
    if (rightAnswer === playersAnswer) {
      console.log('Correct!');
      roundCount += 1;
    } else {
      console.log(`${playersAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}`);
      console.log(`Let's try again, ${playerName}!`);
      return roundCount === 3;
    }
  }
  const winMessage = console.log(`Congratulations, ${playerName}!`);
  return winMessage;
};
export default mainLogic;
