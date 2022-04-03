let numbers = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 9, 10, 10];

let findDuplicates = function (array) {
    let compare = [];
    let duplicates = [];

    for (let number of array) {
        if (!compare.includes(number)) {
            compare.push(number)
        } else {
            duplicates.push(number);
        }
    }

    return duplicates;



}


console.log(findDuplicates(numbers));