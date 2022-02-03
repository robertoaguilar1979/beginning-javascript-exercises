let x =
  "Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Double,Double,Double";

// gets the string and splits each word into an array
let newArray = x.split(",");

// cleans array and only keeps single version of a string
let removeDuplicates = [...new Set(newArray)];

//prints out string
console.log(x);

//prints out clean array
console.log(newArray);

//prints out non-duplicates
console.log(removeDuplicates);
