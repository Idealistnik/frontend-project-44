import { getRandomNumberInterval } from '../functions.js';
import mainLogic from '../index.js';

const brainCalc = () => {
  const gameRule = 'What is the result of the expression?';
  const maxNumber = 10;
  const firstOperand = getRandomNumberInterval(maxNumber);
  const secondOperand = getRandomNumberInterval(maxNumber);
  const operators = ['+', '-', '*'];
  const randomOperatorIndex = getRandomNumberInterval(operators.length - 1);
  const randomOperator = operators[randomOperatorIndex];

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

  const question = `${firstOperand} ${randomOperator} ${secondOperand}`;
  const rightAnswer = `'${expression}'`;
  const conditions = [question, rightAnswer];
  return [gameRule, conditions];
};

const brainCalcGame = () => {
  mainLogic(brainCalc);
};

export default brainCalcGame;
