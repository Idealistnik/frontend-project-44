import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  if (userName) {
    console.log(`Hello, ${userName}!`);
  }
  return userName;
};
export default getUserName;
