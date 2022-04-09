// the split method will split a string according to what you declare

//example split a string into array by the space between the string
let fullName = "robert aguilar";

let myNewArrayName = fullName.split(" "); //notice the empty space to tell the method to split on the space of the string

console.log(myNewArrayName);

//this split method uses the coma to know to plit each string when it sees a coma.
let comaName = "karen , aguilar";

let myWifeArrayName = comaName.split(",");

console.log(myWifeArrayName);