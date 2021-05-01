/* this is a function to find an idexOf of the word "karen".

*/
let names = ["robert", "angel", "karen"];

//this adds charlie to the front on the names array.
let name = names.unshift("charlie");

//this will return an index or an array and the element.
let findWord = function (strings) {

    let index = strings.indexOf("karen");
    let name = "";
    if (index > -1) {

        name = strings.splice(index, 1);
    }
    return `name: ${name} index: ${index}`;

}

// this prints the array to see what we have in the array.
console.log(`full array names: ${names}`);

//this runs the function to find the indexOf karen in the array 
console.log(findWord(names));