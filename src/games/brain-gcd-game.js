import readlineSync from 'readline-sync';

const brainGcd = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.');
  const getName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getName}!`);
  const getNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const calcGcd = (num1, num2) => {
    if (num2 === 0) {
      return num1;
    }
    return calcGcd(num2, num1 % num2);
  };
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const number1 = getNumber(1, 100);
    const number2 = getNumber(1, 100);
    console.log(`Question: ${number1} ${number2} ? `);
    const currentAnswer = readlineSync.question('Your answer: ');
    if (Number(currentAnswer) === calcGcd(number1, number2)) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`${currentAnswer} is wrong answer ;(. Correct answer was ${calcGcd(number1, number2)}`);
      return console.log(`Let's try again, ${getName}!`);
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${getName}!`);
  }
  return console.log('');
};

export default brainGcd;
