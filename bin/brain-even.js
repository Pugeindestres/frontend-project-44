#!/usr/bin/env node
//* eslint-disable no-const-assign */
//* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import readlineSync from 'readline-sync';
import {HelloUser, randomNumber, even} from '../src/index.js';

export function gamesEven(){ // функция логики игры
    const name = HelloUser();
    let correct_answers = 0;

    for (let i = 0; i < 3; i++){ // запускаем 3 раунда игры
        const number = randomNumber(); 
        const correct_answer = even(number) ? 'yes' : 'no'; //условие если число четное true, нечетное false
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

