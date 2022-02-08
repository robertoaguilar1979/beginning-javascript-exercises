//print out 1 occuring longest string

let numbers = ["robert1", "robert2", "nami", "angel", "karen", "zooozooo1", "one", "zooozooo2"];

let sumArray = number => {

    //sorts array from longest to shortest string
    let sortedNumbers = number.sort(function (a, b) {
        return b.length - a.length;
    });

<<<<<<< HEAD
    return sortedArray;
}
=======
    //prints out sorted array
    console.log(sortedNumbers);

    let sortedNewArray = [...sortedNumbers];
>>>>>>> a7029248c8aef8b0080179d341a4335ceffc1e2e

    //returns first occuring longest string
    return sortedNewArray[0];

}

console.log(sumArray(numbers));