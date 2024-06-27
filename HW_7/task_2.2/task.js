class Task {
    constructor(featureName, userStoryNumber, estimations) {
        this.featureName = featureName;
        this.userStoryNumber = userStoryNumber;
        this.estimations = estimations;
    }
    updateTask(newData) {
        this.featureName = newData.featureName || 'Forget to provide a name';
	    this.userStoryNumber = newData.userStoryNumber || -1;
	    this.estimations = newData.estimations || 'Forget to estimate';
    }
}
module.exports = Task;