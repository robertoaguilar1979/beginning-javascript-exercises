//this version uses the new Map() object

let numbers = [1, 5, 10, 15, 9];
let target = 10;
let twoSum = function (array, target) {
    let hash = new Map();
    const iterator1 = hash.entries();
    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        let difference = target - current;
        if (hash.has(difference)) {
            return [hash.get(difference), i]
        } else {
            hash.set(current, i);

        }
        //this checks to see what numbers are being stored in the hash
       // console.log(iterator1.next().value);
    }


}
//this prints out the two index of the numbers we are looking for
console.log(twoSum(numbers, target));