#!/usr/bin/env node
//* eslint-disable no-const-assign */
//* eslint-disable no-undef */

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const roundsCount = 3;

function isEven(number) {
    return number % 2 === 0;
}

for (let round = 1; round <= roundsCount; round += 1) {
    const questionNumber = Math.floor(Math.random() * 100) + 1; // число от 1 до 100
    console.log(`Question: ${questionNumber}`);

    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';

    if (userAnswer !== 'yes' && userAnswer !== 'no') {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        process.exit(1);
    }

    if (userAnswer === correctAnswer) {
        console.log('Correct!');
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        process.exit(1);
    }
}

console.log(`Congratulations, ${userName}!`);
