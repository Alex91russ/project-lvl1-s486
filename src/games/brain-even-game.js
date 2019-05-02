import readlineSync from 'readline-sync';

const hasEven = () => {
  const getName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getName}!`);
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const getNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const number = getNumber(1, 49);
    console.log(`Question: ${number}`);
    const correntAnswer = readlineSync.question('Your answer: ');
    if ((number % 2 === 0 && correntAnswer === 'yes') || (number % 2 === 1 && correntAnswer === 'no')) {
      console.log('Corrent!');
      count += 1;
    } else return console.log(`"yes" is wrong answer ;(. Correct answer was "no". Let's try again, ${getName}`);
  }
  if (count === 3) {
    console.log(`Congratulations, ${getName}!`);
  }
  return console.log('');
};

export default hasEven;
