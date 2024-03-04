import launchGame from '../index.js';
import rundomNumber from '../helper.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67];
  let prime = 'no';
  for (let i = 0; i < primeNumbers.length; i += 1) {
    if (num === primeNumbers[i]) {
      prime = 'yes';

      break;
    }
  }
  return prime;
};

const generateRound = () => {
  const rundomNumber1 = rundomNumber(1, 70);
  const question = `${rundomNumber1}`;
  const answer = isPrime(rundomNumber1);
  return [question, answer];
};

const brainPrime = launchGame(generateRound, gameDescription);

export default brainPrime;
