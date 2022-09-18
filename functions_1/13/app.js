// 13. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для поиска максимального значения в массиве. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// максимальное значение массива

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function checkArr(newArr) {
    const res = newArr.filter(el => !isNaN(el))
    return newArr.length === res.length ? getMaxArr(newArr) : false
}

function getMaxArr(arrOfValues) {
    let maxValue = arrOfValues[0]
    arrOfValues.forEach(el => maxValue < el ? maxValue = el : null)
    return maxValue
}


console.log(checkArr(arr));