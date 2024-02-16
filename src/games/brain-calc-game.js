import { getRandomNumberInterval } from '../functions.js';

export const gameRule = 'What is the result of the expression?';

const brainCalc = () => {
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
  return [question, rightAnswer];
};
export default brainCalc;
