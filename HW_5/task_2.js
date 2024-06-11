/*
1. На вход функции подаётся предложение, например “I am the best AQA ever!” Преобразуйте строку таким образом, 
  чтобы вместо каждой буквы была цифра, показывающая сколько раз эта буква встречается в предложении. 
  Пробелы и знаки препинания оставляем без изменения. Регистр не должен играть роли.
*/
function checkCountLettersOnSentence(str){
    str = str.toLowerCase();
    let result = '';   
    for (let char of str){
        if (char >= 'a' && char <= 'z'){
            result += '' + (str.split(char).length - 1);
        }
        else {
            result += char;
        }
    }
    return result;

}
console.log(checkCountLettersOnSentence('I am the best AQA ever!'));

/*
2. У вас есть массив с ценами товаров в чеке. В консоль нужно вывести сумму всех цен и среднюю цену товара.
  Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле.  
  const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];
*/
function checkSumAndAvgCost(arr){
    const sumSalaries = arr.reduce(function(result, price) {
        return result + price
    }, 0)   
    
    return `Итого: ${sumSalaries} $, средняя цена товара ${sumSalaries/arr.length} $`;   
    
}
console.log(checkSumAndAvgCost([64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123]));

/*
3. Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возврастанию количества гласных букв в слове.
*/



function sortedByVolwes(array){
    const sortedArrAsc = array.sort((a, b) => checkVowels(a) - checkVowels(b));
    return sortedArrAsc

}

function checkVowels(word) {
    const vowels = 'aeiouAEIOU';
    const characters = word.split('');
    let sumVowels = characters.reduce(function(sum, char) {
        if (vowels.includes(char)) {
            return sum+1;
        } else {
            return sum;
        }
    }, 0);
    return sumVowels;
}

console.log(sortedByVolwes(["Apple", "banana", "orange", "kiwi", "plum"]))


/*
4. У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’], количество элементов и последовательность может быть разной.
  Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
  Усложнение: в массиве могут быть вложены еще массивы на разной глубине. (ПОПРОБУЙТЕ МЕТОД .flat(), изучите как он работает с разными глубинами вложенности)
  Вернуть нужно всё также есть ли у каждой скобочки соответствующая пара. 
  Пример:
  const arr = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]]

*/

function checkBracketBalance(arr) {
    const rulesOpen = {'[': 1, '(': 2, '<': 3 };
    const rulesClose = { ']': -1, ')': -2, '>': -3 };
    // let re = 0;
    // flatArr = arr.flat(Infinity);    
    // for (let char of flatArr){
    //     if (char in rulesOpen){
    //             re += rulesOpen[char];
    //     }
    //     else re += rulesClose[char];
    // }
    const re = arr.flat(Infinity).reduce((sum, char) => {
        if (char in rulesOpen) {
            return sum + rulesOpen[char];
        } else {
            return sum + rulesClose[char];
        }
    }, 0);
    return re === 0 ? true : false;    
}
console.log(checkBracketBalance([[['(']], ')', '(', ')', ')', ['(', ['('], [')']]])) // true
console.log(checkBracketBalance(['(', ')'])) // true
console.log(checkBracketBalance(['(', '[', ')', ')'])) // false