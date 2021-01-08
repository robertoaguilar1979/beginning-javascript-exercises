    
    // using a for of loop to reverse a string
    
    let reverseString = function(string){

        let reversedString = "";

        for(let char of string){
            reversedString = char + reversedString;
        }
        return reversedString;


    }

    console.log(reverseString("robert"));


