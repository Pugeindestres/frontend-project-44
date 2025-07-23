#!/usr/bin/env node
import readlineSync from 'readline-sync';
const getProgression = (start, step, length) => {
  return Array.from({ length }, (_, index) => start + index * step);
};

const getHiddenIndex = (length) => Math.floor(Math.random() * length);
const brainProgression = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  const length = Math.floor(Math.random() * 6) + 5; // Длина от 5 до 10
  const start = Math.floor(Math.random() * 100);
  const step = Math.floor(Math.random() * 10) + 1; // Шаг от 1 до 10
  const progression = getProgression(start, step, length);
  const hiddenIndex = getHiddenIndex(length);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  console.log(`Question: ${progression.join(' ')}`);
  const answer = readlineSync.question('Your answer: ');
  if (parseInt(answer, 10) === hiddenValue) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.`);
    console.log(`Let's try again, ${name}!`);
    return;
  }
  // Можно добавить больше вопросов, если хотите
  console.log(`Congratulations, ${name}!`);
};
brainProgression();
