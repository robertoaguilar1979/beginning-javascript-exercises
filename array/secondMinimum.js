//array of random numbers.
let numbers = [-9, 0, -999999, 25, -4];

// this is a function to sort an array of numbers to check if the answer is right.
let sortedNumbers = numbers.sort(function (a, b) {
    return a - b;
});

// this is the the function to return second lowest number in an array.
let secondMininum = function (numbers) {
    let minimum = Infinity;
    let secondMinimum = Infinity;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < minimum) {
            secondMininum = minimum;
            minimum = numbers[i];

        } else if (numbers[i] < secondMinimum) {
            secondMinimum = numbers[i];
        }

    }
    return secondMinimum;

}


console.log(sortedNumbers);
console.log(`second lowest number: ${secondMininum(numbers)}`);