#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { HelloUser } from './src/cli.js';

const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const brainPrime = () => {
    const name = HelloUser();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    for (let i = 0; i < 3; i++) { // Три вопроса
        const number = Math.floor(Math.random() * 100) + 1; // Случайное число от 1 до 100
        const correctAnswer = isPrime(number) ? 'yes' : 'no';
        console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer: ');
        if (answer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
};
brainPrime();
