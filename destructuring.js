// Array destructuring

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let [a, b, c] = alphabet;
console.log(a, b, c); // A B C

let [,,,d] = alphabet;
console.log(d); // D

let [,,,,...rest] = alphabet;
console.log(rest);  // [ 'E', 'F', 'G', 'H' ]

rest.forEach((elem) => console.log(elem));
// E
// F
// G
// H 

// working with array this syntax is same as alphabet.concat(numbers)
// but this works both for arrays & objects
const newArray = [...alphabet, ...numbers];
console.log(newArray); 
// ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 1, 2, 3, 4, 5, 6, 7, 8, 9]

const newArrayStr = [...alphabet, ...numbers.map((elem) => elem.toString())];
console.log(newArrayStr); 
// ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const sunAndMultiply = (a, b) => [a+b, a*b];
[sum, multiply] = sunAndMultiply(2, 4);

console.log(sum, multiply); // 6 8


// -----------------------------------------------------------------------


// Object destructuring

const personOne = {
    name: 'Anik',
    age: 30,
    address: {
        city: 'Kolkata',
        state: 'West Bengal'
    }
};

const personTwo = {
    name: 'Raghav',
    age: 22,
    address: {
        city: 'Mumbai',
        state: 'Maharashtra'
    }
};

const {name : firstname, age} = personTwo;

console.log(firstname); // Raghav
console.log(age); // 22

const {name, address: {city}} = personOne;

console.log(name); // Anik
console.log(city); // Kolkata

const {name : first_name, ...spread} = personOne;

console.log(first_name); // Anik
console.log(spread); // { age: 30, address: { city: 'Kolkata', state: 'West Bengal' } }

let printUser = ({name, age}) => `Name is ${name} and age is ${age}`;

console.log(printUser(personOne)); // Name is Anik and age is 30
console.log(printUser(personTwo)); // Name is Raghav and age is 22


// example combining and overiding object values with same property

const firstPerson = {
    name: 'Anik',
    age: 30,
    address: {
        city: 'Kolkata',
        state: 'West Bengal'
    }
};

const secondPerson = {
    age: 22,
    status: 'single'
};

const thirdPerson = {...firstPerson, ...secondPerson};
console.log(thirdPerson);
// {
//   name: 'Anik',
//   age: 22,
//   address: { city: 'Kolkata', state: 'West Bengal' },
//   status: 'single'
// }