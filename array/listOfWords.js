/* This is an exercise in which I push words not ending with "ing" into an array named list. Eveything is within an object.
*/
let arrayList = {
    list : [],
     wordList(word) {
         if(!word.endsWith("ing")){
             this.list.push(word);
        }    
    }
};

arrayList.wordList("hello");
arrayList.wordList("World");
arrayList.wordList("Working");
arrayList.wordList("London");

console.log(`names are ${arrayList.list}`);