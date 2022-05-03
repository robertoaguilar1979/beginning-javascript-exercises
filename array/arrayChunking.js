let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let size = 2;


let arrayChunking = function (array, size) {
    let Chunk = [];
    let start = 0;

    while (start < array.length) {
        Chunk.push(array.splice(start, size));
    }
    return Chunk;
}


console.log(arrayChunking(numbers, size));