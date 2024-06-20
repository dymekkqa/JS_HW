const ItSpecialist = require('./itSpecialist');

class Manager extends ItSpecialist {
    constructor(name, grade, experienceInYears, age, country, salary, isScrumMaster) {
        super(name, grade, experienceInYears, age, country, salary);
        this.isScrumMaster = isScrumMaster;
    }
    getSpecialization() {
        return 'Manager';
    }
}

module.exports = Manager;
