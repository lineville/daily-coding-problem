// * Daily Coding Problem October 26 2020

// * [Easy] -- Google

// * You are writing an AI for a 2D map game. You are somewhere in a 2D grid,
// * and there are coins strewn about over the map.

// * Given the position of all the coins and your current position, find the
// * closest coin to you in terms of Manhattan distance. That is, you can move
// * around up, down, left, and right, but not diagonally. If there are multiple
// * possible closest coins, return any of them.

// * Finds the coin in the given vector of coin that is closest to current position.
fn closest_coin(current_position: (u32, u32), coins: &Vec<(u32, u32)>) -> (u32, u32) {
    let mut shortest_distance = std::u32::MAX;
    let mut closest_coin = coins[0];

    for &coin in coins.iter() {
        let distance = manhattan_distance(current_position, coin);
        if distance < shortest_distance {
            shortest_distance = distance;
            closest_coin = coin;
        }
    }
    return closest_coin;
}

// * Returns the manhattan distance between current position and coin
fn manhattan_distance(current_position: (u32, u32), coin: (u32, u32)) -> u32 {
    return (current_position.0 as i32 - coin.0 as i32).abs() as u32
        + (current_position.1 as i32 - coin.1 as i32).abs() as u32;
}

fn main() {
    let current_position = (0, 2);
    let coins = vec![(0, 4), (1, 0), (2, 0), (3, 2)];
    let result = closest_coin(current_position, &coins);
    println!("Closest coin to you is located at {:?}", result);
}

// * ____________________________TESTS______________________________

#[test]
fn test_closest_coin_1() {
    let coins = vec![(1, 0), (2, 0), (0, 4), (3, 2)];
    assert_eq!(closest_coin((0, 2), &coins), (0, 4));
}
