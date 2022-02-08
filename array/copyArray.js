// best ways to copy an array and merge arrays.

let numbers = [1, 2, 3, 4, 5];
let numbers2 = [6, 7, 8, 9, 10];

//copy arrays
let newNumbers = numbers.slice();
let newNumbers2 = [...numbers];

//merge arrays
let newNumbersMerge = numbers.concat(numbers2);
let newNumbersMerge2 = [...numbers, ...numbers2];

//print out arrays
console.log(newNumbers);
console.log(newNumbers2);

console.log(`merge arrays ${newNumbersMerge}`);
console.log(`merge arrays2 ${newNumbersMerge2}`);
