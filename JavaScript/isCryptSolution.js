function isCryptSolution(crypt, solution) {
    let correct = true;

    solution = solution.reduce((acc, index) => {
        acc[index[0]] = index[1];
        return acc
    }, {});

    let result = crypt.map(word => {
        let num = '';
        word.split('').forEach(letter => {
            num += solution[letter]
        });
        return num
    });

    if ((+result[0] + +result[1] !== +result[2])) {
        return false;
    }
    if ((result[0][0] === '0' || result[0][1] === '0' && result [2][0] === '0'|| result[1][0] === '0' && result[1][1] === '0') && result[0].length !== 1) {
        return false;
    }

    return correct
}