#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {HelloUser} from '../src/cli.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInt(0, operators.length - 1)];
};

const generateQuestion = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const operator = getRandomOperator();
  return { question: `${num1} ${operator} ${num2}`, answer: eval(`${num1} ${operator} ${num2}`) };
};
export function gamesCalc(){
    const name = HelloUser();
    console.log('What is the result of the expression?');
    for (let i = 0; i < 3; i++) {
      const { question, answer } = generateQuestion();
      const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
      if (Number(userAnswer) === answer) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
    }
    console.log(`Congratulations, ${name}!`);
  };
gamesCalc()
