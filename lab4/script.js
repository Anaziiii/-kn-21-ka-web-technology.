console.log("Завдання 1.");
let name = prompt("Введіть ваше ім'я:");
alert("Привіт," + name);
console.log("Консоль");

console.log("Завдання 2.");
let num1 = Number(prompt("Введіть перше число:"));
let num2 = Number(prompt("Введіть друге число:"));

let sum = num1 + num2;
let dif = num1 - num2;

alert("Сума: " + sum + " Різниця: " + dif);
console.log("Сума: " + sum);
console.log("Різниця: " + dif);

console.log("Завдання 3.");
let birthYear = Number(prompt("Введіть ваш рік народження:"));
let age = 2026 - birthYear

alert("Ваш вік: " + age + " років.");

console.log("Вік користувача: " + age + " років.");

if (age < 18) {
    console.log("Користувач неповнолітній.");
    alert("Ви неповнолітній. Доступ обмежено.");
} else {
    console.log("Користувач повнолітній.");
    alert("Ви повнолітній. Ласкаво просимо!");
}