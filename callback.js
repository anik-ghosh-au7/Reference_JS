// without callback

// let calc = function(num1, num2, calcType){
//     if (calcType === 'add'){
//         return num1 + num2;
//     } else if (calcType === 'multiply'){
//         return num1 * num2;
//     }
// };


// without callback

let calc = (num1, num2, calcType) => {
    if (calcType === 'add'){
        return num1 + num2;
    } else if (calcType === 'multiply'){
        return num1 * num2;
    }
};

console.log(calc(2, 3, 'add'));
console.log(calc(2, 3, 'multiply'));


// with callback

let add = (num1, num2) => num1 + num2;
let multiply = (num1, num2) => num1 * num2;

let cal_C = (num1, num2, callback) => callback(num1, num2);

console.log(cal_C(2, 3, add));
console.log(cal_C(2, 3, multiply));


// using above cal_C function for division using a callback method

console.log(cal_C(5, 6, (num1, num2) => num1 / num2));


// using callback method to sort objects using .sort()

var myArr = [{
    num: 3,
    str: 'apple'
}, {
    num: 1,
    str: 'orange'
}, {
    num: 5,
    str: 'banana'
}];

// sorting myArr according to obj.str in descending order
myArr.sort((val1, val2) => {
    if (val1.str > val2.str){
        return -1;
    } else {
        return 1;
    }
});

console.log(myArr);