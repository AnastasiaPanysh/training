/*18.Пользователь вводит с клавиатуры число. Найдите корень введенного числа
(если же результат – число с плавающей точкой, то округлить то целых)*/

let a = +prompt('Введите число');
console.log(`корень введенного числа ${Math.round(Math.sqrt(a))}`);