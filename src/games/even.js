import launchGame from '../index.js';
import randomNumber from '../helper.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const number = randomNumber(1, 100);
  const question = `${number}`;
  const answer = isEven(number);
  return [question, answer];
};

const brainEven = launchGame(generateRound, gameDescription);

export default brainEven;
