function recursive(number) {
    console.log(number);
    if (number > 0) {
        recursive(--number);
    }

}

function recursiveTwo(number) {
    console.log(`recursiveTwo ${number}`);
    if (number > 0) {
        recursiveTwo(number - 1)
    }


}
recursive(3);
recursiveTwo(4);