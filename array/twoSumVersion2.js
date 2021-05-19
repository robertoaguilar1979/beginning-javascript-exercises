//this version uses the hash table to find the sum of two that equal  a target number.

let numbers = [1, 5, 10, 15, 9];
let target = 10;
let twoSum = function (array, target) {
    let hash = {};
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        let potentialMatch = target - num;
        if (potentialMatch in hash) {
            return [hash[potentialMatch], i];
        } else {
            hash[num] = i;
        }
        console.log(Object.entries(hash));
    }

}

console.log(twoSum(numbers, target));