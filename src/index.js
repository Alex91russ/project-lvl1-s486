import readlineSync from 'readline-sync';
import { getName } from './utils';

const startGame = (nameGame, instuction) => {
  console.log('Welcome to the Brain Games!');
  console.log(instuction);
  const nameUser = getName();
  console.log(`Hello, ${nameUser}`);
  for (let round = 1; round <= 3; round += 1) {
    const task = nameGame();
    console.log(`Question: ${task.question} ?`);
    const currentAnswer = readlineSync.question('Your answer: ');
    if (currentAnswer === task.answer) {
      console.log('Currect!');
    } else {
      console.log(`${currentAnswer} is wrong answer ;(. Correct answer was '${task.answer}'`);
      console.log(`Let's try again, ${nameUser}`);
      return;
    }
  }
  console.log(`Congratulations, ${nameUser}!`);
};

export default startGame;
