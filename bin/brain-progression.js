#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { HelloUser } from '../src/cli.js';
const getProgression = (start, step, length) => {
    return Array.from({ length }, (_, index) => start + index * step);
};

const getHiddenIndex = length => Math.floor(Math.random() * length);

const brainProgression = () => {
    const name = HelloUser();
    console.log('What number is missing in the progression?');

    for (let i = 0; i < 3; i++) {
        const length = Math.floor(Math.random() * 6) + 5; // 5-10
        const start = Math.floor(Math.random() * 100);
        const step = Math.floor(Math.random() * 10) + 1;
        const progression = getProgression(start, step, length);
        const hiddenIndex = getHiddenIndex(length);
        const hiddenValue = progression[hiddenIndex];
        progression[hiddenIndex] = '..';
        console.log(`Question: ${progression.join(' ')}`);
        const answer = readlineSync.question('Your answer: ');
        if (parseInt(answer, 10) !== hiddenValue) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.`);
            console.log(`Let's try again, ${name}!`);
            return; // завершаем игру при ошибке
        }
        console.log('Correct!');
    }
    console.log(`Congratulations, ${name}!`);
};

brainProgression();
