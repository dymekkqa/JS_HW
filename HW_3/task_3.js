/*
1*. Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом), 
  и выводить в консоль количество гласных и согласных букв в этом слове. 
  Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants
*/

let word = 'WORD'.toLocaleLowerCase()
vowels = "aeiou"
vowels_count = 0
consonants_count = 0
for(let i of word){
    if(vowels.includes(i)){
        vowels_count++;
        }
   else {
    consonants_count++;
        }
}
console.log(`vowels: ${vowels_count}, word contains: ${consonants_count}`);

/*
2**. Написать программу, которая видоизменяет принимаемое слово (переменная со словом) 
  шифром ЦЕЗАРЯ (посмотреть в википедии) со сдвигом на 1 в любую из сторон. 
  Направление шифрования задается переменной offset, которая может быть +1 и -1.
  Например let str = 'AbC'; let offset = -1, result = 'ZaB';
  Например let str = 'ZzZ'; let offset = 1, result = 'AaA';

*/

function cesar(str, offset){
    const alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
    const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let cesar_word = '';
    for(let char of str){
        if(!alphabet.includes(char) && !alphabetUpper.includes(char)){
            cesar_word += char;
        }
        else if(offset === 'right'){
            if(alphabet.includes(char)){
                let index = alphabet.indexOf(char)+1;
                cesar_word += alphabet[index];
            }            
            else {
                let index = alphabetUpper.indexOf(char)+1
                cesar_word += alphabetUpper[index]
            }
        }
        else if(offset === 'left'){
            if(alphabet.includes(char) && char !== 'a'){
                let index = alphabet.indexOf(char) - 1;
                cesar_word += alphabet[index];
            }
            else if(alphabetUpper.includes(char) && char !== 'A'){
                let index = alphabetUpper.indexOf(char)-1;
                cesar_word += alphabetUpper[index];
            }
            else if(alphabet.includes(char) && char === 'a'){
                cesar_word += alphabet[alphabet.length-1];
            }
            else if(alphabetUpper.includes(char) && char === 'A'){
                cesar_word += alphabetUpper[alphabetUpper.length-1];
            }
        
        }
     }
     console.log(cesar_word)
}
cesar('Anatoly, Hello!', 'left')
