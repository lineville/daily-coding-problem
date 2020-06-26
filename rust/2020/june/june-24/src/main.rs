// * Daily Coding Problem June 26 2020

// * [Easy] -- Microsoft


// * The transitive closure of a graph is a measure of which vertices are reachable from other vertices. 
// * It can be represented as a matrix M, where M[i][j] == 1 if there is a path between vertices i and j, 
// * and otherwise 0.

// ! Ex: Given the following graph in adjacency list form: 
// * graph = [
// *     [0, 1, 3],
// *     [1, 2],
// *     [2],
// *     [3]
// * ]

// * should return
// * [1, 1, 0, 1]
// * [0, 1, 1, 0]
// * [0, 0, 1, 0]
// * [0, 0, 0, 1]


fn adjacency_matrix(adjacency_list: Vec<Vec<u8>>) -> Vec<Vec<u8>> {
    let mut graph = vec![vec![0; adjacency_list.len()]; adjacency_list.len()];

    for (idx, adjacents) in adjacency_list.iter().enumerate() {
        for neighbor in adjacents.iter() {
            graph[idx as usize][*neighbor as usize] = 1;
        }
    }

    return graph;
}

#[test]
fn test_adjacency_matrix() {
    let adjacency_list = vec![vec![0, 1, 3], vec![1, 2], vec![2], vec![3]];
    let matrix = adjacency_matrix(adjacency_list);
    assert_eq!(matrix, vec![vec![1, 1, 0, 1], vec![0, 1, 1, 0], vec![0, 0, 1, 0], vec![0, 0, 0, 1]]);
}

fn main() {
    let adjacency_list = vec![vec![0, 1, 3], vec![1, 2], vec![2], vec![3]];
    println!("Adjacency List: {:?}", adjacency_list);
    let adjacency_matrix = adjacency_matrix(adjacency_list);
    println!("Adjacency Matrix");
    for row in adjacency_matrix.iter() {
        println!("{:?}", row);
    }
}
