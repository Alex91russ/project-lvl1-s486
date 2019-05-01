import readlineSync from 'readline-sync';

const getName = () => {
  const actualName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actualName}!`);
  return actualName;
};

export default getName;
