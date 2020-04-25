// example 1

let volumeOfBox = (obj) => obj.width * obj.length * obj.height;

console.log(volumeOfBox({ width: 2, length: 5, height: 1 }));   //  10
console.log(volumeOfBox({ width: 4, length: 2, height: 2 }));   //  16
console.log(volumeOfBox({ width: 2, length: 3, height: 5 }));   //  30

// 2

let check = (arr, num) => arr.indexOf(num) !== -1 ? true : false;

console.log(check([1, 2, 3, 4, 5], 3)); //  true
console.log(check([1, 1, 2, 1, 1], 3)); //  false
console.log(check([5, 5, 5, 6], 5));    //  true
console.log(check([], 5));  //  false

//3

let findIndex = (arr, str) => arr.indexOf(str);


console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));  //  2
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));   //  1
console.log(findIndex(["a", "g", "y", "d"], "d"));  //  3
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); //  0

// 4

let concat = (arr1, arr2) => arr1.concat(arr2);

console.log(concat([1, 3, 5], [2, 6, 8]));  //  [1, 3, 5, 2, 6, 8]
console.log(concat([7, 8], [10, 9, 1, 1, 2]));  // [7, 8, 10, 9, 1, 1, 2]
console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));    //  [4, 5, 1, 3, 3, 3, 3, 3]

// 5

et findVowels = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'],
        count = 0;
    for (let i = 0; i < str.length; i++){
        if (vowels.indexOf(str[i]) !== -1)
            count++;
    }
    return count;
}

console.log(findVowels('hello'));   //  2
console.log(findVowels('why'));     //  0

// 6

var anagram = (str1, str2) => str1.toLowerCase().replace(/[^a-z\d]/g,'').split('').sort().join('') === str2.toLowerCase().replace(/[^a-z\d]/g,'').split('').sort().join('');

console.log(anagram('finder', 'Friend'));   // true
console.log(anagram('hello', 'bye'));   // false

// 7

let fizzBuzz = (num) => {
    for (let i = 1; i <= num; i++){
        if (i % 3 === 0 && i % 5 === 0)
            console.log('fizzbuzz');
        else if (i % 5 === 0)
            console.log('buzz');
        else if (i % 3 === 0)
            console.log('fizz');
        else
        console.log(i);
    }
}

console.log(fizzBuzz(20));

// 8

et addition = (num) => num++;

console.log(addition(0));   //  1
console.log(addition(9));   //  10
console.log(addition(-3));  //  -2

// 9

let addition = (num1, num2) => num1 + num2;

console.log(addition(3, 2));    //  5
console.log(addition(-3, -6));  //  -9
console.log(addition(7, 3));    //  10

// 10

let convert = (min) => min * 60;

console.log(convert(5));    //  300
console.log(convert(3));    //  180
console.log(convert(2));    //  120

// 11

let getIndexToIns = (arr, num) => arr.sort((a, b) => a - b).filter((elem) => elem < num).length;

console.log(getIndexToIns([1, 2, 3, 4], 1.5));  //  1
console.log(getIndexToIns([20, 3, 5], 19));     //  2

// 12

let keysAndValues = (obj) => [Object.keys(obj).map((key) => key), Object.keys(obj).map((key) => obj[key])];


console.log(keysAndValues({ a: 1, b: 2, c: 3 }));   //  [ [ 'a', 'b', 'c' ], [ 1, 2, 3 ] ]
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));    //  [ [ 'a', 'b', 'c' ], [ 'Apple', 'Microsoft', 'Google' ] ]
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));   //  [ [ 'key1', 'key2', 'key3' ], [ true, false, undefined ] ]

// 13

let arrayOfMultiples = (num, length) => {
    let result = [];
    for (let i = 1; i <= length; i++){
        result.push(num * i);
    }
    return result;
}

console.log(arrayOfMultiples(7, 5));    //  [ 7, 14, 21, 28, 35 ]
console.log(arrayOfMultiples(12, 10));  //  [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples(17, 6));   //  [17, 34, 51, 68, 85, 102]

// 14

let filterUnique = (arr) => arr.filter((elem) => new Set(elem).size === elem.length);

console.log(filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]));   //  [ 'abc' ]
console.log(filterUnique(["88", "999", "989", "9988", "9898"]));    //  []
console.log(filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]));  //  [ 'ABCDE', 'BED', 'BAC' ]

// 15

let match = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();

console.log(match("hello", "hELLo"));   //  true
console.log(match("motive", "emotive"));    //  false
console.log(match("venom", "VENOM"));   //  true
console.log(match("mask", "mAskinG"));  //  false

// 16

let helloWorld = (num) => num % 15 === 0 ? 'Hello World' : num % 5 === 0 ? 'World' : num % 3 === 0 ? 'Hello' : '';

