let numbers = [5, 10, 999, 0, -5];

let numberMax = function(number){
    let maxNumber = -Infinity;

    for(let i = 0; number.length > i; i++) {

        if(number[i] > maxNumber){
            maxNumber = number[i]
        }
    }
    return maxNumber;

}



console.log(numberMax(numbers));