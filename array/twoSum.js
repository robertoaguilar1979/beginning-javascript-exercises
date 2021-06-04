//two sum find two numbers that add to the target number. 
// the number can only be used once 

let numbers = [1, 5, 9];
let target = 10;

let sumNumbers = function (numbers, target) {
    for (let i = 0; i < numbers.length - 1; i++) {
        let firstNumber = numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            let secondNumber = numbers[j];
            if (firstNumber + secondNumber === target) {
                return `index:${[i]} with value:${firstNumber} and index:${[j]} with value:${secondNumber} equals:${target}`;
            }
        }
    }
}

console.log(sumNumbers(numbers, target));