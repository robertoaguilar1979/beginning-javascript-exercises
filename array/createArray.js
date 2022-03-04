//this creates array but in diffrent ways
//one way uses the push method.
// the other way assigns a number to the value in an array.

let numbers = [];
let numbers2 = [];

for (let i = 0; i <= 99; i++) {
  numbers.push(i);
}

for (let i = 0; i <= 99; i++) {
  numbers2[i] = i;
}

console.log(numbers);
console.log(numbers2);
