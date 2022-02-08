//array of animals
let animals = [
    "Eel",
    "Dog",
    "Cat",
    "Elephant",
    "Rhyno",
    "Whale",
    "Snake",
    "Bear",
    "Wolf",
    "Eagle",
    "Earwig",
];

//turns all animals arrays to lower case
let animalsLowerCase = animals.map(string => string.toLowerCase());

//prints out all animals that are lowered case
console.log(animalsLowerCase);

//filters and finds all animals starting with e 
let animalsStartingWithE = animalsLowerCase.filter((animal) => animal[0] === "e");

//prints out filtered animals that start with e
console.log(animalsStartingWithE);