let numbers = [5, 10, 999, 0, -5];

let numberMin = function(number){
    let min = Infinity;
    
    for(let i =0; i< number.length; i++) {
        if(number[i] < min){
            min = number[i];
        }
    }
    return min;
}

console.log(numberMin(numbers));
