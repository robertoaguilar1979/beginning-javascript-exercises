// this program ask the user for a number to use for a standard multiplication from 1 to 12.

let number = Number(prompt("give me a number between 1 - 12 to multiply by"));

while (number > 12 || number < 1) {
    number = Number(prompt("not a number between 1 - 12 please try again"));
}
for (let i = 1; i <= 12; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}