import readlineSync from 'readline-sync';

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  console.log('');
  const getName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getName}!`);
  const getNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const signs = ['+', '-', '*'];
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const number1 = getNumber(11, 25);
    const number2 = getNumber(1, 10);
    const currentOperation = signs[getNumber(0, signs.length - 1)];
    const question = readlineSync.question(`Question: ${number1} ${currentOperation} ${number2} ? `);
    const getRightAsnwer = (operator) => {
      if (operator === '+') {
        return number1 + number2;
      }
      if (operator === '-') {
        return number1 - number2;
      }
      return number1 * number2;
    };
    if (Number(question) === getRightAsnwer(currentOperation)) {
      count += 1;
      console.log(`Your answer: ${question}`);
      console.log('Correct!');
    } else {
      console.log(`Your answer: ${question}`);
      console.log(`${question} is wrong answer ;(. Correct answer was ${getRightAsnwer(currentOperation)}`);
      return console.log(`Let's try again, ${getName}!`);
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${getName}!`);
  }
  return console.log('');
};

export default brainCalc;
