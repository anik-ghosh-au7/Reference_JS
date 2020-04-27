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



// sorting KEYS of an OBJECT according to VALUES

function inBetween(start_word,end_word,word){
    listSort = {
        start_word,
        end_word,
        word
    };
    // sorted_obj = Object.entries(listSort).sort((a, b) => a[1]>b[1]?1:-1);
    sorted_obj = Object.keys(listSort).sort((a, b) => listSort[a]>listSort[b]?1:-1);
    return sorted_obj[1] === 'word' ? true : false;
}


console.log(inBetween("bookend", "boolean", "boost"))
console.log(inBetween("monk", "monument", "monkey"))
console.log(inBetween("apple", "banana", "azure"))
