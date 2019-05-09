import readlineSync from 'readline-sync';
import { getName } from './utils';

const numbersOfRounds = 3;

const startGame = (nameGame, instuction) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${instuction}\n`);
  const userName = getName();
  console.log(`Hello, ${userName}`);
  for (let i = 1; i <= numbersOfRounds; i += 1) {
    const { question, answer } = nameGame();
    console.log(`Question: ${question} ?`);
    const currentAnswer = readlineSync.question('Your answer: ');
    if (currentAnswer === answer) {
      console.log('Currect!');
    } else {
      console.log(`${currentAnswer} is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
