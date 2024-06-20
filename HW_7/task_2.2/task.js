class Task {
    constructor(featureName, userStoryNumber, estimations) {
        this.featureName = featureName;
        this.userStoryNumber = userStoryNumber;
        this.estimations = estimations;
    }
    updateTask(newData) {
        if (newData.featureName) {
            this.featureName = newData.featureName;
        }
        if (newData.userStoryNumber) {
            this.userStoryNumber = newData.userStoryNumber;
        }
        if (newData.estimations) {
            this.estimations = newData.estimations;
        }
    }
}
module.exports = Task;