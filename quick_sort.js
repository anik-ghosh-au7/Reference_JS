// input
// [4, 6, 9, 8, 2, 3, 7]

// output
// [2, 3, 4, 6, 7, 8, 9]

// explanation
// [4, 6, 9, 8, 2, 3, 7]     input
// [2, 3] - [4] - [6, 9, 8, 7]       stage 1
// [] = [2] = [3] - [4] - [] = [6] = [9, 8, 7]       stage 2
// [] = [2] = [3] - [4] - [] = [6] = [8, 7] . [9] . []        stage 3
// [] = [2] = [3] - [4] - [] = [6] = [7] # [8] # [] . [9] . []       stage 4
// [] = [2] = [3] - [4] - [] = [6] = [7, 8] . [9] . []       concatenation result of stage 4 for stage 3
// [] = [2] = [3] - [4] - [] = [6] = [7, 8, 9]       concatenation result of stage 3 for stage 2
// [2, 3] - [4] - [6, 7, 8, 9]       concatenation result of stage 2 for stage 1
// [2, 3, 4, 6, 7, 8, 9]     output


let arr1 = [4, 6, 9, 8, 2, 3, 7];
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr.pop();
    let lower_elms = [];
    let higher_elms = [];
    for (let i of arr) {
        if (i <= pivot) {
            lower_elms.push(i);
        } else {
            higher_elms.push(i);
        }
    }
    return quickSort(lower_elms).concat(pivot, quickSort(higher_elms));
}
console.log(quickSort(arr1));