import runGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

export default function runEvenGame() {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(description, generateRound);
}
