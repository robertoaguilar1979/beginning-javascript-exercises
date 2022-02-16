// sum an array using the reduce array function

let numbers = [5, 15, 2];

let sumArray = numbers.reduce((sum, number) => {
  return (sum += number);
}, 0);

console.log(sumArray);