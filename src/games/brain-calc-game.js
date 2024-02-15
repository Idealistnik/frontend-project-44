import readlineSync from 'readline-sync';
import { getRandomNumber, getRandomItem } from '../functions.js';

export const gameCondition = 'What is the result of the expression?';

const brainCalc = () => {
  const maxNumber = 10;
  const firstOperand = getRandomNumber(maxNumber);
  const secondOperand = getRandomNumber(maxNumber);
  const operators = ['+', '-', '*'];
  const randomOperator = getRandomItem(operators);

  let expression;
  switch (randomOperator) {
    case '+':
      expression = firstOperand + secondOperand;
      break;
    case '-':
      expression = firstOperand - secondOperand;
      break;
    case '*':
      expression = firstOperand * secondOperand;
      break;
    default:
      break;
  }

  const exercise = `${firstOperand} ${randomOperator} ${secondOperand}`;
  const playersQuestion = readlineSync.question(`Question: ${exercise}
Your answer: `);
  const playersAnswer = `'${playersQuestion}'`;
  const rightAnswer = `'${expression}'`;
  return [playersAnswer, rightAnswer];
};
export default brainCalc;
