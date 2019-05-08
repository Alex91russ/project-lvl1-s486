import startGame from '..';
import { getNumber } from '../functions';

const instruction = 'Find the greatest common divisor of given numbers. \n';

const brainGcd = () => {
  const number1 = getNumber(1, 100);
  const number2 = getNumber(1, 100);

  const getRightAsnwer = (num1, num2) => {
    if (num2 === 0) {
      return num1;
    }
    return getRightAsnwer(num2, num1 % num2);
  };
  return {
    question: `${number1} ${number2}`,
    answer: String(getRightAsnwer(number1, number2)),
  };
};

export default () => startGame(brainGcd, instruction);
