// 11. На входе пустой объект. С клавиатуры вводятся 2 числа. Необходимо добавить в
// объект ключ “avg” со значением среднего арифметического введенных с чисел

const obj = {}

let n1 = +prompt('')
let n2 = +prompt('')

obj.avg = (n1 + n2) / 2
console.log(obj);
