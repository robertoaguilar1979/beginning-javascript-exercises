// this loop only prints the even numbers in an array.

let myString = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let newArray = myString.map(function (value, index) {
    if (value % 2 === 0) {
        console.log(value)
    }
})