let names = ["robert", "angel", "karen"];

let name = names.unshift("charlie");

let findWord = function(strings){

    let index = strings.indexOf("karen");

    if (index > -1){

        strings.splice(index,1);
    }
return index;

}


console.log(names);
console.log(findWord(names));