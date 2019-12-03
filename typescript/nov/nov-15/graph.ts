/**
 * * Graph implementation
 * * @author Liam Neville
 */
import { LinkedList } from "linked-list-typescript";

export type Node = {
  id: number;
  country: string;
  currency: string;
};

export class Edge {
  source: Node;
  destination: Node;
  weight: number;

  constructor(src: Node, dest: Node, weight: number) {
    this.source = src;
    this.destination = dest;
    this.weight = weight;
  }

  print = () => {
    console.log(
      this.source.currency +
        "--(" +
        this.weight +
        ")-->" +
        this.destination.currency
    );
  };
}

class Graph {
  edgeCount: number;
  connections: Array<LinkedList<Edge>>;

  constructor(vertices?: number) {
    this.edgeCount = 0;
    this.connections = new Array<LinkedList<Edge>>(vertices) || [];
  }

  vertexCount = (): number => {
    return this.connections.length;
  };

  getNodes = (): Array<Node> => {
    return this.connections.map(
      (adjList: LinkedList<Edge>) => adjList.head.source
    );
  };

  getEdges = (): Array<Edge> => {
    let edges: Array<Edge> = new Array<Edge>();
    for (let i: number = 0; i < this.vertexCount(); i++) {
      let edgeList: LinkedList<Edge> = this.connections[i];
      edgeList.toArray().forEach((edge: Edge) => {
        edges.push(edge);
      });
    }
    return edges;
  };

  addNode = (node: Node): void => {
    this.connections[node.id] = new LinkedList<Edge>();
  };

  addEdge = (src: Node, dest: Node, weight: number): void => {
    let edge: Edge = new Edge(src, dest, weight);
    this.connections[src.id].append(edge);
    this.edgeCount++;
  };

  print = (): void => {
    for (let i: number = 0; i < this.vertexCount(); i++) {
      let edgeList: LinkedList<Edge> = this.connections[i];
      edgeList.toArray().forEach((edge: Edge) => {
        edge.print();
      });
    }
  };
}

export default Graph;
