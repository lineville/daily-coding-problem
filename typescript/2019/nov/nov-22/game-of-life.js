// *  Daily coding problem Nov 22 2019
var GameOfLife = /** @class */ (function () {
    // * Initialize board to an empty board, or an array large enough to accomodate
    // * the optional initial coordianates, with the coordinates initialized.
    function GameOfLife(initCoords) {
        var _this = this;
        // * Calculates the dimensions of the board required to accomodate the init coords
        this.dimensionsRequiredForInit = function (initCoords) {
            var dimensionsNeeded = 0;
            initCoords.forEach(function (cell) {
                var bigger = Math.max(cell.row, cell.column);
                if (bigger > dimensionsNeeded) {
                    dimensionsNeeded = bigger;
                }
            });
            return dimensionsNeeded + 1;
        };
        // * Populates a new grid with the initial coordinates provided
        this.populateGrid = function (initCoords) {
            var dimensions = _this.dimensionsRequiredForInit(initCoords);
            var grid = new Array(dimensions);
            for (var i = 0; i < dimensions; i++) {
                var deadRow = new Array(dimensions);
                for (var j = 0; j < dimensions; j++) {
                    deadRow[j] = false;
                }
                grid[i] = deadRow;
            }
            initCoords.forEach(function (coord) {
                grid[coord.row][coord.column] = true;
            });
            return grid;
        };
        // * Calculate the number of alive neighbors for this cell
        this.neighbors = function (cell) {
            var aliveNeighbors = 0;
            // Edge cases for cells on that are on corners or edges and can't safely access every neighbor
            // * TOP LEFT
            if (cell.row > 0 && cell.column > 0) {
                aliveNeighbors += _this.board[cell.row - 1][cell.column - 1] ? 1 : 0;
            }
            // * LEFT MIDDLE
            if (cell.column > 0) {
                aliveNeighbors += _this.board[cell.row][cell.column - 1] ? 1 : 0;
            }
            // * BOTTOM LEFT
            if (cell.row < _this.board.length - 1 && cell.column > 0) {
                aliveNeighbors += _this.board[cell.row + 1][cell.column - 1] ? 1 : 0;
            }
            // * TOP MIDDLE
            if (cell.row > 0) {
                aliveNeighbors += _this.board[cell.row - 1][cell.column] ? 1 : 0;
            }
            // * BOTTOM MIDDLE
            if (cell.row < _this.board.length - 1) {
                aliveNeighbors += _this.board[cell.row + 1][cell.column] ? 1 : 0;
            }
            // * TOP RIGHT
            if (cell.row > 0 && cell.column < _this.board.length - 1) {
                aliveNeighbors += _this.board[cell.row - 1][cell.column + 1] ? 1 : 0;
            }
            // * RIGHT MIDDLE
            if (cell.column < _this.board.length - 1) {
                aliveNeighbors += _this.board[cell.row][cell.column + 1] ? 1 : 0;
            }
            // * BOTTOM RIGHT
            if (cell.column < _this.board.length - 1 &&
                cell.row < _this.board.length - 1) {
                aliveNeighbors += _this.board[cell.row + 1][cell.column + 1] ? 1 : 0;
            }
            return aliveNeighbors;
        };
        // * Expands the existing board to include newRows many new rows
        this.expandGrid = function (newRows) {
            var expandedGrid = new Array(_this.board.length);
            // * Copy over current board
            for (var i = 0; i < _this.board.length; i++) {
                expandedGrid[i] = _this.board[i];
            }
            for (var i = 0; i < _this.board.length; i++) {
                for (var j = 0; j < newRows; j++) {
                    expandedGrid[i].push(false);
                }
            }
            for (var i = 0; i < newRows; i++) {
                var newRow = new Array(_this.board.length + newRows);
                for (var j = 0; j < _this.board.length + newRows; j++) {
                    newRow[j] = false;
                }
                expandedGrid.push(newRow);
            }
            return expandedGrid;
        };
        this.shouldRessurectOutOfBoundsNeighbor = function (cell) {
            // * 4 cases for the 4 types of edges
            // * Top edge
            if (cell.row === 0 && cell.column > 0 && cell.column < _this.board.length - 1) {
                if (_this.board[cell.row][cell.column + 1] && _this.board[cell.row][cell.column - 1]) {
                    return true;
                }
            }
            // * Bottom edge
            if (cell.row === _this.board.length - 1 && cell.column > 0 && cell.column < _this.board.length - 1) {
                if (_this.board[cell.row][cell.column + 1] && _this.board[cell.row][cell.column - 1]) {
                    return true;
                }
            }
            // * Left edge
            if (cell.column === 0 && cell.row > 0 && cell.row < _this.board.length - 1) {
                if (_this.board[cell.row + 1][cell.column] && _this.board[cell.row - 1][cell.column]) {
                    return true;
                }
            }
            // * Right edge
            if (cell.column === _this.board.length - 1 && cell.row > 0 && cell.row < _this.board.length - 1) {
                if (_this.board[cell.row + 1][cell.column] && _this.board[cell.row - 1][cell.column]) {
                    return true;
                }
            }
            return false;
        };
        // * Needs to expand if new cells need to be created out of boundaries
        // * Need to check if any cells out of bounds could be resurrected.
        // * 
        this.tick = function () {
            var newBoard = new Array(_this.board.length);
            for (var i = 0; i < _this.board.length; i++) {
                var newRow = new Array(_this.board.length);
                for (var j = 0; j < _this.board.length; j++) {
                    var currentCell = { row: i, column: j };
                    var numNeighbors = _this.neighbors(currentCell);
                    if (_this.shouldRessurectOutOfBoundsNeighbor(currentCell)) {
                        newBoard = _this.expandGrid(1);
                        console.log("Expanded");
                    }
                    // * Check if this situation would ressurect a cell out of bounds, in which case we need to expand
                    if (_this.board[i][j] && (numNeighbors < 2 || numNeighbors > 3)) {
                        newRow[j] = false;
                    }
                    else if (!_this.board[i][j] && numNeighbors === 3) {
                        newRow[j] = true;
                    }
                    else {
                        newRow[j] = _this.board[i][j];
                    }
                }
                newBoard[i] = newRow;
            }
            _this.board = newBoard;
            _this.print();
        };
        this.print = function () {
            for (var i = 0; i < _this.board.length; i++) {
                var rowStr = '';
                for (var j = 0; j < _this.board.length; j++) {
                    rowStr += _this.board[i][j] ? ' * ' : ' . ';
                }
                console.log(rowStr);
            }
        };
        this.board = initCoords ? this.populateGrid(initCoords) : new Array();
    }
    return GameOfLife;
}());
var runGameOfLife = function () {
    var initCells = [
        { row: 0, column: 0 },
        { row: 1, column: 1 },
        { row: 1, column: 2 },
        { row: 1, column: 3 },
    ];
    var numTicks = 10;
    var game = new GameOfLife(initCells);
    for (var i = 0; i < numTicks; i++) {
        console.log('Game of life after ' + i + ' ticks');
        game.tick();
    }
};
runGameOfLife();
