function rotateImage(a) {
    let newArr = [];

    for (let y = 0; y < a.length; y++){
        let arr = [];
        for (let x = a[y].length - 1; x >= 0; --x){
            arr.push(a[x][y]);
        }
        newArr.push(arr);
    }
    return newArr;
}

let arr =  [[1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]];

console.log(rotateImage(arr));