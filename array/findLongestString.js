let names = ["rob", "ana", "karen", "karen", "angel", "nami","zezezeze"];

let findLongestString = function(array){
    let sortedArray = [];
    let longestString = -Infinity;

    for(let i =0; i < array.length; i++){
        if(array[i].length>=longestString){
            sortedArray.push(array[i]);
            longestString = array[i].length;
        }
    }

    console.log(sortedArray);
}


console.log(findLongestString(names));