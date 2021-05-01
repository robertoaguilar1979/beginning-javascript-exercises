/*using a traditional for loop to find the minimum number in an array.
 */

let numbers = [5, 10, 999, 0, -5, -10, -100];

let numberMin = function (number) {
    let min = Infinity;

    for (let i = 0; i < number.length; i++) {
        if (number[i] < min) {
            min = number[i];
        }
    }
    return min;
}

console.log(numberMin(numbers));


// this is an easier way to find the minimum number of an array.

/*
let numbers = [0, 5, 10, 999, 987];

let maxNumber = function(numbers){
    let min = Math.min(...numbers);
    return min;
}

console.log(maxNumber(numbers));
*/