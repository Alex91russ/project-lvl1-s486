import startGame from '..';
import { getNumber } from '../functions';

const instruction = 'What is the result of the expression? \n';

const brainCalc = () => {
  const number1 = getNumber(11, 25);
  const number2 = getNumber(1, 10);
  const signs = ['+', '-', '*'];
  const currentOperation = signs[getNumber(0, signs.length - 1)];
  const getRightAsnwer = (operator) => {
    if (operator === '+') {
      return number1 + number2;
    }
    if (operator === '-') {
      return number1 - number2;
    }
    return number1 * number2;
  };
  return {
    question: `${number1} ${currentOperation} ${number2}`,
    answer: String(getRightAsnwer(currentOperation)),
  };
};

export default () => startGame(brainCalc, instruction);
