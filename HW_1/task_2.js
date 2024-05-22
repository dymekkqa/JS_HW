/*
решения уровнения использовал источники https://learn.javascript.ru/logical-operators для использования оператора if
также использовал источник https://learn.javascript.ru/while-for для использования цикла for
для добавления элементов в массив использовал взял отсюда https://learn.javascript.ru/array-methods
для поиска элементов массива по индексу взял отсюда взял отсюда https://www.w3schools.com/js/js_arrays.asp#:~:text=Dost%C4%99p%20do%20element%C3%B3w%20tablicy

Task2*. Решить квадратные уравнения. Переменные называть по правилам.
Вывести в консоль ответы в виде "Ответ к уравнению 1: <корень>", "Ответ к уравнению 2: <корень> и <корень>"


1.  x2 - 6x + 9 = 0. - один корень
*/
for (let i = 0; i < 10; i++) { 
    if (i**2 - 6*i + 9 == 0)
        console.log('Ответ к уравнению 1: ' + i);
  }

//2.  x2 - 4x - 5 = 0. - два корня
let roots = []
for (let y = -10; y < 10; y++) { 
    if (y**2 - 4*y -5 == 0)
        roots.push(y) 
  }
console.log('Ответ к уравнению 2: ' + roots[0] + ' и '+ roots[1]); 