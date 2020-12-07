// * Daily Coding Problem December 7th 2020

// * [Easy] -- Google

// * You are in an inifinite 2D grid and can move in any of the 8
// * directions (Up, Down, Left, Right, 4 diagonals)

// * You are given an ordered sequence or points in which you need to visit them
// * starting from the first one. Return the minimum number of steps needed to visit
// * the points in the given order

use std::cmp;

fn minimum_distance_to_visit(points: &Vec<(i32, i32)>) -> u32 {
    let mut distance = 0;

    for (i, &point) in points.iter().enumerate() {
        // * Stop at the last pair
        if i == points.len() - 1 {
            break;
        }
        let next_point = points[i + 1];
        let steps_to_next_point = steps_between_points(point, next_point);
        distance += steps_to_next_point;
    }

    return distance;
}

fn steps_between_points(src: (i32, i32), dest: (i32, i32)) -> u32 {
    let delta_x = (src.0 - dest.0).wrapping_abs() as u32;
    let delta_y = (src.1 - dest.1).wrapping_abs() as u32;
    return cmp::max(delta_x, delta_y);
}

fn main() {
    let points = vec![(0, 0), (1, 1), (1, 2)];
    let result = minimum_distance_to_visit(&points);
    println!("Points: {:?} --> Distance: {}", points, result);
}

// * ________________________TESTS___________________________

#[test]
fn test_minimum_distance_1() {
    let points = vec![(0, 0), (1, 1), (1, 2)];
    assert_eq!(minimum_distance_to_visit(&points), 2);
}

#[test]
fn test_minimum_distance_2() {
    let points = vec![(0, 0), (20, -15), (100, 25), (50, 45)];
    assert_eq!(minimum_distance_to_visit(&points), 150);
}
