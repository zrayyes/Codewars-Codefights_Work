function shapeArea(n) {
    let last = 1;
    let counter = 1;
    if (n === 1){
        return last;
    } else {
        while (counter < n) {
            last = last + (counter * 4);
            counter += 1;
        }
    }
    return last;
}