let date = new Date();
let dateNY = new Date("01.01.2023");
let timeRemaining = Math.floor(
  (dateNY.getTime() - date.getTime()) / 1000 / 60 / 60 / 24
);

let hours = date.getHours();
let period = date.getHours() >= 12 ? " PM" : " AM";
let time = date.toLocaleTimeString() + period;

const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const indexDay = date.getDay();

if (hours >= 12 && hours <= 18) {
  console.log("Добрый день!");
} else if (hours >= 18 && hours <= 23) {
  console.log("Добрый вечер!");
} else if (hours >= 23 && hours <= 6) {
  console.log("Доброй ночи!");
} else {
  console.log("Доброе утро!");
}

console.log("Текущее время:", time);
console.log("Сегодня:", days[indexDay]);
console.log(timeRemaining + " денй осталось до Нового Года!");
