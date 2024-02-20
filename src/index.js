import readlineSync from 'readline-sync';

const mainLogic = (gameRule, game) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameRule);

  let roundCount = 0;
  const maxRoundCount = 3;
  for (; roundCount < maxRoundCount;) {
    const [question, rightAnswer] = game();
    console.log(`Question: ${question}`);
    const playersAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === playersAnswer) {
      console.log('Correct!');
      roundCount += 1;
    } else {
      console.log(`'${playersAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
export default mainLogic;
