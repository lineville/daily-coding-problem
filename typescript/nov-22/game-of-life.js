// *  Daily coding problem Nov 22 2019
var GameOfLife = /** @class */ (function () {
    function GameOfLife(initCoords) {
        var _this = this;
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
            _this.board = grid;
        };
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
        this.expandGrid = function (newRows) {
            // Add false columns to existing rows
            for (var i = 0; i < _this.board.length; i++) {
                for (var j = 0; j < newRows; j++) {
                    _this.board[i].push(false);
                }
            }
            // Add new rows
            for (var i = 0; i < newRows; i++) {
                var newRow = new Array(_this.board.length + newRows);
                for (var j = 0; j < _this.board.length + newRows; j++) {
                    newRow[j] = false;
                }
                _this.board.push(newRow);
            }
        };
        // * Needs to expand if new cells need to be created out of boundaries
        this.tick = function () {
            var newBoard = new Array(_this.board.length);
            for (var i = 0; i < _this.board.length; i++) {
                var newRow = new Array(_this.board.length);
                for (var j = 0; j < _this.board.length; j++) {
                    var numNeighbors = _this.neighbors({ row: i, column: j });
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
        if (initCoords) {
            this.populateGrid(initCoords);
        }
        else {
            this.board = new Array();
        }
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
