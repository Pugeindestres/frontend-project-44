#!/usr/bin/env node

import readlineSync from 'readline-sync'
import { HelloUser } from '../src/cli.js'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomOperator() {
    const operators = ['+', '-', '*']
    return operators[getRandomInt(0, operators.length - 1)]
}

const generateQuestion = () => {
    const num1 = getRandomInt(1, 50)
    const num2 = getRandomInt(1, 50)
    const operator = getRandomOperator()

    // Используем явное вычисление вместо eval
    let answer
    switch (operator) {
    case '+':
        answer = num1 + num2
        break
    case '-':
        answer = num1 - num2
        break
    case '*':
        answer = num1 * num2
        break
    default:
        throw new Error('Invalid operator')
    }

    return { question: `${num1} ${operator} ${num2}`, answer }
}

export function gamesCalc() {
    const name = HelloUser()

    console.log('What is the result of the expression?')

    for (let i = 0; i < 3; i += 1) {
        const { question, answer } = generateQuestion()
        const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `)

        if (Number(userAnswer) === answer) {
            console.log('Correct!')
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`)
            console.log(`Let's try again, ${name}!`)
            return
        }
    }

    console.log(`Congratulations, ${name}!`)
}

gamesCalc()
