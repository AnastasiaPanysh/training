/*16. Пользователь вводит строку. Вывести первый символ строки (индексы) */

let a = prompt("введите строку");
console.log(isNaN(a) ? a.charAt(0) : 'не строка');