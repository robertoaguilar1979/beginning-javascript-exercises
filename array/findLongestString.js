//print out 1 occuring longest string

let numbers = ["robert1", "robert2", "nami", "angel", "karen", "zooozooo1", "one", "zooozooo2"];

let sumArray = number => {

    //sorts array from longest to shortest string
    let sortedArrayString = number.sort(function (a, b) {
        return b.length - a.length;
    });

    //prints out sorted array
    console.log(sortedArrayString);

    

    //returns first occuring longest string
    return sortedArrayString[0];

}

console.log(sumArray(numbers));