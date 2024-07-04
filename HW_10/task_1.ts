function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

console.log(getFirstElement<string>(['1', '2']))
console.log(getFirstElement<number>([1, 2]))

interface IPerson {
    name: string;
    surname: string;
    experienceOfYears: number;
    getDetails(): string;
}

abstract class Employee implements IPerson {
    protected salary = 0;
    constructor(
        public name: string,
        public surname: string,
        public experienceOfYears: number
    ) {};

    abstract getDetails(): string;
    protected abstract calculateSalary(): number;
}

type TMethodology = 'Scrum' | 'Kanban';

class Manager extends Employee{
    constructor(
        name: string,
        surname: string,
        experienceOfYears: number,
        public prefered: TMethodology
    ){
        super(name, surname, experienceOfYears)
        this.salary = this.calculateSalary()
    }
    protected calculateSalary(): number {
        return this.experienceOfYears * 500
    }
    getDetails(): string {
        return `My name is ${this.name} ${this.surname}, I am a Project Manager with ${this.experienceOfYears} years of expireance in ${this.prefered} and salary ${this.salary} dollars .`;
    }
}

type TProgrammingLanguages = 'JS' | 'Java' | 'TS' | 'Python'

class Developer extends Employee{
    constructor(
        name: string,
        surname: string,
        experienceOfYears: number,
        public programmingLanguage: TProgrammingLanguages
    ){
        super(name, surname, experienceOfYears)
        this.salary = this.calculateSalary()
    }
    protected calculateSalary(): number {
        return this.experienceOfYears * 1000
    }
    getDetails(): string {
        return `My name is ${this.name} ${this.surname}, I am a Developer with ${this.experienceOfYears} years of expireance in ${this.programmingLanguage} and salary ${this.salary} dollars .`;
    }
}

const dev = new Developer('Loh', 'Pidrovich', 4, 'TS')
console.log(dev.getDetails())
const manager = new Manager('Lohudra', 'Pidorovska', 10, 'Kanban')
console.log(manager.getDetails())
