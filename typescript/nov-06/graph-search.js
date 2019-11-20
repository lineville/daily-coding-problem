// Daily Coding Problem Nov 6 2019
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Graph = /** @class */ (function () {
    function Graph() {
        var _this = this;
        this.nodeToString = function (node) {
            return "(" + node.row + ", " + node.column + ")";
        };
        this.addVertex = function (node) {
            _this.connections.set(_this.nodeToString(node), new Array());
        };
        this.addEdge = function (src, dest) {
            if (!_this.connections.get(_this.nodeToString(src)).includes(dest)) {
                _this.connections.get(_this.nodeToString(src)).push(dest);
            }
            if (!_this.connections.get(_this.nodeToString(dest)).includes(src)) {
                _this.connections.get(_this.nodeToString(dest)).push(src);
            }
            // this.connections.keys()
            console.log("added connection between " +
                _this.nodeToString(src) +
                " and " +
                _this.nodeToString(dest));
            _this.printGraph();
            // // ! Remove line below if directed graph is desired. (both ways is undirected)
            // this.connections.get(dest).push(src);
        };
        this.printGraph = function () {
            var e_1, _a;
            var nodes = _this.connections.keys();
            var _loop_1 = function (node) {
                var neighbors = _this.connections.get(node);
                var neighborStr = "";
                neighbors.forEach(function (neighbor) {
                    neighborStr += " " + _this.nodeToString(neighbor) + " ->";
                });
                console.log(node + " -> " + neighborStr);
            };
            try {
                // * Requires compiling using tsc <file.ts> --downlevelIteration
                for (var nodes_1 = __values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
                    var node = nodes_1_1.value;
                    _loop_1(node);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1["return"])) _a.call(nodes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            console.log("-----------------------------------------");
        };
        this.connections = new Map();
    }
    return Graph;
}());
var minSteps = function (board, start, end) {
    // * Create a graph from the board
    var numSteps = 0;
    var graph = new Graph();
    for (var i = 0; i < board.length; i++) {
        var _loop_2 = function (j) {
            var validPath = !board[i][i];
            if (validPath) {
                var coord_1 = { row: i, column: j };
                graph.addVertex(coord_1);
                var neighbors = getPaths(board, i, j);
                neighbors.forEach(function (neighbor) {
                    graph.addVertex(neighbor);
                    graph.addEdge(coord_1, neighbor);
                });
            }
        };
        for (var j = 0; j < board.length; j++) {
            _loop_2(j);
        }
    }
    // graph.printGraph()
    // graph.addVertex({ row: 0, column: 0 });
    // graph.addVertex({ row: 0, column: 1 });
    // graph.addVertex({ row: 0, column: 2 });
    // graph.addVertex({ row: 0, column: 3 });
    // graph.addEdge({ row: 0, column: 0 }, { row: 0, column: 1 });
    // graph.addEdge({ row: 0, column: 1 }, { row: 0, column: 2 });
    // graph.addEdge({ row: 0, column: 2 }, { row: 0, column: 3 });
    // graph.printGraph();
    //   console.log(graph.printGraph());
    return 0;
};
var getPaths = function (board, row, column) {
    var neighbors = new Array();
    if (row > 0 && !board[row - 1][column]) {
        neighbors.push({ row: row - 1, column: column });
    }
    if (row < board.length - 1 && !board[row + 1][column]) {
        neighbors.push({ row: row + 1, column: column });
    }
    if (column > 0 && !board[row][column - 1]) {
        neighbors.push({ row: row, column: column - 1 });
    }
    if (column < board.length - 1 && !board[row][column + 1]) {
        neighbors.push({ row: row, column: column + 1 });
    }
    return neighbors;
};
var testMinSteps = function () {
    var board = [
        [false, false, false, false],
        [true, true, false, true],
        [false, false, false, false],
        [false, false, false, false]
    ];
    var start = { row: 3, column: 0 };
    var end = { row: 0, column: 0 };
    var expected = 7;
    var result = minSteps(board, start, end);
    console.log("Result: " + result.toString() + " Expected: " + expected);
    console.log(result === expected ? "Passed ✔️" : "Failed ❌");
};
testMinSteps();
