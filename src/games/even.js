import startGame from '..';
import { getNumber } from '../utils';

const instruction = 'Answer "yes" if number even otherwise answer "no".';
const isEven = number => number % 2 === 0;

const brainEven = () => {
  const question = getNumber(1, 49);
  const answer = isEven(question) ? 'yes' : 'no';

  return { question, answer };
};

export default () => startGame(brainEven, instruction);
