// * Daily Coding Problem Dec 7th 2019
var Sudoku = /** @class */ (function () {
    function Sudoku(initVals) {
        var _this = this;
        this.print = function () {
            console.log('_____________________________________');
            _this.board.forEach(function (row, index) {
                var rowStr = '|';
                row.forEach(function (val) {
                    rowStr += ' ' + (val ? val : '_') + ' |';
                });
                console.log(rowStr);
                if ((index + 1) % 3 === 0) {
                    console.log('-------------------------------------');
                }
            });
        };
        this.solve = function () {
            var result = _this.board;
            // * Solve the board here!
            return result;
        };
        this.board = new Array(9);
        for (var i = 0; i < this.board.length; i++) {
            this.board[i] = [null, null, null, null, null, null, null, null, null];
        }
        if (initVals) {
            initVals.forEach(function (cell) {
                _this.board[cell.row][cell.column] = cell.value;
            });
        }
    }
    return Sudoku;
}());
var testSudokuSolver = function () {
    var initCells = [
        { row: 0, column: 3, value: 2 },
        { row: 0, column: 4, value: 6 },
        { row: 0, column: 6, value: 7 },
        { row: 0, column: 8, value: 1 },
        { row: 1, column: 0, value: 6 },
        { row: 1, column: 1, value: 8 },
        { row: 1, column: 4, value: 7 },
        { row: 1, column: 7, value: 9 },
        { row: 2, column: 0, value: 1 },
        { row: 2, column: 1, value: 9 },
        { row: 2, column: 5, value: 4 },
        { row: 2, column: 6, value: 5 },
        { row: 3, column: 0, value: 8 },
        { row: 3, column: 1, value: 2 },
        { row: 3, column: 3, value: 1 },
        { row: 3, column: 7, value: 4 },
        { row: 4, column: 2, value: 4 },
        { row: 4, column: 3, value: 6 },
        { row: 4, column: 5, value: 2 },
        { row: 4, column: 6, value: 9 },
        { row: 5, column: 1, value: 5 },
        { row: 5, column: 5, value: 3 },
        { row: 5, column: 7, value: 2 },
        { row: 5, column: 8, value: 8 },
        { row: 6, column: 2, value: 9 },
        { row: 6, column: 3, value: 3 },
        { row: 6, column: 7, value: 7 },
        { row: 6, column: 8, value: 4 },
        { row: 7, column: 1, value: 4 },
        { row: 7, column: 4, value: 5 },
        { row: 7, column: 7, value: 3 },
        { row: 7, column: 8, value: 6 },
        { row: 8, column: 0, value: 7 },
        { row: 8, column: 2, value: 3 },
        { row: 8, column: 4, value: 1 },
        { row: 8, column: 5, value: 8 },
    ];
    var sudoku = new Sudoku(initCells);
    sudoku.print();
    sudoku.board = sudoku.solve();
    sudoku.print();
};
testSudokuSolver();
