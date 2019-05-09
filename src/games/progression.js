import startGame from '..';
import { getNumber } from '../utils';

const instruction = 'What number is missing in the progression?';

const buildProgression = (startNumber, step, numberSteps) => {
  const makeProgression = (el, acc) => {
    const newProgression = [...acc, el];
    if (newProgression.length === numberSteps) {
      return newProgression;
    }
    return makeProgression(el + step, newProgression);
  };
  return makeProgression(startNumber, []);
};

const brainProgression = () => {
  const startNumber = getNumber(1, 15);
  const step = getNumber(1, 10);
  const numberSteps = 10;
  const progression = buildProgression(startNumber, step, numberSteps);
  const hiddenElementPosition = getNumber(0, 10);
  const newProgression = progression.slice();
  newProgression[hiddenElementPosition] = '..';
  const question = `${newProgression}`;
  const answer = String(progression[hiddenElementPosition]);
  return { question, answer };
};

export default () => startGame(brainProgression, instruction);
