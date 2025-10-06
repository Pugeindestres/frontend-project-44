import runGame from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
};

const generateRound = () => {
  const number = Math.floor(Math.random() * 100) + 1; // числа от 1 до 100
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = String(number);
  
  return [question, correctAnswer];
};

export default function runPrimeGame() {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(description, generateRound);
}
