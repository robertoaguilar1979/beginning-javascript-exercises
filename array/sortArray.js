//sort array using sort method to find min or max numbers

let numbers = [-4, -8, 0, 7,-44, 60, 100];

let sortedNumbers = numbers.sort((a,b) => a -b);

console.log(sortedNumbers);

// you can find max or min numbers using the slice after the numbers are sorted
let lastArrayIndex = sortedNumbers.slice(-1);
console.log(lastArrayIndex);
