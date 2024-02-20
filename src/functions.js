const getRandomNumberInterval = (maxValue, minValue = 0) => {
  const randomNumber = Math.ceil(Math.random() * (maxValue - minValue) + minValue);
  return randomNumber;
};
export default getRandomNumberInterval;
