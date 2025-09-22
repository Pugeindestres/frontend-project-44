import readlineSync from 'readline-sync'; // библиотека для чтения пользовательского ввода

export function HelloUser() { // функция коотрая спрашивает у пользователя имя
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${name}`);
    console.log(`Welcom to brain-games, ${name}!`);
    return name;
}
