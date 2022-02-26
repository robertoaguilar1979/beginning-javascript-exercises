let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let names = ["robert", "angel", "frida", "nami"];
let object = { name: "robert", city: "los angeles", age: 43 };

let findArray = function (array) {
  return Array.isArray(array);
};

console.log(findArray(numbers));
console.log(findArray(names));
console.log(findArray(object));
