import startGame from '..';
import { getNumber } from '../utils';

const instruction = 'What is the result of the expression?';
const signs = ['+', '-', '*'];

const brainCalc = () => {
  const firstNum = getNumber(11, 25);
  const secondNum = getNumber(1, 10);
  const currentOperation = signs[getNumber(0, signs.length - 1)];
  const question = `${firstNum} ${currentOperation} ${secondNum}`;
  switch (currentOperation) {
    case '+':
      return { question, answer: String(firstNum + secondNum) };
    case '-':
      return { question, answer: String(firstNum - secondNum) };
    case '*':
      return { question, answer: String(firstNum * secondNum) };
    default:
      return null;
  }
};

export default () => startGame(brainCalc, instruction);
