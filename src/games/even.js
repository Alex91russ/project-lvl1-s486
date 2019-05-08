import startGame from '..';
import { getNumber } from '../functions';

const instruction = 'Answer "yes" if number even otherwise answer "no". \n';

const brainEven = () => {
  const number = getNumber(1, 49);
  return {
    question: `${number}`,
    answer: number % 2 === 0 ? 'yes' : 'no',
  };
};

export default () => startGame(brainEven, instruction);
