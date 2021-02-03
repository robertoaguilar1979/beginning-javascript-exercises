    // using a for of loop to reverse a string

    let reverseString = function (string) {

        let reversedString = "";

        for (let char of string) {
            reversedString = char + reversedString;
        }
        return reversedString;


    }

    console.log(reverseString("robert"));


    // this is an easier way to reverse a string

    /*
let reverseString = function(name){
    return name.split("").reverse().join("");
}

console.log(`this function reverses a string ${reverseString("robert")}`);

    */