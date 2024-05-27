/*
Решения уравнения использовал источники https://learn.javascript.ru/logical-operators для использования оператора if,
а также https://learn.javascript.ru/while-for для использования цикла for.
Для добавления элементов в массив использовал https://learn.javascript.ru/array-methods,
а для поиска элементов массива по индексу - https://www.w3schools.com/js/js_arrays.asp#:~:text=Dost%C4%99p%20do%20element%C3%B3w%20tablicy
*/

// Уравнение 1: x^2 - 6x + 9 = 0 - один корень
for (let I = 0; I < 10; I++) { 
    if (I**2 - 6*I + 9 == 0)
        console.log('Ответ к уравнению 1: ' + I);
}

// Уравнение 2: x^2 - 4x - 5 = 0 - два корня
let Roots = [];
for (let Y = -10; Y < 10; Y++) { 
    if (Y**2 - 4*Y - 5 == 0)
        Roots.push(Y) 
}
console.log('Ответ к уравнению 2: ' + Roots[0] + ' и ' + Roots[1]);

