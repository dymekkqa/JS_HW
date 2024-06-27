const ItSpecialist = require('./itSpecialist');

class Developer extends ItSpecialist {
    constructor(name, grade, experience_in_years, age, country, salary, isWritingUnitTests) {
        super(name, grade, experience_in_years, age, country, salary);
        this.isWritingUnitTests = isWritingUnitTests;
    }
    getSpecialization() {
        return 'Developer';
    }
}

module.exports = Developer;