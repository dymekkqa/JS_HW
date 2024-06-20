class Team {
    constructor(name, sprintDuration, releaseDate, dailyStandupTime) {
        this.name = name;
        this.sprintDuration = sprintDuration;
        this.releaseDate = releaseDate;
        this.dailyStandupTime = dailyStandupTime;
        this.teamMates = [];
        this.tasks = new Set();
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getSprintDuration() {
        return this.sprintDuration;
    }

    setSprintDuration(sprintDuration) {
        this.sprintDuration = sprintDuration;
    }

    getReleaseDate() {
        return this.releaseDate;
    }

    setReleaseDate(releaseDate) {
        this.releaseDate = releaseDate;
    }

    getDailyStandupTime() {
        return this.dailyStandupTime;
    }

    setDailyStandupTime(dailyStandupTime) {
        this.dailyStandupTime = dailyStandupTime;
    }

    getNumberOfTeamMates() {
        return this.teamMates.length;
    }

    addTeamMate(teamMate) {
        this.teamMates.push(teamMate);
    }

    removeTeamMate(teamMate) {
        this.teamMates = this.teamMates.filter(spec => spec.getSpecialization() !== teamMate);
    }

    editTeamMate(index, teamMate) {
        if (index >= 0 && index < this.teamMates.length) {
            this.teamMates[index] = teamMate;
        }
    }

    showAllTeamMates() {
        return this.teamMates;
    }

    showTeamMatesBySpecialization(specialization) {
        return this.teamMates.filter(spec => spec.getSpecialization() === specialization);
    }

    showAllTasks() {
        return Array.from(this.tasks);
    }

    addTask(task) {
        this.tasks.add(task);
    }

    removeTask(task) {
        this.tasks.delete(task);
    }

    editTask(oldTask, newTaskData) {        
        const taskToUpdate = Array.from(this.tasks).find(task => task.featureName === oldTask.featureName);

        if (taskToUpdate) {            
            taskToUpdate.featureName = newTaskData.featureName;
            taskToUpdate.estimations = newTaskData.estimations;
            taskToUpdate.userStoryNumber = newTaskData.userStoryNumber;
            return true;
        }       
    }
    
}

module.exports = Team;
