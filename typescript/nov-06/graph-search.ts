// Daily Coding Problem Nov 6 2019

// You are given an M by N matrix consisting of booleans that represents a board.
// Each True boolean represents a wall. Each False boolean represents a tile you can walk on.

// Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps
// required to reach the end coordinate from the start. If there is no possible path, then return null.
// You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges of the board.

// * EX:
// * [[f, f, f, f],
// *  [t, t, f, t],
// *  [f, f, f, f],
// *  [f, f, f, f]]

// * start = (3, 0) bottom left board[3][0] row=3 col=0
// * end = (0, 0) top left
// * Min steps = 7 need to traverse (3,0) -> (2,0) -> (2,1) -> (2,2) -> (1,2) -> (0,2) -> (0,1) -> (0,0)

interface coordinate {
  row: number;
  column: number;
}

class Graph {
  connections: Map<string, Array<coordinate>>;

  constructor() {
    this.connections = new Map<string, Array<coordinate>>();
  }

  nodeToString = (node: coordinate): string => {
    return "(" + node.row + ", " + node.column + ")";
  };

  addVertex = (node: coordinate): void => {
    this.connections.set(this.nodeToString(node), new Array<coordinate>());
  };

  addEdge = (src: coordinate, dest: coordinate): void => {
    if (!this.connections.get(this.nodeToString(src)).includes(dest)) {
      this.connections.get(this.nodeToString(src)).push(dest);
    }

    if (!this.connections.get(this.nodeToString(dest)).includes(src)) {
      this.connections.get(this.nodeToString(dest)).push(src);
    }
    // this.connections.keys()
    console.log(
      "added connection between " +
        this.nodeToString(src) +
        " and " +
        this.nodeToString(dest)
    );
    this.printGraph();
    // // ! Remove line below if directed graph is desired. (both ways is undirected)
    // this.connections.get(dest).push(src);
  };

  printGraph = (): void => {
    let nodes = this.connections.keys();
    // * Requires compiling using tsc <file.ts> --downlevelIteration
    for (let node of nodes) {
      let neighbors: Array<coordinate> = this.connections.get(node);
      let neighborStr: string = "";
      neighbors.forEach((neighbor: coordinate) => {
        neighborStr += " " + this.nodeToString(neighbor) + " ->";
      });
      console.log(node + " -> " + neighborStr);
    }
    console.log("-----------------------------------------");
  };
}

const minSteps = (
  board: Array<Array<boolean>>,
  start: coordinate,
  end: coordinate
): number => {
  // * Create a graph from the board
  let numSteps: number = 0;
  let graph: Graph = new Graph();

  for (let i: number = 0; i < board.length; i++) {
    for (let j: number = 0; j < board.length; j++) {
      let validPath: boolean = !board[i][i];
      if (validPath) {
        let coord: coordinate = { row: i, column: j };
        graph.addVertex(coord);
        let neighbors: Array<coordinate> = getPaths(board, i, j);
        neighbors.forEach((neighbor: coordinate) => {
          graph.addVertex(neighbor);
          graph.addEdge(coord, neighbor);
        });
      }
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

const getPaths = (
  board: Array<Array<boolean>>,
  row: number,
  column: number
): Array<coordinate> => {
  let neighbors: Array<coordinate> = new Array<coordinate>();

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

const testMinSteps = (): void => {
  const board: Array<Array<boolean>> = [
    [false, false, false, false],
    [true, true, false, true],
    [false, false, false, false],
    [false, false, false, false]
  ];
  const start: coordinate = { row: 3, column: 0 };
  const end: coordinate = { row: 0, column: 0 };

  const expected: number = 7;
  const result: number = minSteps(board, start, end);

  console.log("Result: " + result.toString() + " Expected: " + expected);
  console.log(result === expected ? "Passed ✔️" : "Failed ❌");
};

testMinSteps();
