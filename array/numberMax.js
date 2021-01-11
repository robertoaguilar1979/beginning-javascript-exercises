/*using a traditional for loop to find the maximum number in an array.
*/


let numbers = [5, 10, 999, 0, -5];

let numberMax = function(number){
    let maxNumber = -Infinity;

    for(let i = 0; number.length > i; i++) {

        if(number[i] > maxNumber){
            maxNumber = number[i]
        }
    }
    return maxNumber;

}



console.log(numberMax(numbers));

// this is an easier way to find the maximum number of an array

/*
let numbers = [0, 5, 10, 999, 987];

let maxNumber = function(numbers){
    let max = Math.max(...numbers);
    return max;
}

console.log(maxNumber(numbers));
*/