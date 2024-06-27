
// 1
function delay(callback, milliseconds) {
  setTimeout(callback, milliseconds);
}

delay(() => console.log('hello'), 2000);


// 2
const promise1 = new Promise((resolve, reject) => {setTimeout(()=> {resolve('After 3 seconds')}, 3000)});
const promise2 = new Promise((resolve, reject) => {setTimeout(()=> {resolve('After 5 seconds')}, 5000)});

Promise.all([promise1, promise2]).then((values) => console.log(values));

//2.1
async function resolvePromise(){
    try{
        const [resultPromise1, resultPromise2] = await Promise.all([promise1, promise2]);
        console.log(resultPromise1);
        console.log(resultPromise2); 
    }catch (error){
        console.log(error);
    }finally{
        console.log("Finished working with promise")
    }
    
};
resolvePromise()

// 4

async function getTasks1() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseJson = await response.json();
      const result = responseJson.filter(obj => obj.id === 1);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  
getTasks1();

function getTasks2() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(json => {
        const filteredTasks = json.filter(obj => obj.id === 1);
        console.log(filteredTasks);
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  getTasks2();
  

  


