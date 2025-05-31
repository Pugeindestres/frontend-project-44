#!/usr/bin/env node
//* eslint-disable no-const-assign */
//* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import readlineSync from 'readline-sync';


const randomNum = () => Math.floor(Math.random() * 100); // переменная генерирующая случайное число
const Even = (number) => number % 2 === 0; // проверка случайного числа на четность


export function HelloUser() { //функция коотрая спрашивает у пользователя имя
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('who is?: ');
  console.log(`Welcom to brain-games, ${name}!`);
  return name;
}

export function gamesEven(){ // функция логики игры
    const name = HelloUser();
    let correct_answers = 0;

    for (let i = 0; i < 3; i++){ // запускаем 3 раунда игры
        const number = randomNum() 
        const correct_answer = Even(number) ? 'yes' : 'no'; //условие если число четное true, нечетное false
        const inputUser = readlineSync.question(`Question: Is ${number} even? (yes/no) `)

        if (inputUser === correct_answer) { //условие игры
            console.log('Correct!');
            correct_answers += 1;
        }
        else {
            console.log(`Wrong! The correct answer was '${correct_answer}'.`);
            console.log(`Let's try again, ${name}!`);
      return;
        }
        console.log(`Congratulations, ${name}! You won!`);
    }
}
gamesEven();

