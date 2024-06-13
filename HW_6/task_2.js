/*
Task 2. Перед вами структура компани, и ниже представлены задания, относящиеся к ней. 
В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!

Задания:
1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

**Пример:**

Предприятие 1 (45 сотрудников)
- Отдел тестирования (10 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Администрация (15 человек)
Предприятие 2 (75 сотрудников)
- Отдел разработки (50 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Отдел охраны труда (5 сотрудников)
Предприятие 3 (нет сотрудников)
- Отдел аналитики (нет сотрудников)

*/

const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

function sumEmployees(departments) {
    return departments.reduce(function(total, department) {
        return total + department.employees_count;
    }, 0);
}

function task1(obj) {
    obj.forEach(firm => {  
        const totalEmployees = sumEmployees(firm.departments);              
        console.log(`${firm.name} (${totalEmployees})`);
        firm.departments.forEach(department => {            
            console.log(`  ${department.name} (${department.employees_count})`);
        });
    });
}

task1(enterprises);



// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

function getEnterpriseName(id){
    let re = null
    enterprises.forEach(obj =>{
        if(obj.id === id){
            re = obj.name;            
        }
    });
    return re;
};

function getEnterpriseName1(departmenName){
    dep = null
    enterprises.forEach(obj => {
        obj.departments.forEach(department =>{
            if(department.name === departmenName){
                dep = obj.name;
                return;                
            }
        });
    });
    
    return dep
}

console.log(getEnterpriseName(1));
console.log(getEnterpriseName1("Отдел маркетинга"))

// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

function addEnterprise(nameEnterprise){
    let newObj = {name: nameEnterprise, id: enterprises.length +1, departments: []};
    enterprises.push(newObj)   
    return enterprises
}

console.log(addEnterprise('Предприятие Тест'))

// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

// Пример:
// addDepartment(1, "Название нового отдела")

function addDepartmentToEnterprise(id, nameDepartment){
    enterprises.forEach(obj => {        
            if(obj.id === id){
                let newDep = {name: nameDepartment, id: obj.departments.length-1, employees_count: 0};
                obj.departments.push(newDep);                             
            }
        });
    return enterprises
};       


console.log(addDepartmentToEnterprise(4, 'Автотестеры'))

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")

function editEnterprise(id, newFirmName){
    enterprises.forEach(obj =>{
        if(obj.id === id){
            obj.name = newFirmName;
        }
    });
    return enterprises
};

console.log(editEnterprise(4, "Предприятие 4"))


// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")

function editDepartment(id, newDepartment){
    enterprises.forEach(obj =>{
        if(obj.id === id){
            obj.departments.name = newDepartment;             
        };
    });
    return enterprises
};

console.log(editDepartment(4, "AQA"))

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)

function deleteEnterprise(id){
    enterprises.forEach(obj =>{
        if(obj.id === id){
            const index = enterprises.indexOf(obj)
            enterprises.splice(index, 1)
        }
    });
    return enterprises
};

console.log(deleteEnterprise(4))


// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)

function deleteDeparment(idOfDep) {
    enterprises.forEach(obj => {
        obj.departments.forEach(department => {
            if (department.id === idOfDep && department.employees_count === 0) {                
                // delete obj.departments;
                const index = enterprises.indexOf(department);
                obj.departments.splice(index, 1)
            }            
        });
    });
    return enterprises;
};

console.log(deleteDeparment(10))

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. 
//В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)

function moveEmployees(idMoveFrom, idMoveTo){
    let objDepMoveFrom;    
    enterprises.forEach(obj => {
        obj.departments.forEach(department => {
            if(department.id === idMoveTo){
                objDepMoveFrom = department;                
                obj.departments.splice(enterprises.indexOf(department), 1)
            }   
        });         
    });
    enterprises.forEach(obj => {
        if (obj.departments) { 
            obj.departments.forEach(department => {
                if(department.id === idMoveFrom){
                    obj.departments.push(objDepMoveFrom);
                }
            });
        }
    });
    return enterprises
}

console.log(moveEmployees(2, 6));
