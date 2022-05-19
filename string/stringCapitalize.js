//capitalize first letter of each word in this sentence.

let string = "robert arciniega aguilar";

let makeArray = function (string) {

    let array = string.split(" ");
    return capitalizeString(array);
}

let capitalizeString = function (array) {
    let newArray = []
    for (const string of array) {
        newArray.push(string[0].toUpperCase() + string.slice(1));

    }

    return newArray.join(" ")
}

console.log(makeArray(string));