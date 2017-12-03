function sudoku2(grid) {
    let collapsed = [[], [], []];
    //Guaranteed to be 9x9. Guaranteed to have '.' or 1-9
    for(let x = 0; x < grid.length; x++) {
        //Check row
        //grid[x][0-8]
        for(let i = 1; i <= 9; i++) {
            if(!isValid(i, grid[x].join(""))) {
                return false;
            }
        }
        //Check column
        //grid[0-8][x]
        let column = [];
        for(let y = 0; y < grid.length; y++) {
            column.push(grid[y][x]);
            collapsed[(x % 3)].push(grid[x][y]);
        }

        for(let i = 1; i <= 9; i++) {
            if(!isValid(i, column.join(""))) {
                return false;
            }
        }
    }

    //Check squares
    // grid[0-2][0-2], grid[0-2][3-5], grid[0-2][6-8]
    let squares = [[], [], [], [], [], [], [], [], []];
    let k = 0;
    while(k < 9) {
        for(let j = 0; j < 3; j++) {
            squares[k].push(collapsed[j].shift());
            squares[k].push(collapsed[j].shift());
            squares[k].push(collapsed[j].shift());
        }
        for(let i = 1; i <= 9; i++) {
            if(!isValid(i, squares[k].join(""))) {
                return false;
            }
        }
        k++;
    }
    return true;
}
function isValid(i, a) {
    // No number is repeated
    let first = a.indexOf(i);
    if(first >= 0) {
        if(a.indexOf(i, first + 1) >= 0) {
            return false;
        }
    }
    return true;
}


let grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
    ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
    ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
    ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
    ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
    ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
    ['.', '.', '.', '5', '.', '.', '.', '7', '.']];

let grid2 = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
    ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
    ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
    ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
    ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
    ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
    ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
    ['.', '2', '.', '.', '3', '.', '.', '.', '.']];

let grid3 = [[".","4",".",".",".",".",".",".","."],
             [".",".","4",".",".",".",".",".","."],
             [".",".",".","1",".",".","7",".","."],
             [".",".",".",".",".",".",".",".","."],
             [".",".",".","3",".",".",".","6","."],
             [".",".",".",".",".","6",".","9","."],
             [".",".",".",".","1",".",".",".","."],
             [".",".",".",".",".",".","2",".","."],
             [".",".",".","8",".",".",".",".","."]];

console.log(sudoku2(grid));
console.log(sudoku2(grid2));
console.log(sudoku2(grid3));