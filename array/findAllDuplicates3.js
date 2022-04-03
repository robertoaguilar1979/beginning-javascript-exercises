let names = ["robert", "angel", "nami", "karen", "neil", "frida", "zella", "zoren", "robert", "angel", "karen", "ganster"];


let findDuplicates = function (array) {

    return array.filter((word, index, filterArray) => index === filterArray.indexOf(word));


}



console.log(findDuplicates(names));