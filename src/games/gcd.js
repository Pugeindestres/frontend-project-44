import runGame from '../index.js'

const findGCD = (a, b) => {
  let num1 = a
  let num2 = b

  while (num2 !== 0) {
    const temp = num2
    num2 = num1 % num2
    num1 = temp
  }

  return num1
}

const generateRound = () => {
  const num1 = Math.floor(Math.random() * 100) + 1
  const num2 = Math.floor(Math.random() * 100) + 1

  const question = `${num1} ${num2}`
  const correctAnswer = String(findGCD(num1, num2))

  return [question, correctAnswer]
}

export default function runGcdGame() {
  const description = 'Find the greatest common divisor of given numbers.'
  runGame(description, generateRound)
}
