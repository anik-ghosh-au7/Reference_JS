// Arrow functions will give NaN as this won't work here


// // 1 (Normal function)
// var obj = {num: 2};

// function addToThis(a, b) {
//     return this.num + a + b;
// };

// // call method
// console.log(addToThis.call(obj, 2, 3));

// // apply method
// var arg = [2, 3];
// console.log(addToThis.apply(obj, arg));

// // bind method
// var bound = addToThis.bind(obj);
// console.log(bound(2, 3));

// -------------------------------------------------------------------

// 2 (function expression)
var obj = {num: 2};

var addToThis = function(a, b) {
    return this.num + a + b;
};

// call method
console.log(addToThis.call(obj, 2, 3));

// apply method
var arg = [2, 3];
console.log(addToThis.apply(obj, arg));

// bind method
var bound = addToThis.bind(obj);
console.log(bound(2, 3));


