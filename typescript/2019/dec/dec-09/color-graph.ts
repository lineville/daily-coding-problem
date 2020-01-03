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

class UndirectedGraph {
  adjacencyMatrix: Array<Array<boolean>>;

  constructor(size: number) {
    this.adjacencyMatrix = new Array<Array<boolean>>(size);
    for (let i: number = 0; i < size; i++) {
      this.adjacencyMatrix[i] = new Array(size);
      for (let j: number = 0; j < size; j++) {
        this.adjacencyMatrix[i][j] = false;
      }
    }
  }

  addConnection = (node1: number, node2: number): void => {
    this.adjacencyMatrix[node1][node2] = true;
    this.adjacencyMatrix[node2][node1] = true;
  };

  isConnected = (node1: number, node2: number): boolean => {
    return this.adjacencyMatrix[node1][node2];
  };

  numConnections = (node: number): number => {
    return this.adjacencyMatrix[node].filter(edge => edge).length;
  };

  nodes = (): Array<number> => {
    let result: Array<number> = new Array<number>(this.adjacencyMatrix.length);
    for (let i: number = 0; i < result.length; i++) {
      result[i] = i;
    }
    return result;
  };

  // * Try to fill in the color graph
  // * Start with the node that has most connections (dependants)
  // * Assign it a color and store that, Go through all the nodes in order
  // * of how many connections they have and assign it a color that none
  // * of its neighbors have. If we cannot assign it a color then return false.
  canBeColored = (colors: number): boolean => {
    let result: boolean = true;
    const colorOptions = [];
    for (let i: number = 0; i < colors; i++) {
      colorOptions.push(i);
    }
    let coloredAssignments: Object = {};
    let nodesInOrder: Array<number> = this.nodes().sort(
      (a, b) => this.numConnections(a) - this.numConnections(b)
    );

    nodesInOrder.forEach((node: number) => {
        // * Get all of our neighbor connections
      let neighbors: Array<number> = this.adjacencyMatrix[node]
        .filter(val => val)
        .map((val: boolean, idx: number) => idx);
        // * All the available colors based on our neighbors
      let availableColors = colorOptions.filter(
        color => neighbors.filter(node => coloredAssignments[node] === color).length === 0
      );

      // * If there are no options return false
      if (availableColors.length === 0) {
        return false;
      }

      // * Add this assignment since there were options and proceed to next node
      coloredAssignments[node] = availableColors[0];
    });
    console.log(coloredAssignments)

    return result;
  };

  print = (): void => {
    this.adjacencyMatrix.forEach((row: Array<boolean>) => {
      console.log(row);
    });
  };
}

const testColorGraph = (): void => {
  let graph = new UndirectedGraph(5);
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

  let result = graph.canBeColored(3);
  console.log(result ? "Passed" : "Failed");
};

testColorGraph();
