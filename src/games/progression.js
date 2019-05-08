import startGame from '..';
import { getNumber } from '../functions';

const instruction = 'What number is missing in the progression? \n';

const brainProgression = () => {
  const startNumber = getNumber(1, 15);
  const step = getNumber(1, 10);
  const changeNumber = getNumber(1, 10);
  const progression = [startNumber];
  let nextNumber = startNumber + step;
  const funcProgression = (array) => {
    while (array.length < 10) {
      array.push(nextNumber);
      nextNumber += step;
    }
    return array;
  };
  const startArray = funcProgression(progression);
  const changeArray = startArray.slice();
  changeArray[changeNumber] = '..';

  return {
    question: `${changeArray}`,
    answer: String(startArray[changeNumber]),
  };
};

export default () => startGame(brainProgression, instruction);
