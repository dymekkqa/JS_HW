/*
1. Написать скрипт, переводящий количество байт в нужные единицы
  bytes => kB Mb Gb Tb
  16 565 846 bytes (16,6 Mb)

  1 Kb = 1024 byte
  1 Mb = 1024 Kb
  1 Gb = 1024 Mb
  1 Tb = 1024 Gb

  // Пример: ~ 1000
  4 548 = 4,5 Kb (Real 4,4 Kb)
  454 548 = 454,5 Kb
  1 454 548 = 1,5 Mb

  Результат должен быть округлен до 1 знака после запятой методом .toFixed(), про который надо почитать самим ;)

2. Сделать из "*" в консоли равнобедренный треугольник и ромб

3.  Вам нужно вывести в консоль числа от 1 до 100.
    Если число делится без остатка на 3, то выведете в консоль “число - делится на 3”.
    Если число делится на 5 без остатка, то то выведете в консоль “число - делится на 5”.
    Если число делится и на 3 и на 5 без остатка, то то выведете в консоль “число - делится и на 3 на 5”.
    Число 15 делится без остатка на 3 и на 5 -- пример сообщения в консоле.

4. Написать скрипт, который преобразует любое предложение в camelCase. Первое слово должно начинаться с буквы в нижнем регистре, 
  у остальных -  верхнем. Пример: I am super engineer => iAmSuperEngineer


*/

// 1. Написать скрипт, переводящий количество байт в нужные единицы

function convert_by_size(bytes) {
    if (bytes === 0) {
        console.log('0 B');        
    }
    const unit_list = ['B', 'KB', 'MB', 'GB', 'TB'];
    let unit_index = 0;
    
    while (bytes >= 1000 && unit_index < unit_list.length - 1) {
        bytes /= 1000;
        unit_index++;
    }

    console.log(`${bytes.toFixed(1)} ${unit_list[unit_index]}`);
}

convert_by_size(16565846);

 //2. Сделать из "*" в консоли равнобедренный треугольник и ромб
 
 let height = 5;
  
 for (let i = 0; i <= height; i++) {
     let spaces = ' '.repeat(height - i);
     let stars = '*'.repeat(i * 2 + 1);
     console.log(spaces + stars + spaces);
 } 

 for (let i = 0; i <= height; i++) {
     let spaces = ' '.repeat(height - i);
     let stars = '*'.repeat(i * 2 + 1);
     console.log(spaces + stars + spaces);
 }
 for (let i = height - 1; i >= 0; i--) {
     let spaces = ' '.repeat(height - i);
     let stars = '*'.repeat(i * 2 + 1);
     console.log(spaces + stars + spaces);
 }

 // задание 3 : Вам нужно вывести в консоль числа от 1 до 100.

 for(let i = 1; i <= 100; i++){
  if (i % 3 === 0 && i % 5 === 0) {
      console.log(`число ${i} - делится на 3 и 5`);
  } else if (i % 3 === 0) {
      console.log(`число ${i} - делится на 3`);
  } else if (i % 5 === 0) {
      console.log(`число ${i} - делится на 5`);
  }
}


 // 4. Написать скрипт, который преобразует любое предложение в camelCase. Первое слово должно начинаться с буквы в нижнем регистре, 
//у остальных -  верхнем. Пример: I am super engineer => iAmSuperEngineer

let str = 'I am super engineer'.toLowerCase()
let arr_str = str.split(' ');
let new_str = '';

for (let i = 0; i < arr_str.length; i++) {
    if (i === 0) {         
        new_str += arr_str[i];
    } else {
        new_str += arr_str[i].replace(arr_str[i][0], arr_str[i][0].toUpperCase());         
    }
}
console.log(new_str);
