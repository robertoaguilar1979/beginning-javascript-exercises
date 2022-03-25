//////new map
let numbers = [7, 34, 4, 1, 12, 5, 13, 32];

// const kvArray = [
//   [0, "hello"],
//   [1, "value2"],
// ];

// const myMap1 = new Map(kvArray);

// //console.log(myMap1.get(0));
// for (const [key, value] of myMap1) {
//   console.log(`key: ${key}, value: ${value}`);
// }

const numberHash = new Map();

numbers.forEach((value, index) => numberHash.set(value, index));

console.log(numberHash);

// numberHash.forEach((value, key) => console.log(`key: ${key} value: ${value}`));

// //new map
//const myMap = new Map();
// myMap.set(0, "zero");
// myMap.set(1, "one");

for (const [key, value] of numberHash) {
  console.log(`key: ${key} + " = " + value: ${value}`);
}
