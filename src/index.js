import readlineSync from 'readline-sync';


export function HelloUser() { //функция коотрая спрашивает у пользователя имя
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('who is?: ');
  console.log(`Welcom to brain-games, ${name}!`);
  return name;
}

export function randomNumber (){
    return Math.floor(Math.random() * 1001)// переменная генерирующая случайное число
}


export function even (number) {
    return number = number % 2 === 0; // проверка случайного числа на четность
}
