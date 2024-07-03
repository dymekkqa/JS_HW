"use strict";
function map(arr, callback) {
    const result = arr.map(function (currentValue, index) {
        return callback(currentValue, index, arr);
    });
    return result;
}
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = map(numbers, (num, index) => num * index);
console.log(doubledNumbers);
function generateObject(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        const [key, value] = arr[i];
        obj[key] = value;
    }
    return obj;
}
const result = generateObject([['1', 1], ['2', 3], ['2', 2]]);
const result1 = generateObject([['true', true], ['false', false]]);
const result2 = generateObject([['a', 'a'], ['b', 'b'], ['b', 'c']]);
console.log(result);
console.log(result1);
console.log(result2);
