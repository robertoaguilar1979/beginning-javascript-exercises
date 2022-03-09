function recursive(number) {
    console.log(number);
    if (number > 0) {
        recursive(--number);
    }

}


recursive(3);