//zadanie 1

const A = 'Hello';
const B = 'World';
console.log(`${A} ${B}`);

//zadanie 2

const multiply = (a = 1, b = 1) => a * b;
console.log(multiply(5));

//zadanie 3

const average = (...args) => args.reduce((a, b) => a + b) / args.length;
console.log(average(1,2));

//zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

//zadanie 5

const data = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstName, , lastName] = data;
console.log(`${firstName} ${lastName}`);