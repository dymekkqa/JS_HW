//task 1

const counter = (n) => {
    let numbers = Array.from({ length: n }, (_, i) => i + 1);    
    return () => {        
        if (numbers.length > 0){
            randomIndex = Math.floor(Math.random() * numbers.length);
            re = numbers[randomIndex];
            numbers.splice(randomIndex, 1)
            console.log(re);
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

