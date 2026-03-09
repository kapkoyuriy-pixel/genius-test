//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// const name = "Іван";
// const city = name;
// console.log(city);

//***2***
//Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`); //
// console.log(`привіт ${"name"}`); //
// console.log(`привіт ${name}`); // ?

//***3***
//Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// вивести в консоль тип

// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";

// Перетворюємо рядки на числа
// let numA = parseInt(a);
// let numB = parseInt(b);
// let numC = parseFloat(c);

// Виводимо значення
// console.log(numA); // 5
// console.log(numB); // 13
// console.log(numC); // 12.9

// Виводимо тип у консоль
// console.log(typeof numA); // "number"
// console.log(typeof numB); // "number"
// console.log(typeof numC); // "number"

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3

// let result = 0.1 + 0.2;

// 1. Округлюємо до 1 знака після коми
// let fixedResult = result.toFixed(1);

// console.log(fixedResult); // "0.3"

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40

// let maxNum = Math.min(20, 10, 50, 40);
// console.log(maxNum); // 50

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4
// 1. Отримуємо випадкове від 0 до 2.99
// let step1 = Math.random() * 3;

// 2. Округляємо донизу (отримаємо 0, 1 або 2)
// let step2 = Math.floor(step1);

// 3. Додаємо 2 (тепер замість 0, 1, 2 маємо 2, 3, 4)
// let result = step2 + 2;
// console.log(result);

// або

// let randomNum = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
// console.log(randomNum);

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";
// console.log(message.length);

//***8**
//вивести в консоль message  великими літерами
// const message = "Welcome to Bahamas!";
// console.log(message.toUpperCase());

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

// const user = {}; // Пустий об'єкт

// user.name = "Ivan";
// user.age = 25;
// user.city = "Kyiv";

// console.log(user); // Об'єкт з ім'ям, віком і містом

// delete user.city;

// user["like flowers"] = true; // Ключ з пробілом пишемо в дужках

// console.log(user); // Фінальний результат

// //***10**
// // За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта

// for (let key in user) {
//   console.log(key + ": " + user[key]);
// }
