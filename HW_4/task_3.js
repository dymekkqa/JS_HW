/*
5*. Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры. И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число. Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

6*. Написать функцию, которая принимает на вход строку с текстом, и заменяет каждую пару стоящих подряд идентичных букв на одну следующую в алфавите, 
    и так пока в тексте не останется двух одинаковых букв стоящих рядом (через пробел и другой знак препинания можно)
    Пример: aabc => bbc => cc => d

*/
function reсursionSumNumbers(num){
    if(num < 10){
        return num;
    }
    let sum = 0;
    for(const i of String(num)){
        sum += Number(i);
    }
    return reсursionSumNumbers(sum)
}


function recursionEqualSymbols(str) {    
    let result = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < str.length; i++) {
        if (i !== str.length - 1 && str[i] === str[i + 1]) {
            i++;
            let index_alphabet = alphabet.indexOf(str[i]);
            result += alphabet[index_alphabet + 1];            
        } 
        else {
            result += str[i];
        }
    }
    if (result === '') {
        return str;    
    } 
    else if (str[0] !== str[1]){
        return result;
    }

    else {
        return recursionEqualSymbols(result);
    }
}












