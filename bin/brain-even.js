#!/usr/bin/env node

import readlineSync from 'readline-sync';

const securityNumber = (num) => (num % 2 === 0 ? 'yes' : 'no');

const brainEven = () => {
  const compliment = 'Correct!';
  let i = 0;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (i < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const que = readlineSync.question('Your answer: ');
    if (que.length === 0 || (que !== 'yes' && que !== 'no')) {
      console.log(`'${que}' is wrong answer ;(. Correct answer was '${securityNumber(randomNumber)}'.)
      Let's try again, ${name}`);
      break;
    } else if (que === securityNumber(randomNumber)) {
      console.log(compliment);
    } else if (que !== securityNumber(randomNumber)) {
      console.log(`'${que}' is wrong answer ;(. Correct answer was '${securityNumber(randomNumber)}'.)
    Let's try again, ${name}`);
      break;
    }
    i += 1;
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

brainEven();
