//Sum All Numbers in a Range of an Array

let numbers = [1, 4];

let sumNumbers = function (number) {
    let sum = 0;
    let min = Math.min(...number);
    let max = Math.max(...number);

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumNumbers(numbers));