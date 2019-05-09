import startGame from '..';
import { getNumber } from '../utils';

const instruction = 'Find the greatest common divisor of given numbers.';

const getRightAsnwer = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getRightAsnwer(num2, num1 % num2);
};

const brainGcd = () => {
  const firstNumber = getNumber(1, 100);
  const secondNumber = getNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(getRightAsnwer(firstNumber, secondNumber));
  return { question, answer };
};

export default () => startGame(brainGcd, instruction);
