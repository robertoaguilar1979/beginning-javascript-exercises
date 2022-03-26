//how to use the filter method

let numbers = [];
for (let i = 0; i <= 100; i++) {
    numbers.push(i);
}

let greaterFifty = numbers.filter((element) => (element >= 50 ? true : false));

console.log(greaterFifty);