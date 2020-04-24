

// input
// 6 8 4 9 2 3 7

// output
// 2 3 4 6 7 8 9

// explanation
// [6 8 4 9 2 3 7]    input
// [6 8 4]   -   [9 2 3 7]    splitting in stage - 1
// [6]    =    [8 4]    -    [9 2]    =    [3 7]    splitting in stage - 2
// [6]  = [8]  . [4]    -    [9]  . [2]  = [3]  . [7]    splitting in stage - 3
// [6]  = [4 8]  - [2 9]  = [3 7]    rearranging, merging result of stage -3 for stage - 2
// [4 6 8]-[2 3 7 9]    rearranging, merging result of stage -2 for stage - 1
// [2 3 4 6 7 8 9]    output


// merge sort
function merge_sort(lis){
    // base condition
    if (lis.length <= 1)
        return lis;
    // calculating the mid index
    let mid = parseInt(lis.length / 2);
    // dividing the list in two parts & recursively calling merge_sort function on both of them
    let list_1 = merge_sort(lis.slice(0, mid));
    let list_2 = merge_sort(lis.slice(mid, lis.length));
    // calling merge function on the sub lists and returning the result to the previous stage
    return merge(list_1, list_2);
}


// merging function
function merge(list_1, list_2){
    let result = [];
    let i = 0;
    let j = 0;
    // this loop will run till the ith el or the jth el is the last element of their respective lists
    while (i < list_1.length && j < list_2.length){
        // condition to check the ith el of ls1 with jth el ls2 and append the smaller to result
        if (list_1[i] <= list_2[j]){
            result.push(list_1[i]);
            i++;
        }
        else{
            result.push(list_2[j]);
            j++;
        }
    }
    // will add the left over elements of either list
    result = result.concat(list_1.slice(i));
    result = result.concat(list_2.slice(j));
    // returning the result list to the merge_sort function
    return result;
}

console.log(merge_sort([6, 8, 4, 9, 2, 3, 7]));
