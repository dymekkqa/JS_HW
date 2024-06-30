"use strict";
/*
1. Создайте interface ItEmployee
2. В интерфейсе ItEmployee сделайте поле name которое может быть только string
3. В интерфейсе ItEmployee сделайте поле surname которое может быть только string
4. В интерфейсе ItEmployee сделайте поле salary которое может быть только number и доступно только для чтения
5. Создайте тип данных Grade для стринговой переменной, которая может принимать значения: junior, middle, senior, lead
6. В интерфейсе ItEmployee сделайте поле grade типа Grade
7. Создайте enum OCCUPATION, который будет представлять професси в айти вида DEVELOPER = "Developer" и так далее
8. В интерфейсе ItEmployee сделайте поле occupation типа OCCUPATION
9. Создайте интерфейс IAddress, предствляющий объект с полями country, street, house, flat
10. В интерфейсе ItEmployee сделайте необязательное поле address типа IAddress
11. В интерфейсе ItEmployee сделайте projectNames, типа массив строк (названий проектов)
12. Создайте объект с типом ItEmployee

 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.object = exports.OCCUPATION = void 0;
;
var OCCUPATION;
(function (OCCUPATION) {
    OCCUPATION["Developer"] = "Developer";
    OCCUPATION["Tester"] = "Tester";
    OCCUPATION["Manager"] = "Manager";
})(OCCUPATION || (exports.OCCUPATION = OCCUPATION = {}));
;
;
exports.object = {
    name: 'Dzmitry',
    surname: 'TSovski',
    salary: 1,
    grade: 'middle',
    occupation: OCCUPATION.Tester,
    projectNames: ['Regression tests'],
    adress: {
        country: 'Belarus',
        street: 'Street',
        house: 1,
        flat: 0
    }
};
