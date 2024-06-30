/*
1. Создайте интерфейс IEmployee с полями name, surname, salary, address (типы для этих полей такие же как в ItEmployee из таск 1)
  Создайте функцию getEmployeeInfo(employee), выводящую в консоль всю информацию про employee (формат текста придумать самим)
  Создайте type guard isItEmployee. Используйте его в функции getEmployeeInfo.
  Если на входе itEmployee - выводите в консоль все поля айтишника (а не только те, что в employee)
  Функция должна принимать union type между Employee и ItEmployee, и через тайпгвард определять что за объект и как работать с ним
*/

// task_2.ts
import { IItEmployee, IAddress, object } from './task_1';

interface IEmployee {
    name: string;
    surname: string;
    salary: number;
    address: IAddress;
}

function isItEmployee(employee: IEmployee | IItEmployee): employee is IItEmployee {
    return 'grade' in employee;
}

function getEmployeeInfo(employee: IEmployee | IItEmployee): string {
    if (isItEmployee(employee)) {
        return `IT Employee:
            Name: ${employee.name}
            Surname: ${employee.surname}
            Salary: ${employee.salary}
            Grade: ${employee.grade}
            Occupation: ${employee.occupation}
            Address: ${employee.address ? `${employee.address.country}, ${employee.address.street}, ${employee.address.house}, ${employee.address.flat}` : 'N/A'}
            Projects: ${employee.projectNames.join(', ')}
        `;
    } else {
        return `Employee:
            Name: ${employee.name}
            Surname: ${employee.surname}
            Salary: ${employee.salary}
            Address: ${employee.address.country}, ${employee.address.street}, ${employee.address.house}, ${employee.address.flat}
        `;
    }
};


const employee: IEmployee = {
    name: 'Loh',
    surname: 'Doe',
    salary: 0,
    address: {
        country: 'Russia',
        street: 'street',
        house: 1,
        flat: 2
    }
};



console.log(getEmployeeInfo(employee));
console.log(getEmployeeInfo(object));

// Создайте функцию, которая подсчитает, сколько в объекте значений каждого типа.
//   Принимает на вход объект или массив таких же объектов, у которого ключ всегда string, а значение - string, number, boolean.
//   Возвращает же - объект с ключами string, number, boolean и количеством таких значений в объекте или в сумме у всех объектов в массиве.

type TValueTypes = 'string' | 'number' | 'boolean';
type TCountValueTypesObject = Record<string, string | number | boolean>;

function countValueTypes(input: TCountValueTypesObject | TCountValueTypesObject[]): Record<TValueTypes, number> {
    const result: Record<TValueTypes, number> = {
        'string':0,
        'number': 0,
        'boolean':0
    }
    if (Array.isArray(input)){
        input.forEach(obj => {
            Object.values(obj).forEach(value =>{
                if (typeof value === 'string'){
                    result['string']++;
                }else if (typeof value === 'number'){
                    result['number']++;
                }else {
                    result['boolean']++
                }
            })
        })
    }else{
        Object.values(input).forEach(value =>{
            if (typeof value === 'string'){
                result['string']++;
            }else if (typeof value === 'number'){
                result['number']++;
            }else {
                result['boolean']++
            }
        })
    }
    return result
};

const obj1 = {
    key1: 'value1',
    key2: 123,
    key3: true
};

const obj2 = {
    key1: 'value2',
    key2: 456,
    key3: false
};

const combinedObj = [obj1, obj2];

console.log(countValueTypes(obj1));
console.log(countValueTypes(combinedObj));




// 3. Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат (коллбэк),
//     который будет использоваться для проверки каждого числа на соответствие требованиям.
//     Помимо самой функции следует реализовать алиасы типов для функций и аттрибутов.
//     Пример функции:
//     const numbers = [1, -5, 2, 3, 4, 133];
//     filter(numbers, (n) => n > 3); // [4, 133]
//     filter(numbers, (n) => n % 2 == 0); // [2, 4]
//     Параметры функции: Массив чисел и Анонимная функция, принимающая на вход число и возвращающая логическое значение.
//  */

const numbers = [1, -5, 2, 3, 4, 133];
type isNumber = (number:number) => boolean;
function filter(arr: number[], callback: isNumber){
    return arr.filter(callback)
};

console.log(filter(numbers, (n) => n % 2 == 0));