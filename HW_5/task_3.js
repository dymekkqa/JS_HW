/*
5*. Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива. */



function findMissingNum(arr) {    
    arr = [...new Set(arr)];        
    let sum = arr.reduce((sum, num) => sum + num, 0);    
    const goodArr = Array.from({length: arr[arr.length - 1]}, (_, index) => index + 1);
    let goodSum =  goodArr.reduce((sum, num) => sum + num, 0);       
    return goodSum - sum;
}


console.log(findMissingNum([1,2, 2, 3,5,6,7]))



/*6**. В файле вы найдете массив карточек юзеров. Задача - создать функцию, которая уберет из массива дубликаты. 
  Вернуть массив с сугубо уникальными карточками. Реализовать методом SET. 
  Разобраться, как считать данные из файла КОДОМ, а не копировать ручками.

*/

const fs = require('fs');
const filePath = 'HW_5/cards.json';

function removeDuplicatesFromFile(filePath) {
    
    const data = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(data);        
    const uniqueObjects = new Set(jsonData.map(JSON.stringify));        
    const uniqueData = [...uniqueObjects].map(JSON.parse);
    return uniqueData.map(obj => obj.username);// специально добавил на вывод username чтобы не читать весь JSON
   
}

console.log(removeDuplicatesFromFile(filePath));

