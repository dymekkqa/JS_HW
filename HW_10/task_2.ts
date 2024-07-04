type TCallback<T, U> = (currentValue: T, index: number, arr: T[]) => U

function map<T, U>(arr: T[], callback: TCallback<T, U>): U[] {
    const result = arr.map(function(currentValue, index) {
        return callback(currentValue, index, arr);
    })
    return result
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = map(numbers, (num, index) => num * index);
console.log(doubledNumbers)



function generateObject<T>(arr: [string, T][]): {[key: string]: T}{
    const obj : {[key: string]: T} = {}
    for (let i = 0; i < arr.length; i++){
        const [key, value] = arr[i];
        obj[key] = value;
    }
    return obj;
}
const result = generateObject([['1', 1],['2', 3], ['2', 2]]);
const result1 = generateObject([['true', true],['false', false]]);
const result2 = generateObject([['a', 'a'],['b', 'b'], ['b', 'c']]);
console.log(result)
console.log(result1)
console.log(result2)
