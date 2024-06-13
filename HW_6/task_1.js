/*
Task 1.
Имеется массив объектов (ниже). Ваше задание:
1. Используя Object.keys и метод forEach вывести в консоль ключи каждого объекта
2. Используя Object.values и метод forEach вывести в консоль значения каждого объекта
3. Перебрать форычем массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${ket}, value = ${value}`.
   Перебирать каждый объект циклом for..of вида for(const [key, value] of Object.entries)
4. Перебрать форычем массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`.
   Перебирать каждый объект циклом for..in
5. Создайте объект qa с полями name, age, salary и методом getInfo, который будет возвращать строку вида: 
   `Hello, my name is ${name}, i'm ${age} and my salary is ${salary}`. Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.

 const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 }
  ];

*/
const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 }
  ];

let keys = [];
characters.forEach(character => keys.push(Object.keys(character)));
console.log(keys);

let values = [];
characters.forEach(character => values.push(Object.values(character)));
console.log(values);


characters.forEach(char =>{
    for(const [key, value] of Object.entries(char)){
        console.log(`key = ${key}, value = ${value}`)
    };
});

characters.forEach(char =>{
    for(let key in char){
        console.log(`key = ${key}, value = ${char[key]}`)
    };
});

const qa = {
      name: "Dzmitry",
      age: 34,
      salary: 1,
      getInfo() {
        return `Hello, my name is ${this.name}, i'm ${this.age} and my salary is ${this.salary}`;
      },
    };

console.log(qa.getInfo())