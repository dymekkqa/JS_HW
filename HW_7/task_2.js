//task 1

const counter = (n) => {
    let start = 1;
    return () => {        
        if (start <= n){
            console.log(start++);
        }
        else{
            console.log('All number were received')
        }
  };
};

const myCounter = counter(5);

myCounter();
myCounter();
myCounter();
myCounter();
myCounter();
myCounter();

// task 2

