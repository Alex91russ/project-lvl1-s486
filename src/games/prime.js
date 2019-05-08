import startGame from '..';
import { getNumber } from '../functions';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no". \n';

const brainPrime = () => {
  const number = getNumber(1, 50);
  const check = (num) => {
    if (num < 2) return false;
    const stop = num / 2;
    const iter = (counter) => {
      if (counter > stop) return true;
      if (num % counter === 0) return false;
      return iter(counter + 1);
    };
    return iter(2);
  };

  return {
    question: `${number}`,
    answer: check(number) ? 'yes' : 'no',
  };
};

export default () => startGame(brainPrime, instruction);
