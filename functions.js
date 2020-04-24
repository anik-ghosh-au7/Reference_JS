//  for each (to get the value and index of each item in an array)

[1, 2, 3].forEach((item, index) => console.log(item, index));

//  map (to double each values of an array and store it in arr1)

let arr1 = [1, 2, 3].map((item) => item * 2);
console.log(arr1);

//  filter (to filter out the even elements of an array and store it in arr2)

let arr2 = [1, 2, 3].filter((item) => item % 2 === 0);
console.log(arr2);

//  reduce (to calculate the sum of all the elements of the array and store it in sum)

let sum = [1, 2, 3].reduce((result, item) => result + item, 0);
console.log(sum);

//  some (returns true if atleast one element of the array is negative else false)

let hasNegative = [1, -2, 3].some((item) => item < 0);
console.log(hasNegative);

//  every (returns true if every elements of the array is positive else false)

let allPositive = [1, -2, 3].every((item) => item > 0);
console.log(allPositive);

//  find (returns the object with id = 'a' from the array of objects)

let object = [{id: 'a'}, {id: 'b'}, {id: 'c'}].find((object) => object.id === 'a');
console.log(object);

//  findindex (returns the index of object with id = 'c' from the array of objects)

let object_index = [{id: 'a'}, {id: 'b'}, {id: 'c'}].findIndex((object) => object.id === 'c');
console.log(object_index);
