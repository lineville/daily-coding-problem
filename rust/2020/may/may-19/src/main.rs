// * Daily Coding Problem May 19 2020.

// * [Medium] -- Yahoo

// * Write an algorithm that computes the reversal of a directed graph. 
// ! Ex: 1 -> 2 -> 3, it should become 1 <- 2 <- 3

use petgraph::graph::{Graph};
use petgraph::dot::{Dot, Config};


fn reverse_graph(graph: Graph<i32, ()>) -> Graph<i32, ()> {
    return graph;
}

#[test]
fn test_reverse_graph() {
    let g = Graph::<i32, ()>::from_edges(&[(1, 2), (2, 3)]);

    assert_eq!(g.raw_edges().len(), reverse_graph(g).raw_edges().len());
}

fn main() {
    let g = Graph::<i32, ()>::from_edges(&[(1, 2), (2, 3)]);
    let rev = reverse_graph(g);

    println!("{:?}", Dot::with_config(&rev, &[Config::NodeIndexLabel]));
}
