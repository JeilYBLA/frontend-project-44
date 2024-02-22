import launchGame from '../index.js';
import rundomNumber from '../helper.js';

const gameDescription = 'the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  let newA = a;
  let newB = b;
  while (newB !== 0) {
    const temp = newB;
    newB = newA % newB;
    newA = temp;
  }
  return newA;
};

const generateRound = () => {
  const rundomNumber1 = rundomNumber(1, 20);
  const rundomNumber2 = rundomNumber(1, 20);
  const question = `${rundomNumber1} ${rundomNumber2}`;
  const answer = String(gcd(rundomNumber1, rundomNumber2));
  return [question, answer];
};

const brainGcdgame = launchGame(generateRound, gameDescription);

export default brainGcdgame;
