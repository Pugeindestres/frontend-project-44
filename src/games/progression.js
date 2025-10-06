import runGame from '../index.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const progressionLength = Math.floor(Math.random() * 6) + 5; // от 5 до 10 чисел
  const start = Math.floor(Math.random() * 50) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const hiddenIndex = Math.floor(Math.random() * progressionLength);
  
  const progression = generateProgression(start, step, progressionLength);
  const correctAnswer = String(progression[hiddenIndex]);
  
  // Создаем строку с скрытым элементом
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  
  return [question, correctAnswer];
};

export default function runProgressionGame() {
  const description = 'What number is missing in the progression?';
  runGame(description, generateRound);
}
