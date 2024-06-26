/*
1. У вас есть массив названий пицц вашего конкурента. Создайте функцию, которая будет принимать ваш набор названий пицц (массив) 
  и возвращать только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вернуть null
  Пиццы конкурента:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  
2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра и выводит в консоль слово с наибольшим количеством букв. 
  Если таких слов несколько - выводит их все.

3. Напишите функцию, которая принимает на вход массив чисел, убирает из него дубликаты и возвращает массив с только уникальными значениями.

4. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом

*/

function checkCompetitorPizzas(myPizzas){
    const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
    let result = [];
    for(pizza of competitorPizzas) {
        if(!myPizzas.includes(pizza)){
            result.push(pizza);
        }
    }
    return result.length > 0 ? result : null;
};

function returnWordWithMaxSymbols(sentence){
    let array = [];
    const words = sentence.split(' ');
    let count = 0;
    for(let word of words){
        if(word.length > count){
            array = [word];            
            count = word.length;                  
        }
        else if(word.length === count){
            array.push(word);
        };        
    }
    return array.join(',')
};


function getUniqueValues(arr) {    
    return [...new Set(arr)]
};

    

function polindrom(str){
    return str === str.split('').reverse().join('')
};

