class ItSpecialist {
    constructor(name, grade, experienceInYears, age, country, salary) {
        this.name = name;
        this.grade = grade;
        this.experienceInYears = experienceInYears;
        this.age = age;
        this.country = country;
        this._salary = salary;
    }

    getSalary() {
        return this._salary;
    }

    getCountry() {
        return this.country;
    }

    setCountry(country) {
        this.country = country;
    }

    getAllInfo() {
        return `Name: ${this.name}, Grade: ${this.grade}, Experience: ${this.experienceInYears} years, Age: ${this.age}, Country: ${this.country}, Salary: ${this._salary}`;
    }

    getSpecialization() {
        return 'ITSpecialist';
    }
}

module.exports = ItSpecialist;
