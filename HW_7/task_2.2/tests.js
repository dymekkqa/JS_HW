const Team = require('./team');
const Manager = require('./manager');
const QA = require('./qa');
const Developer = require('./developer');
const Task = require('./task');

// Создать команду
const myTeam = new Team('Awesome Team', 2, '2024-12-01', '10:00 AM');

// Добавить участников команды
myTeam.addTeamMate(new Manager('Alice', 'Senior', 10, 35, 'USA', 90000, true));

myTeam.addTeamMate(new QA('Bob', 'Middle', 5, 30, 'Poland', 60000, true));
myTeam.addTeamMate(new Developer('Charlie', 'Junior', 2, 25, 'Germany', 50000, true));

// Добавить задачи
myTeam.addTask(new Task('Implement Login', 101, '5 days'));
myTeam.addTask(new Task('Setup CI/CD', 102, '3 days'));

// Вывод информации о учатниках
console.log(myTeam.showAllTeamMates());
console.log(myTeam.showTeamMatesBySpecialization('Developer'));


// Редактирование тасков
myTeam.editTask(new Task('Implement Login', 101, '5 days'), new Task('Implement Register', 10, '5 days'));
console.log(myTeam.showAllTasks());

// Редактированиe и удалениe участника команды
myTeam.editTeamMate(0, new Manager('Alice', 'Senior', 11, 36, 'USA', 95000, true));
myTeam.removeTeamMate('Developer');

console.log(myTeam.showAllTeamMates());
