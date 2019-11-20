"use strict";
// * [Hard] Daily Coding Problem
// * Nov 15 2019
exports.__esModule = true;
/**
 * * Suppose you are given a table of currency exchange rates, represented as a 2D array.
 * * Determine whether there is a possible arbitrage: that is, whether there is
 * * some sequence of trades you can make, starting with some amount A of any currency,
 * * so that you can end up with some amount greater than A of that currency.
 */
// ! Ex:
// ! 1 USD -> 0.82 Euro ... 1 Euro -> 129.7 Yen ... 1 Yen -> 12 Lira ... 1 Lira -> 0.0008 USD
// * .82 * 129.7 * 12 -> .0008 = 1.02 USD == 2% profit!
// * arbitrage(exchangeMatrix: 2d array<float>) => boolean (if profit is possible)
// * Example of currency matrix from example above
/**
 * *         USA$ | Euro | Yen  | Lira |
 * * USA$ |   1     1.22  .008   .0008
 * * Euro |   0.82   1    .007   .0006
 * * Yen  |  125   129.7   1     .083
 * * Lira |  1250  1524    12      1
 *
 */
// const Graph = require('proper-graph');
var _a = require("simple-unit-test-utility"), didTestPass = _a.didTestPass, header = _a.header;
var graph_1 = require("./graph");
var testArbitrage = function () {
    var row1 = [1, 1.22, 0.008, 0.0008];
    var row2 = [0.82, 1, 0.007, 0.0006];
    var row3 = [125, 129.7, 1, 0.083];
    var row4 = [1250, 1524, 12, 1];
    var matrix = [row1, row2, row3, row4];
    var expectedResult = true;
    var result = arbitrage(matrix);
    didTestPass(expectedResult, result);
};
var setupGraph = function (exchangeRates) {
    var g = new graph_1["default"](4);
    var usa = { id: 0, country: "United States", currency: "Dollars" };
    var europe = { id: 1, country: "Europe", currency: "Euro" };
    var japan = { id: 2, country: "Japan", currency: "Yen" };
    var turkey = { id: 3, country: "Turkey", currency: "Lira" };
    var countries = [usa, europe, japan, turkey];
    countries.forEach(function (country) {
        g.addNode(country);
    });
    var _loop_1 = function (i) {
        var _loop_2 = function (j) {
            var value = exchangeRates[i][j];
            var source = countries.find(function (c) { return c.id === j; });
            var destination = countries.find(function (c) { return c.id === i; });
            g.addEdge(source, destination, value);
        };
        for (var j = 0; j < exchangeRates.length; j++) {
            _loop_2(j);
        }
    };
    for (var i = 0; i < exchangeRates.length; i++) {
        _loop_1(i);
    }
    return g;
};
var negativeLogConverter = function (exchangeRates) {
    for (var i = 0; i < exchangeRates.length; i++) {
        for (var j = 0; j < exchangeRates.length; j++) {
            exchangeRates[i][j] = -1 * Math.log(exchangeRates[i][j]);
        }
    }
    return exchangeRates;
};
var arbitrage = function (exchangeRates) {
    // * Do the work
    // * Think of the matrix of exchange rates as a weighted graph
    // * Values in the matrix represent the weight on the edge from
    // * the node at row i and column j
    // * Arbitrage is said to exist if a cycle exists in the graph
    // * such that w1 * w2 * w3 * ... * wn > 1 (a profit exists)
    // * Use Bellman Ford algorithm to find a negative weight cycle
    // * If negative weight cycle exists then arbitrage exists
    // ! 1: SETUP
    exchangeRates = negativeLogConverter(exchangeRates);
    var graph = setupGraph(exchangeRates);
    var vertexCount = graph.vertexCount();
    var edgeCount = graph.edgeCount;
    var negativeCycle = false;
    var distances = new Array(vertexCount);
    distances.fill(Number.MAX_VALUE);
    distances[0] = 0;
    var arbitragePath = new Array();
    var profit = 1;
    // ! 2: Relax all edges vertexCount - 1 times
    for (var v = 0; v < vertexCount - 1; v++) {
        for (var i = 0; i < vertexCount; i++) {
            var edges = graph.connections[i];
            edges.toArray().forEach(function (edge) {
                var value = edge.weight;
                if (distances[edge.source.id] !== Number.MAX_VALUE &&
                    distances[edge.source.id] + value < distances[edge.destination.id]) {
                    distances[edge.destination.id] = distances[edge.source.id] + value;
                    arbitragePath.push(edge);
                }
            });
        }
    }
    // ! 3: Check for negative weight cycles
    for (var i = 0; i < vertexCount; i++) {
        var edges = graph.connections[i];
        edges.toArray().forEach(function (edge) {
            var value = edge.weight;
            if (distances[edge.source.id] !== Number.MAX_VALUE &&
                distances[edge.source.id] + value < distances[edge.destination.id]) {
                console.log("Found a negative cycle");
                arbitragePath
                    .filter(function (e) {
                    return e.source.id !== edge.source.id &&
                        e.destination.id !== edge.destination.id;
                })
                    .forEach(function (ed) {
                    ed.print();
                    profit = profit * ed.weight;
                });
                console.log(profit);
                negativeCycle = true;
            }
        });
    }
    return negativeCycle;
};
header("Liam Neville", "Nov 15th 2019");
testArbitrage();
