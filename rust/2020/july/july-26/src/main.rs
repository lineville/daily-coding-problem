// * Daily Coding Problem July 26 2020

// * [Easy] -- Mailchimp

// * You are given an array representing the heights of neighboring buildings on a city street,
// * from east to west. The city assessor would like you to write an algorithm that returns how
// * many of these buildings have a view of the setting sun, in order to properly value the street.

// ! Ex: [3, 7, 8, 3, 6, 1] --> 3 since buildings with heights 8, 6, and 1 can see the west.

fn can_see_sunset_total(buildings: &Vec<u32>) -> u32 {
    let mut total = 0;
    let mut highest_building = 0;

    // * Iterating in reverse so we go from west to east
    for &b in buildings.iter().rev() {
        if b > highest_building {
            total += 1;
            highest_building = b;
        }
    }

    return total;
}

#[test]
fn test_can_see_sunset_total_1() {
    let buildings: Vec<u32> = vec![3, 7, 8, 3, 6, 1];
    assert_eq!(can_see_sunset_total(&buildings), 3);
}

#[test]
fn test_can_see_sunset_total_2() {
    let buildings: Vec<u32> = vec![8, 10, 3, 7, 8, 3, 6, 1];
    assert_eq!(can_see_sunset_total(&buildings), 4);
}

fn main() {
    let buildings: Vec<u32> = vec![3, 7, 8, 3, 6, 1];
    println!("Building Analyzer!");
    println!("Buildings: {:?}", buildings);
    println!(
        "There are {} buildings that can see the sun set in the west.",
        can_see_sunset_total(&buildings)
    );
}
