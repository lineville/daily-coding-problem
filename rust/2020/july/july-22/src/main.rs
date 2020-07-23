// * Daily Coding Problem July 22 2020

// * [Medium] -- LinkedIn

// * A wall consists of several rows of bricks of various integer lengths and
// * uniform height. Your goal is to find a vertical line going from the top
// * to the bottom of the wall that cuts through the fewest number of bricks.
// * If the line goes through the edge between two bricks, this does not count as a cut.

// ! Ex:
// ! [[3, 5, 1, 1],
// !  [2, 3, 3, 2],
// !  [5, 5],
// !  [4, 4, 2],
// !  [1, 3, 3, 3],
// !  [1, 1, 6, 1, 1]]

// * Best way is to cut after eighth brick which results in 2 cuts

use std::cmp;
use std::collections::HashMap;

fn least_cuts_through_bricks(bricks: &Vec<Vec<u32>>) -> u32 {
    let mut map: HashMap<u32, u32> = HashMap::new();
    for row in bricks.iter() {
        let mut sum = 0;
        for brick in row.iter() {
            sum += brick;
            match &map.get(&sum) {
                Some(&v) => &map.insert(sum, v + 1),
                None => &map.insert(sum, 1),
            };
        }
    }

    let mut max_bricks_passed = 0;
    for &bricks_passed in map.values() {
        max_bricks_passed = cmp::max(bricks_passed, max_bricks_passed);
    }

    return bricks.len() as u32 - max_bricks_passed;
}

#[test]
fn test_least_cuts_through_bricks_1() {
    let bricks = vec![
        vec![3, 5, 1, 1],
        vec![2, 3, 3, 2],
        vec![5, 5],
        vec![4, 4, 2],
        vec![1, 3, 3, 3],
        vec![1, 1, 6, 1, 1],
    ];
    assert_eq!(least_cuts_through_bricks(&bricks), 2);
}

fn main() {
    let bricks = vec![
        vec![3, 5, 1, 1],
        vec![2, 3, 3, 2],
        vec![5, 5],
        vec![4, 4, 2],
        vec![1, 3, 3, 3],
        vec![1, 1, 6, 1, 1],
    ];
    println!("Bricks!!\n{:?}", bricks);
    println!(
        "Least number of cuts is {}",
        least_cuts_through_bricks(&bricks)
    );
}
