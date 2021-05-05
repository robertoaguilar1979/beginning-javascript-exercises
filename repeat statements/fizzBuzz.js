/* Find multiples of 3 and 5*/
/* if number is divisible by 3 use fizz*/
/* if number is divisible by 5 use buzz*/
/* divisible by 3 and 5 use fizzbuzz*/

for (let i = 1; i <= 100; i++) {
    let string = "";
    if (i % 3 === 0) {
        string += "fizz";
    }
    if (i % 5 === 0) {
        string += "buzz";
    }
    if (string === "") {
        string = i;
    }
    console.log(string);
}