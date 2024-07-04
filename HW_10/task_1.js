"use strict";
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement(['1', '2']));
console.log(getFirstElement([1, 2]));
class Employee {
    constructor(name, surname, experienceOfYears) {
        this.name = name;
        this.surname = surname;
        this.experienceOfYears = experienceOfYears;
        this.salary = 0;
    }
    ;
}
class Manager extends Employee {
    constructor(name, surname, experienceOfYears, prefered) {
        super(name, surname, experienceOfYears);
        this.prefered = prefered;
        this.salary = this.calculateSalary();
    }
    calculateSalary() {
        return this.experienceOfYears * 500;
    }
    getDetails() {
        return `My name is ${this.name} ${this.surname}, I am a Project Manager with ${this.experienceOfYears} years of expireance in ${this.prefered} and salary ${this.salary} dollars .`;
    }
}
class Developer extends Employee {
    constructor(name, surname, experienceOfYears, programmingLanguage) {
        super(name, surname, experienceOfYears);
        this.programmingLanguage = programmingLanguage;
        this.salary = this.calculateSalary();
    }
    calculateSalary() {
        return this.experienceOfYears * 1000;
    }
    getDetails() {
        return `My name is ${this.name} ${this.surname}, I am a Developer with ${this.experienceOfYears} years of expireance in ${this.programmingLanguage} and salary ${this.salary} dollars .`;
    }
}
const dev = new Developer('Loh', 'Pidrovich', 4, 'TS');
console.log(dev.getDetails());
const manager = new Manager('Lohudra', 'Pidorovska', 10, 'Kanban');
console.log(manager.getDetails());
