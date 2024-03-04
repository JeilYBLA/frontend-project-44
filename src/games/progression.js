import rundomNumber from '../helper.js';
import launchGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

function getProgression(start, step, length) {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
}

const generateRound = () => {
  const firstNumber = rundomNumber(0, 50);
  const step = rundomNumber(2, 8);
  const length = rundomNumber(6, 15);
  const progression = getProgression(firstNumber, step, length);
  const index = rundomNumber(0, progression.length - 1);
  const answer = String(progression[index]);
  progression[index] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const startProgressionGame = launchGame(generateRound, gameDescription);

export default startProgressionGame;
