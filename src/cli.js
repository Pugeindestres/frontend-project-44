import readlineSync from 'readline-sync'; //библиотека для чтения пользовательского ввода


export function HelloUser() { //функция коотрая спрашивает у пользователя имя
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('who is?: ');
  console.log(`Welcom to brain-games, ${name}!`);
}
