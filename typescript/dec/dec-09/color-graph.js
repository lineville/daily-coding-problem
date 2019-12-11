// * Daily Coding Problem Dec 9th 2019
// * [Medium] -- Google
/**
 * * Given an undirected graph represented as an adjacency matrix and an integer k,
 * * write a function to determine whether each vertex in the graph can be colored
 * * such that no two adjacent vertices share the same color using at most k colors.
 */
// * Approach is to model our color map as an adjacency matrix of booleans.
// * Since it is an unweighted, undirected graph every connection is true and
// * every non-connection is false. Use the strategy of filling the values of
// * the nodes to avoid connections to same color.
var UndirectedGraph = /** @class */ (function () {
    function UndirectedGraph(size) {
        var _this = this;
        this.addConnection = function (node1, node2) {
            _this.adjacencyMatrix[node1][node2] = true;
            _this.adjacencyMatrix[node2][node1] = true;
        };
        this.isConnected = function (node1, node2) {
            return _this.adjacencyMatrix[node1][node2];
        };
        this.numConnections = function (node) {
            return _this.adjacencyMatrix[node].filter(function (edge) { return edge; }).length;
        };
        this.nodes = function () {
            var result = new Array(_this.adjacencyMatrix.length);
            for (var i = 0; i < result.length; i++) {
                result[i] = i;
            }
            return result;
        };
        // * Try to fill in the color graph
        // * Start with the node that has most connections (dependants)
        // * Assign it a color and store that, Go through all the nodes in order
        // * of how many connections they have and assign it a color that none
        // * of its neighbors have. If we cannot assign it a color then return false.
        this.canBeColored = function (colors) {
            var result = true;
            var colorOptions = [];
            for (var i = 0; i < colors; i++) {
                colorOptions.push(i);
            }
            var coloredAssignments = {};
            var nodesInOrder = _this.nodes().sort(function (a, b) { return _this.numConnections(a) - _this.numConnections(b); });
            nodesInOrder.forEach(function (node) {
                // * Get all of our neighbor connections
                var neighbors = _this.adjacencyMatrix[node]
                    .filter(function (val) { return val; })
                    .map(function (val, idx) { return idx; });
                // * All the available colors based on our neighbors
                var availableColors = colorOptions.filter(function (color) { return neighbors.filter(function (node) { return coloredAssignments[node] === color; }).length === 0; });
                // * If there are no options return false
                if (availableColors.length === 0) {
                    return false;
                }
                // * Add this assignment since there were options and proceed to next node
                coloredAssignments[node] = availableColors[0];
            });
            console.log(coloredAssignments);
            return result;
        };
        this.print = function () {
            _this.adjacencyMatrix.forEach(function (row) {
                console.log(row);
            });
        };
        this.adjacencyMatrix = new Array(size);
        for (var i = 0; i < size; i++) {
            this.adjacencyMatrix[i] = new Array(size);
            for (var j = 0; j < size; j++) {
                this.adjacencyMatrix[i][j] = false;
            }
        }
    }
    return UndirectedGraph;
}());
var testColorGraph = function () {
    var graph = new UndirectedGraph(5);
    // graph.print()
    graph.addConnection(0, 1);
    graph.addConnection(0, 2);
    graph.addConnection(1, 2);
    graph.addConnection(1, 3);
    graph.addConnection(2, 0);
    graph.addConnection(2, 1);
    graph.addConnection(2, 3);
    graph.addConnection(2, 4);
    graph.addConnection(3, 4);
    graph.print();
    var result = graph.canBeColored(3);
    console.log(result ? "Passed" : "Failed");
};
testColorGraph();
