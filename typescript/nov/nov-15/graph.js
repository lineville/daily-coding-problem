"use strict";
exports.__esModule = true;
/**
 * * Graph implementation
 * * @author Liam Neville
 */
var linked_list_typescript_1 = require("linked-list-typescript");
var Edge = /** @class */ (function () {
    function Edge(src, dest, weight) {
        var _this = this;
        this.print = function () {
            console.log(_this.source.currency +
                "--(" +
                _this.weight +
                ")-->" +
                _this.destination.currency);
        };
        this.source = src;
        this.destination = dest;
        this.weight = weight;
    }
    return Edge;
}());
exports.Edge = Edge;
var Graph = /** @class */ (function () {
    function Graph(vertices) {
        var _this = this;
        this.vertexCount = function () {
            return _this.connections.length;
        };
        this.getNodes = function () {
            return _this.connections.map(function (adjList) { return adjList.head.source; });
        };
        this.getEdges = function () {
            var edges = new Array();
            for (var i = 0; i < _this.vertexCount(); i++) {
                var edgeList = _this.connections[i];
                edgeList.toArray().forEach(function (edge) {
                    edges.push(edge);
                });
            }
            return edges;
        };
        this.addNode = function (node) {
            _this.connections[node.id] = new linked_list_typescript_1.LinkedList();
        };
        this.addEdge = function (src, dest, weight) {
            var edge = new Edge(src, dest, weight);
            _this.connections[src.id].append(edge);
            _this.edgeCount++;
        };
        this.print = function () {
            for (var i = 0; i < _this.vertexCount(); i++) {
                var edgeList = _this.connections[i];
                edgeList.toArray().forEach(function (edge) {
                    edge.print();
                });
            }
        };
        this.edgeCount = 0;
        this.connections = new Array(vertices) || [];
    }
    return Graph;
}());
exports["default"] = Graph;
