const minAge = 18;
const maxAge = 60;
const ages1 = [10, 17, 18, 19, 59, 60, 61]
const ages2 = [17, 18, 61, 'aaa', '2']

function test(arr) {
    for (let age of arr){
        if (typeof age == 'number'){
            if (age < minAge)
                console.log('You dont have access cause your age is ' + age +'. Its less then ' + minAge)
            else if (age > maxAge)
                console.log('Keep calm and look Culture channel')
            else if (age >= minAge && age <= maxAge)
                console.log('Welcome!')
            else console.log('Technical work')
        }
        else console.log('Type of age is not a number');    
    }   
}

test(ages1);
test(ages2);