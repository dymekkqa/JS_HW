//1
/*
1. number
2. string
3. undefined
4. boolean
5. null
6. Symbol
7. bigInt
8. Object


// 2. falsy значения : 0, null, undefined, '', NaN, false

//3. Что делает команда alert? alert('2')

//4. Назови все варианты как можно преобразовать n в Number

let n = 'Anton ne znaet JS'

Number(n), +n, n * 1, n - 0, n / 1, parseInt(n)

5. Какими ключевыми словами обьявляется переменная в JS?

let, var, const

6. Что в переменной result: const result = 10 + true + '10' - 50 + null
1110 - 50 => 1060 + 0

7. Что в переменной result: const result = 'z' + (10 - 10) * '0' + +''
z00

8. Что в переменной result:
let a = 1;
let b = 1;
const result = (a++ + parseInt("123a")) / ++b;

9. Какие символы могут использоваться в имени переменной?
a-z, numbers after, $, _

10. Для чего нужна директива use strict?
*/

//Операторы сравнения

// const a = 2;

// const b = 3;

// const resultAGreaterThanB = a > b;
// const resultBGreaterThanA = a < b;

// console.log(resultAGreaterThanB);
// console.log(resultBGreaterThanA);

// const result = a >= 2;
// console.log(result);

// const a = 2;

// const b = "2";

// const equal = a == b;

// console.log(equal);

// const strictEqual = a === b;

// console.log(strictEqual);

// const notEqual = a !== b;
// console.log(notEqual);

// const result = 3 > 2 > 1;
// 3 > 2 => true => true > 1 => false

// Логические операторы

// || - логическое ИЛИ

// let a = 0;
// let b = 1;
// const result = a || "" || false || null || b || "true";
// console.log(result);

// const result2 = a || String(b);
// console.log(result2);

// let a = 0;
// let b = 1;
// const result = a || "" || false || null || NaN || undefined;
// console.log(result);

// && - логическое И

// let a = "true";
// let b = false;

// const result = !(a && 5);

// console.log(result);

// const result = !!"0"; //Boolean('0')
// console.log(result);

//Условные операторы

// Task3**. Напишите программу, которая принимает целое положительное число n, 1 <= n <= 9,
// const n = 1;

// if (n > 9) {
//   console.log("too large number");
// } else if (n < 1) {
//   console.log("number is to low");
// } else {
//   console.log("good number");
// }

// const n = 15;

// if (n >= 1 || n <= 9) {
//   console.log("correct number");
// } else {
//   console.log("invalid value");
// }

// const n = 9;

// if (n < 1 || n > 9) {
//   console.log("invalid number");
// }

// const n = 0; //n !== 0

// if (n) {
//   // => if(Boolean(n)) => if(!!n)
//   console.log("correct n");
// }

//Тернарный оператор

// const n = 5;
// n > 1 ? console.log("correct n") : console.log("invalid n");

// // условие ? код если да : код если нет

// if (n > 1) {
//   console.log("correct n");
// } else {
//   console.log("invalid n");
// }

// const n = 5;
// НИКОГДА ТАК НЕ ДЕЛАТЬ!
// n > 10 ? console.log("too large") : n > 5 ? console.log("still to large") : console.log("good n");

// if (n > 10) {
//   console.log("too large");
// } else if (n > 5) {
//   console.log("still to large");
// } else {
//   console.log("good n");
// }

// let message;

//if(n > 5) => "still to large", else => "good n"

// const n = 6;

// const message = n > 5 ? "still to large" : "good n";
// console.log(message);

// const numberOfStudents = -1;
// const result = numberOfStudents + " student" + (numberOfStudents > 1 || numberOfStudents <= 0 ? "s" : "");
// console.log(result);

// const a = 1;

// a == 0 || console.log("a !== 0") || console.log('third');

//1. Boolean(a === 0) => false
//2. Boolean(console.log("a !== 0")) => false
//3. Если !!(a === 0) === false and !!(console.log("a !== 0")) => то вернуть ПРАВЫЙ операнд console.log("a !== 0")

// const a = 0;
// a == 0 && console.log("a === 0");

// const b = response.status === 200 ? resposne.data : null;

// const a = 1;

// const result = a == 0 || console.log("a !== 0") || console.log("third") || true;

// console.log(result);

// if (console.log("check false")) {
//   console.log("console log returns true");
// } else {
//   console.log("console log returns false");
// }

//switch
// if ((resonseStatus === 200)) {
// } else if (resonseStatus === 201) {
// }
// // ...

// const resonseStatus = 394498327894;

// switch (resonseStatus) {
//   case 200: {
//     console.log("Ok");
//     break;
//   }
//   case 201: {
//     console.log("Created");
//     break;
//   }
//   case 404: {
//     console.log("Not found");
//     break;
//   }
//   case 500: {
//     console.log("Servet not available");
//     break;
//   }
//   case 501: {
//     console.log("457342");
//     break;
//   }
//   default: {
//     throw new Error("Unknown status");
//   }
// }
// //

// switch (true) {
//   case 1 + 1 === 2: {
//     console.log("yes"); //!!(value) === true
//   }
// }

// const a = 1;
// let b = 5;
// if (1 > 0) {
//   let b = 3;
//   console.log("b from if body " + b);
//   {
//     let b = 10;
//     console.log("b from nested block scope = " + b);
//   }
// }

// console.log("b from after if " + b);

// ??
// || => если слева ЛЮБОЕ ФОЛС - то возьми справа
// ?? => если слева null || undefined - то возьми справа

// const numberOfUsers = userService.getUsers() => 0

// numberOfUsers ?? throw new Error('undefined response')

/*
Прочитать ДОМА:

- Оператор &&=
- Оператор ||=
- Оператор ??=
*/

// let a = 1;
// let b = 2;
// a &&= b;
// console.log(a); // выводом для переменной 'a' будет 2.
