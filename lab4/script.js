console.log("Завдання 1.");
let name = prompt("Введіть ваше ім'я:");
alert("Привіт," + name);
console.log("Консоль");

console.log("Завдання 2.");
let num1 = Float(prompt("Введіть перше число:"));
let num2 = Float(prompt("Введіть друге число:"));

let sum = num1 + num2;
let difference = num1 - num2;

alert("Сума: " + sum + " Різниця: " + difference);
console.log("Сума: " + sum);
console.log("Різниця: " + difference);

console.log("Завдання 3.");
let birthYear = parseInt(prompt("Введіть ваш рік народження:"));
let nowYear = new Date().getFullYear();
let age = nowYear - birthYear;

alert("Ваш вік: " + age + " років.");
console.log("Вік користувача: " + age + " років.");

if (age < 18) {
    console.log("Користувач неповнолітній.");
    alert("Ви неповнолітній. Доступ обмежено.");
} else {
    console.log("Користувач повнолітній.");
    alert("Ви повнолітній. Ласкаво просимо!");
}