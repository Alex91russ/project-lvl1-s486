import readlineSync from 'readline-sync';

const brainProgression = () => {
  console.log('Welcome to the Brain Games!');
  const getName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getName}!`);
  console.log('What number is missing in the progression?');
  const getNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const startNumber = getNumber(1, 15);
    const step = getNumber(1, 10);
    const changeNumber = getNumber(1, 10);
    const progression = [startNumber];
    let nextNumber = startNumber + step;
    const funcProgression = (array) => {
      while (array.length < 10) {
        array.push(nextNumber);
        nextNumber += step;
      }
      return array;
    };
    const startArray = funcProgression(progression);
    const changeArray = startArray.slice();
    changeArray[changeNumber] = '..';
    console.log(`Question: ${changeArray} ? `);
    const currentAnswer = readlineSync.question('Your answer: ');
    if (Number(currentAnswer) === startArray[changeNumber]) {
      console.log('Current!');
      count += 1;
    } else {
      console.log(`${currentAnswer} is wrong answer ;(. Correct answer was ${startArray[changeNumber]}`);
      return console.log(`Let's try again, ${getName}!`);
    }
    if (count === 3) {
      console.log(`Congratulations, ${getName}!`);
    }
  }
  return console.log('');
};

export default brainProgression;
