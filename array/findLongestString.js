//print out 1 occuring longest string

let numbers = ["robert1", "robert2", "nami", "angel", "karen", "zooozooo1", "one", "zooozooo2"];

let sumArray = number => {

    //sorts array from longest to shortest string
    let sortedNumbers = number.sort(function (a, b) {
        return b.length - a.length;
    });

    //prints out sorted array
    console.log(sortedNumbers);

    let sortedNewArray = [...sortedNumbers];

    //returns first occuring longest string
    return sortedNewArray[0];

}

console.log(sumArray(numbers));