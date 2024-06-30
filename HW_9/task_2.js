"use strict";
/*
1. Создайте интерфейс IEmployee с полями name, surname, salary, address (типы для этих полей такие же как в ItEmployee из таск 1)
  Создайте функцию getEmployeeInfo(employee), выводящую в консоль всю информацию про employee (формат текста придумать самим)
  Создайте type guard isItEmployee. Используйте его в функции getEmployeeInfo.
  Если на входе itEmployee - выводите в консоль все поля айтишника (а не только те, что в employee)
  Функция должна принимать union type между Employee и ItEmployee, и через тайпгвард определять что за объект и как работать с ним
*/
Object.defineProperty(exports, "__esModule", { value: true });
// task_2.ts
const task_1_1 = require("./task_1");
// Теперь вы можете использовать импортированные сущности
console.log(task_1_1.object);
