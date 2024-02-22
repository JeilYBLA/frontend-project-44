import launchGame from '../index.js';
import rundomNumber from '../helper.js';

const calculate = (a, b, operation) => {
  switch (operation) {
    case '*':
      return a * b;
    case '+':
      return a + b;
    default:
      return a - b;
  }
};

const gameDescription = 'What is the result of the expression?';
const generateRound = () => {
  const rundomNumber1 = rundomNumber(1, 20);
  const rundomNumber2 = rundomNumber(1, 20);
  const operation = ['*', '-', '+'];
  const operator = operation[rundomNumber(0, operation.length - 1)];
  const question = `${rundomNumber1} ${operator} ${rundomNumber2}`;
  const answer = String(calculate(rundomNumber1, rundomNumber2, operator));
  return [question, answer];
};

const startCalcgame = launchGame(generateRound, gameDescription);

export default startCalcgame;
