// 1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee

interface IEmployee {name: string, salary: number, isManager: boolean };
const QA: IEmployee = {
    name: 'Loh',
    salary: 1,
    isManager: false
};

// 2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)

type TEmployeeKeys = keyof IEmployee;

// 3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)

type TQaKeys = keyof typeof QA;

// 4. Создайте тип UserType из объекта QA (используйте typeof)

type TUserType = typeof QA;

// 5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными

type partialIEmployee = Partial<IEmployee>;

// 6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee

type requiredKeysFromIEmployee = Pick<IEmployee, 'name' | 'salary'>;

// 7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager

type employeeWithoutIsManagerKey = Omit<IEmployee, 'isManager'>;

// 8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)

type readonlyIEmployee = Readonly<IEmployee>;

// 9. Создайте тип, для массива объектов, где в ключах могут быть строки, в значениях number, string или boolean

type TObject = Record<string, number | string | boolean>;
type TArrayOfObject = TObject[]







