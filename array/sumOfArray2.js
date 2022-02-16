let numbers = [1, 2, 3, 4, 5];


let sumArray = function (array) {
    return array.reduce((sum, number) => {
        return (sum += number);
    }, 0);
};

console.log(sumArray(numbers));