console.log(helloWorld(3)); //  Hello
console.log(helloWorld(5)); //  World
console.log(helloWorld(15));    //  Hello World

// 17

let equalSlices = (total_slices, no_recipients, slices_each) => (no_recipients * slices_each) <= total_slices;

console.log(equalSlices(11, 5, 2)); //  true
console.log(equalSlices(11, 5, 3)); //  false
console.log(equalSlices(8, 3, 2));  //  true
console.log(equalSlices(8, 3, 3));  //  false
console.log(equalSlices(24, 12, 2));    //  true

// 18

let moodToday = (str = 'neutral') => `Today, I am feeling ${str}`;

console.log(moodToday("happy"));    //  Today, I am feeling happy
console.log(moodToday("sad"));  //  Today, I am feeling sad
console.log(moodToday());   //  Today, I am feeling neutral

// 19

let numArgs = (...args) => args.length;

console.log(numArgs()); //  0
console.log(numArgs("foo"));    //  1
console.log(numArgs("foo", "bar")); //  2
console.log(numArgs(true, false));  //  2
console.log(numArgs({}));   //  1

// 20

var anagram = (str1, str2) => str1.toLowerCase().replace(/[^a-z\d]/g,'').split('').sort().join('') === str2.toLowerCase().replace(/[^a-z\d]/g,'').split('').sort().join('');

console.log(anagram('Mary', 'Army'));   // True
console.log(anagram('Anik', 'Avik'));   // False

// 21

var removeDuplicates = (arr) => [...new Set(arr)];

console.log(removeDuplicates([1,2,3,4,3,2,1])); // [ 1, 2, 3, 4 ]

// 22

var fibonnaci = (num) => {
    var result = [];
    result[0] = 0;
    result[1] = 1;
    if (num > 2){
        for (let i = 2; i <= num; i++){
            result[i] = result[i-1] + result[i-2];
        }
    }
    return result[num];
}

console.log(fibonnaci(5)); // 5
console.log(fibonnaci(6)); // 8

// 23

var stack1 = [];
var stack2 = [];

var enqueue = (elem) => {
    stack1.push(elem);
}

var dequeue = () => {
    if (stack2.length === 0){
        if (stack1.length === 0){
            console.log('Queue is empty!!!')
        }
            while (stack1.length > 0) {
                stack2.push(stack1.pop());
              }
    }
    return stack2.pop();
}


enqueue(1);
enqueue(2);
enqueue(3);
console.log(dequeue()); // 1
console.log(dequeue()); // 2
enqueue(4);
enqueue(5);
console.log(dequeue()); // 3
console.log(dequeue()); // 4

// 24

function evenFunction(num){
    if (num % 2 == 0){
        console.log(`${num} is a even number`);
        return;
    }
    console.log(`${num} is not a even number`);
}

function oddFunction(num){
    if (num % 2 != 0){
        console.log(`${num} is a odd number`);
        return;
    }
    console.log(`${num} is not a odd number`);
}

function squareFunction(num){
    for (let i =0; i*i <= num; i++){
        if (num % i ==0 && num/i == i){
            console.log(`${num} is a square number`);
            return;
        }
    }
    console.log(`${num} is not a square number`);
}

evenFunction(6);
oddFunction(6);
squareFunction(6);

evenFunction(9);
oddFunction(9);
squareFunction(9);

// 25

function pattern(num){
    for (let i =1; i<=num; i++){
        console.log("*".repeat(i));
    }
    for (let i =num-1; i>0; i--){
        console.log("*".repeat(i));
    }
}

pattern(5);

// 26

function multiplication_table(num){
    for (let i=1; i<11; i++){
        console.log("{0} * {1} = {2}".replace('{0}', i).replace('{1}', num).replace('{2}', (i*num)));
    }
}

multiplication_table(5);

// 27

function find_number(arr, num){
    for (let i in arr){
        if (arr[i] == num){
            return "{0} is present in the {1}th position of the array".replace('{0}', num).replace('{1}', (parseInt(i)+1));
        }
    }
    return -1;
}

console.log(find_number([3, 8, 7, 6, -4,  2, 1, 5], 2));
console.log(find_number([3, 8, 7, 6, -4,  2, 1, 5], 9));

// 28

let myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.join());
console.log(myColor.join('+'));

// 29

function palindrome(str){
    const regex = /[\W]/g;
    let lowerCase = str.toLowerCase().replace(regex, '');
    var reverseStr = lowerCase.split('').reverse().join('');

    if(lowerCase === reverseStr){
        return true;
    }
    return false;
}

console.log(palindrome('eye'));
console.log(palindrome('eyes'));

// 30 

var start = 100;
var end = 0;
function evenNumber(start, end) {
    while (start > end) {
        if (start % 2 == 0){
            console.log(start);
        }
        start--;
    }
}
evenNumber(start, end)