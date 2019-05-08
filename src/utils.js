import readlineSync from 'readline-sync';

export const getName = () => {
  const actualName = readlineSync.question('May I have your name? ');
  return actualName;
};

export const getNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
