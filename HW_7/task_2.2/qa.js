const ItSpecialist = require('./itSpecialist');

class Qa extends ItSpecialist{
    constructor(name, grade, experience_in_years, age, country, salary, isAqa) {
        super(name, grade, experience_in_years, age, country, salary);
        this.isAqa = isAqa;
    }
    getSpecialization() {
        return 'Qa';
    }
}
module.exports = Qa;