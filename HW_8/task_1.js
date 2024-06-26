// //1. создать таймаут

setTimeout(()=> {console.log('After 2 seconds')}, 2000)

// 2. создать Промис ресолве + finally

const promise = new Promise((resolve, reject)=> resolve('Success!'));
promise
    .then((message)=>console.log(message))
    .finally(()=> console.log('Finally'));

// 3. создать Промис реджект + finally

const p = new Promise((resolve, reject) => reject('Error!'));
p
    .catch((message)=>console.log(message))
    .finally(()=> console.log('Finally'));

// 5. создать функцию которая принимает промис

async function resolvePromise(promise){
    try{
        const result = await promise;
        console.log(result);
    }catch (error){
        console.log(`Failed due to ${error}`);
    }finally {
        console.log("Finished working with promise");
    }
};

resolvePromise(promise)
resolvePromise(p)

