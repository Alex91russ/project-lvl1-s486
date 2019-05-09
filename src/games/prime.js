import startGame from '..';
import { getNumber } from '../utils';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  const stop = num / 2;
  const iter = (counter) => {
    if (counter > stop) return true;
    if (num % counter === 0) return false;
    return iter(counter + 1);
  };
  return iter(2);
};

const brainPrime = () => {
  const number = getNumber(1, 50);
  const question = `${number}`;
  const answer = isPrime(number) ? 'yes' : 'no';
  return { question, answer };
};

export default () => startGame(brainPrime, instruction);
