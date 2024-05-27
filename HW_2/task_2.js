const minAge = 18;
const maxAge = 60;
const ages = [10, '10', 17, 18, 19, 59, 60, 61]

for (let age of ages){
    age = Number(age);
    switch (true){
        case age < minAge : {
            console.log('You dont have access cause your age is ' + age +'. Its less then ' + minAge);
            break;
        }
        case age > maxAge:{
            console.log('Keep calm and look Culture channel');
            break;
        }
        case age >= minAge && age <= maxAge:{
            console.log('Welcome!');
            break;
        }
        default: {
            console.log('Technical work');
            break;
        }
    }
}
