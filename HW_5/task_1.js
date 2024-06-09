/*
1. Создайте функцию getOnlyNumbers, принимающую на вход массив arrayOnAnyValues
2. Внутри функции создайте переменную result, в которую упадет результат работы метода .filter()
3. В метод filter передайте callback функцию, проверяющую является ли значение числом.
4. В переменной result должны остаться только те элементы массива arrayOnAnyValues, которые являются числами ('2' - не число)
5. Вернуть result из функции

*/

function getOnlyNumbers(arr){
    let result = arr.filter(function(num){
       return typeof(num) === 'number' && !isNaN(num);
    })
    return result;
}
console.log(getOnlyNumbers([NaN, 1, true, 5, "hello", undefined, 15.5, {}, []]));
