let x =  [2, 4, 3, 1, 5, 2];

function firstDuplicate(a) {

    let dictionary = {};

    for (let i in a) {
        if(dictionary[a[i]] !== undefined)
            return a[i];
        else
            dictionary[a[i]] = i;
    }

    return -1;
}

console.log(firstDuplicate(x));