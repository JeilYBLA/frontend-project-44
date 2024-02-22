#!/usr/bin/env node

import readlineSync from 'readline-sync';

const launchGame = (generateRound, description) => () => {
  let i = 0;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  while (i < 3) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}'is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    i += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default launchGame;
