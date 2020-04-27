// Write a function that returns true if a word can be found in
// between the start and end word in a dictionary.

// Solution using array

arr = [1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3];
num = 56.8926

console.log(num.toString().substring(0, num.toString().indexOf('.')+3))


function inBetween(start_word,end_word,word){
    listSort = [start_word,end_word,word].sort()
    if(word === listSort[1]){
        return true
    }else{
        return false
    }
}

console.log(inBetween("bookend", "boolean", "boost"))
console.log(inBetween("monk", "monument", "monkey"))
console.log(inBetween("apple", "banana", "azure"))



// Solution using object
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
