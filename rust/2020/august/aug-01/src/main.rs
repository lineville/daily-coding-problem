// * Daily Coding Problem August 1st 2020

// * [Medium] -- Glassdoor

// * An imminent hurricane threatens the coastal town of Codeville.
// * If at most two people can fit in a rescue boat, and the maximum weight
// * limit for a given boat is k, determine how many boats will be needed
// * to save everyone.

// ! Ex: [100, 200, 150, 80] are the weights of the people and limit k = 200
// * Should return 3 boats needed

fn boats_needed(weights: &[u32], limit: u32) -> u32 {
    let mut boats = 1;
    let mut current_boat_weight = 0;

    for person in weights.iter() {
        // * If we can fit this person in the current boat
        if person + current_boat_weight <= limit {
            current_boat_weight += person;
        } else {
            current_boat_weight = 0;
            boats += 1;
        }
    }
    return boats;
}

#[test]
fn test_boats_needed_1() {
    assert_eq!(boats_needed(&[100, 200, 150, 80], 200), 3);
}

fn main() {
    let weights = &[100, 200, 150, 80];
    let limit = 200;
    println!(
        "Weights of people --> {:?}\nBoat can carry at most {} lbs so {} boats are needed.",
        weights,
        limit,
        boats_needed(weights, limit)
    );
}
