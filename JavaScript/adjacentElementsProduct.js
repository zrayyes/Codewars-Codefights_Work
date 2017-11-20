function adjacentElementsProduct(inputArray) {
    let highest = inputArray[0]*inputArray[1];
    inputArray.forEach((entry, index, array) => {
        if (index !== array.length - 1){
            let current = entry * array[index+1];
            if (current > highest) {
                highest = current;
            }
        }
    });
    return highest;
}