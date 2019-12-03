// * [Hard] Daily Coding Problem
// * Nov 15 2019

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
const { didTestPass, header } = require("simple-unit-test-utility");
import Graph, { Edge, Node } from "./graph";
import { LinkedList } from "linked-list-typescript";

const testArbitrage = (): void => {
  const row1: Array<number> = [1, 1.22, 0.008, 0.0008];
  const row2: Array<number> = [0.82, 1, 0.007, 0.0006];
  const row3: Array<number> = [125, 129.7, 1, 0.083];
  const row4: Array<number> = [1250, 1524, 12, 1];
  const matrix: Array<Array<number>> = [row1, row2, row3, row4];

  const expectedResult: boolean = true;
  const result: boolean = arbitrage(matrix);
  didTestPass(expectedResult, result);
};

const setupGraph = (exchangeRates: Array<Array<number>>): Graph => {
  const g: Graph = new Graph(4);
  const usa: Node = { id: 0, country: "United States", currency: "Dollars" };
  const europe: Node = { id: 1, country: "Europe", currency: "Euro" };
  const japan: Node = { id: 2, country: "Japan", currency: "Yen" };
  const turkey: Node = { id: 3, country: "Turkey", currency: "Lira" };
  const countries: Array<Node> = [usa, europe, japan, turkey];

  countries.forEach((country: Node) => {
    g.addNode(country);
  });

  for (let i: number = 0; i < exchangeRates.length; i++) {
    for (let j: number = 0; j < exchangeRates.length; j++) {
      let value: number = exchangeRates[i][j];
      let source: Node = countries.find(c => c.id === j);
      let destination: Node = countries.find(c => c.id === i);
      g.addEdge(source, destination, value);
    }
  }

  return g;
};

const negativeLogConverter = (
  exchangeRates: Array<Array<number>>
): Array<Array<number>> => {
  for (let i: number = 0; i < exchangeRates.length; i++) {
    for (let j: number = 0; j < exchangeRates.length; j++) {
      exchangeRates[i][j] = -1 * Math.log(exchangeRates[i][j]);
    }
  }
  return exchangeRates;
};

const arbitrage = (exchangeRates: Array<Array<number>>): boolean => {
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
  const graph: Graph = setupGraph(exchangeRates);
  const vertexCount: number = graph.vertexCount();
  const edgeCount: number = graph.edgeCount;
  let negativeCycle: boolean = false;
  let distances: Array<number> = new Array<number>(vertexCount);

  distances.fill(Number.MAX_VALUE);
  distances[0] = 0;
  let arbitragePath: Array<Edge> = new Array<Edge>();
  let profit: number = 1;

  // ! 2: Relax all edges vertexCount - 1 times
  for (let v: number = 0; v < vertexCount - 1; v++) {
    for (let i: number = 0; i < vertexCount; i++) {
      let edges: LinkedList<Edge> = graph.connections[i];
      edges.toArray().forEach((edge: Edge) => {
        let value: number = edge.weight;
        if (
          distances[edge.source.id] !== Number.MAX_VALUE &&
          distances[edge.source.id] + value < distances[edge.destination.id]
        ) {
          distances[edge.destination.id] = distances[edge.source.id] + value;
          arbitragePath.push(edge);
        }
      });
    }
  }

  // ! 3: Check for negative weight cycles
  for (let i: number = 0; i < vertexCount; i++) {
    let edges: LinkedList<Edge> = graph.connections[i];
    edges.toArray().forEach((edge: Edge) => {
      let value: number = edge.weight;
      if (
        distances[edge.source.id] !== Number.MAX_VALUE &&
        distances[edge.source.id] + value < distances[edge.destination.id]
      ) {
        console.log("Found a negative cycle");

        arbitragePath
          .filter(
            (e: Edge) =>
              e.source.id !== edge.source.id &&
              e.destination.id !== edge.destination.id
          )
          .forEach((ed: Edge) => {
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
