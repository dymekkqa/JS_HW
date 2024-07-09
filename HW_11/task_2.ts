// Создайте дженерик класс Storage<T>, где T должен быть ограничен объектом, имеющим КАК МИНИМУМ {id: number}.
// Задача класса - хранить объекты типа Т в приватном массиве
// Реализуйте в классе следующие методы:
//   - constructor должен принимать необзятельный массив объектов соответствующего типа. done
//     Если массив пришел - объекты запушить в хранилище. done
//   - add, принимающий либо объект типа Т, либо объект типа Т без id. Метод должен быть реализовать с помощью ПЕРЕГРУЗКИ. done
//     Если на вход подан объект без айди - айди надо сгенерировать, затем запушить обьект в хранилище done
//     Если на вход подан объект с айди - запушить его в хранилище done
//     Для типизации используйте Utility Types done
//   - update, принимающий объект с айди и любым набором остальных ключей из типа Т. done
//   - remove, принимающий на вход id и удаляющий объект из массива
//   - getById(id), возвращающий объект по айди если найден done
//   - getAll(), возвращает все объекты в хранилище done


class TaskStorage<Type extends { id: number }> {
  private storage: Type[] = [];
  constructor(arr?: Type[]) {
    if (arr) {
      this.storage.push(...arr);
    }    
  } 
    add(obj: Omit<Type, 'id'>): void;
    add(obj: Type): void;
    add(obj: Type | Omit<Type, 'id'>): void {
        if ('id' in obj){
            this.storage.push(obj);
        }else{
            const newObj = { ...obj, id: this.generateId() } as Type;
            this.storage.push(newObj);
        }        
    }
    private generateId(): number {
        return this.storage.length > 0 ? Math.max(...this.storage.map(item => item.id)) + 1 : 1;
    }
    getAll(): Type[] {
        return this.storage;
    }    

    update(obj: Partial<Type> & {id: number}){
        const existObj = this.getById(obj.id);
        if (existObj){
            Object.assign(existObj, obj);
        }
    }
    remove(id:number){
        return this.storage.filter(o => o.id === id);
    }

    getById(id:number){
        return this.storage.find(o => o.id === id);
    }
};

interface IUser1 {
    id: number,
    name: string,
    age: number
}

interface IEmployee1 {
    id: number,
    name: string,
    salary: number
}

const user: IUser1 = {id: 1, name: 'Loh', age: 25};
const employee: IEmployee1 = {id: 1, name: 'Loh', salary: 25};



const userStorage = new TaskStorage<IUser1>([user])
const employeeStorage1 = new TaskStorage<IEmployee1>([employee])