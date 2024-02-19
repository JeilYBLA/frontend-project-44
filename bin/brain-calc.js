#!/usr/bin/env node

import readlineSync from 'readline-sync';

// eslint-disable-next-line consistent-return
const randomOperation = () => {
  const operation = Math.floor(Math.random() * 3) + 1;
  if (operation === 1) {
    return '*';
  } if (operation === 2) {
    return '-';
  } if (operation === 3) {
    return '+';
  }
};

const brainEven = () => {
  const compliment = 'Correct!';
  let i = 0;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  while (i < 3) {
    const randomNumber1 = Math.floor(Math.random() * 100) + 1;
    const randomNumber2 = Math.floor(Math.random() * 100) + 1;
    const randomSymbol = randomOperation();
    console.log(`Question: ${randomNumber1} ${randomSymbol} ${randomNumber2}`);
    // eslint-disable-next-line consistent-return
    const result = () => {
      if (randomSymbol === '*') {
        return randomNumber1 * randomNumber2;
      } if (randomSymbol === '-') {
        return randomNumber1 - randomNumber2;
      } if (randomSymbol === '+') {
        return randomNumber1 + randomNumber2;
      }
    };
    const que = readlineSync.question('Your answer: ');
    if (Number(que) !== result()) {
      console.log(`'${que}' is wrong answer ;(. Correct answer was '${result()}'.)
        Let's try again, ${name}`);
      break;
    } else if (Number(que) === result()) {
      console.log(compliment);
    }
    i += 1;
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

console.log(brainEven());
