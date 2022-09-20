const rule = 'Find the greatest common divisor of given numbers.';

const playNod = () => {
  const getRandomNumber = (max) => Math.round(Math.random() * max);
  const firstNumber = getRandomNumber(10);
  const secondNumber = getRandomNumber(10);

  const nod = (x, y) => {
    if (y > x) return nod(y, x);
    if (!y) return x;
    return nod(y, x % y);
  };

  const inputData = `${firstNumber} ${secondNumber}`;

  const correctAnswer = nod(firstNumber, secondNumber);

  return [inputData, correctAnswer];
};
export { playNod, rule };
