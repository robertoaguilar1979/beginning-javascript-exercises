let numbers = [7, 3, 10, 7, 3];

// using a triditional waw loop to find sum of array

let addNumbers = function(numbers){
let sumNumbers = 0;

for(let i =0; numbers.length > i; i++) {

    sumNumbers += numbers[i];
}
return sumNumbers;
}

console.log(addNumbers(numbers));


//another way to do sum of array using for `of loop

// let addNumbers = function(numbers){
// let sumNumbers = 0;

// for(let number of numbers) {

//     sumNumbers += number;

// }
// return sumNumbers;

// }

// console.log(addNumbers(numbers));