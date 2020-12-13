// * Daily Coding Problem Dec 12 2020

// * [Easy] -- Microsoft

// * The transitive closure of a graph is a measure of which
// * vertices are reachable from other vertices. It can be represented
// * as a matrix M, where M[i][j] == 1 if there is a path between vertices
// * i and j, and otherwise 0.

// ! Ex: graph = [
// !    [0, 1, 3],
// !    [1, 2],
// !    [2],
// !    [3]
// !]

// ! Transitive closure of graph
// [1, 1, 1, 1]
// [0, 1, 1, 0]
// [0, 0, 1, 0]
// [0, 0, 0, 1]

fn transitive_closure(graph: &Vec<Vec<u32>>) -> Vec<Vec<u32>> {
    let mut result = vec![vec![0; graph.len()]; graph.len()];

    for (i, neighbors) in graph.iter().enumerate() {
        for &neighbor in neighbors.iter() {
            result[i][neighbor as usize] = 1;
            let other_neighbors = &graph[neighbor as usize];
            for &other in other_neighbors.iter() {
                result[i][other as usize] = 1;
            }
        }
    }

    return result;
}

fn main() {
    let graph = vec![vec![0, 1, 3], vec![1, 2], vec![2], vec![3]];
    let result = transitive_closure(&graph);
    println!("Transitive closure of graph: {:?}\n{:?}", graph, result);
}

#[test]
fn test_transitive_closure() {
    let graph = vec![vec![0, 1, 3], vec![1, 2], vec![2], vec![3]];

    assert_eq!(
        transitive_closure(&graph),
        vec![
            vec![1, 1, 1, 1],
            vec![0, 1, 1, 0],
            vec![0, 0, 1, 0],
            vec![0, 0, 0, 1]
        ]
    )
}
