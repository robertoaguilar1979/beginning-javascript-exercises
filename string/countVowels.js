// this functions counts vowels in a string
let vowels = function (string) {
    let countVowels = 0;
    for (char of string) {
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            countVowels++;
        }
    }
    return countVowels;
}

let name = "robert";

console.log(vowels(name));

name = "beautiful";

console.log(vowels(name));