/* this is a function to find an idexOf of the word "karen".

*/
let names = ["robert", "angel", "karen"];

//this adds charlie to the front on the names array.
let name = names.unshift("charlie"); 

let findWord = function(strings){

    let index = strings.indexOf("karen");

    if (index > -1){

        strings.splice(index,1);
    }
return index;

}

// this prints the array to see what we have in the array.
console.log(`these are the names in the array ${names}`);

//this runs the function to find the indexOf karen in the array 
console.log(`the index of kare is:${findWord(names)}`);