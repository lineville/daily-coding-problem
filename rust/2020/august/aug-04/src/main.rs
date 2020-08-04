// * Daily Coding Problem August 4th 2020

// * [Medium] -- Square

// * A competitive runner would like to create a route that starts and ends
// * at his house, with the condition that the route goes entirely uphill
// * at first, and then entirely downhill.

// * Given a dictionary of places of the form {location: elevation}, and a
// * dictionary mapping paths between some of these locations to their
// *corresponding distances, find the length of the shortest route
// * satisfying the condition above. Assume the runner's home is location 0.

use std::collections::hash_map::Entry;
use std::collections::{HashMap, HashSet};

// * Getting the correct best weight but not the shortest path to get the optimal weight
fn find_path(mut elevations: HashMap<u32, u32>, weights: &Vec<Vec<u32>>) -> (Vec<u32>, u32) {
    let mut path_weights: HashMap<String, u32> = HashMap::new();
    let mut neighbors: HashMap<u32, Vec<u32>> = HashMap::new();

    for path in weights.iter() {
        path_weights.insert(
            format!("{}-{}", &path[0].to_string(), &path[1].to_string()),
            path[2],
        );

        match neighbors.entry(path[0]) {
            Entry::Vacant(e) => {
                e.insert(vec![path[1]]);
            }
            Entry::Occupied(mut e) => {
                e.get_mut().push(path[1]);
            }
        };
    }
    let mut current_path: Vec<u32> = vec![0];
    let mut best_path: Vec<u32> = Vec::new();
    return find_path_helper(
        &mut elevations,
        &mut path_weights,
        neighbors,
        &mut HashSet::<u32>::new(),
        false,
        0,
        &mut current_path,
        0,
        &mut best_path,
        std::u32::MAX,
    );
}

fn find_path_helper(
    elevations: &mut HashMap<u32, u32>,
    path_weights: &mut HashMap<String, u32>,
    neighbors: HashMap<u32, Vec<u32>>,
    visited: &mut HashSet<u32>,
    desc: bool,
    current: u32,
    current_path: &mut Vec<u32>,
    current_sum: u32,
    best_path: &mut Vec<u32>,
    best_weight: u32,
) -> (Vec<u32>, u32) {
    let mut current_best_weight = best_weight;
    for &neighbor in neighbors.get(&current).unwrap().iter() {
        let weight_key = format!("{}-{}", current.to_string(), neighbor.to_string());
        if neighbor == 0 {
            if elevations.get(&neighbor) < elevations.get(&current)
                && current_sum + path_weights.get(&weight_key).unwrap() < current_best_weight
            {
                best_path.clear();
                for &path in current_path.iter() {
                    best_path.push(path);
                }
                best_path.push(neighbor);
                current_best_weight = current_sum + path_weights.get(&weight_key).unwrap();
            }
        } else {
            let expect_desc = elevations.get(&neighbor) < elevations.get(&current);
            let is_valid = elevations.get(&neighbor) != elevations.get(&current)
                && (!desc || desc && expect_desc);

            if is_valid {
                visited.insert(neighbor);
                current_path.push(neighbor);
                current_best_weight = find_path_helper(
                    elevations,
                    path_weights,
                    neighbors.clone(),
                    visited,
                    expect_desc,
                    neighbor,
                    current_path,
                    current_sum + path_weights.get(&weight_key).unwrap(),
                    best_path,
                    current_best_weight,
                )
                .1;
            }
        }
    }

    return (best_path.to_vec(), current_best_weight);
}

fn main() {
    println!("Running route!");
    let mut elevations: HashMap<u32, u32> = HashMap::new();
    elevations.insert(0, 5);
    elevations.insert(1, 25);
    elevations.insert(2, 15);
    elevations.insert(3, 20);
    elevations.insert(4, 10);

    let weights: Vec<Vec<u32>> = vec![
        vec![0, 1, 10],
        vec![0, 2, 8],
        vec![0, 3, 15],
        vec![1, 3, 12],
        vec![2, 4, 10],
        vec![3, 4, 5],
        vec![3, 0, 17],
        vec![4, 0, 10],
        // vec![4, 2, 1],
    ];

    let (best_path, best_weight) = find_path(elevations, &weights);
    println!("Best path {:?}\n Best weight {:?}", best_path, best_weight);
}
