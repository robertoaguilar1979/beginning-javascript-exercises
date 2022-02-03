//reverse an interger

let reverseInterger = function (number) {
    let reverse = number.toString().split("").reverse().join("");

    return parseInt(reverse) * Math.sign(number);
};

console.log(reverseInterger(-12345));