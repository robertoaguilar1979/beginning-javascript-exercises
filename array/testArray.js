let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myObject = { name: "robert", city: "los angeles", zip: 90022 };

let testArray = function (array) {
  if (Array.isArray(array)) {
    return true;
  }
  return false;
};

let testObject = function (object) {
  if (object instanceof Object) {
    return true;
  }
  return false;
};

console.log(testArray(numbers));
console.log(testArray(myObject));

console.log(testObject(numbers));
console.log(testObject(myObject));
