// * Daily Coding Problem July 13 2020

// * [Medium] -- Spotify

// * Write a function, throw_dice(N, faces, total), that determines how
// * many ways it is possible to throw N dice with some number of faces
// * each to get a specific total.

// ! Ex : throw_dice(3, 6, 7) should equal 15.

fn throw_dice(dies: i32, faces: i32, total: i32) -> u32 {
    // * We ran out of dies, if total is 0 this was a success.
    if dies == 0 {
        return if total == 0 { 1 } else { 0 };
    }

    // * Failure states
    if faces * dies < total || dies > total {
        return 0;
    }

    // * Calculate the rest of the die tosses and add to result
    let mut result = 0;

    for i in 1..=faces {
        result += throw_dice(dies - 1, faces, total - i as i32);
    }
    return result;
}

#[test]
fn test_throw_dice_1() {
    assert_eq!(throw_dice(3, 6, 7), 15);
}

#[test]
fn test_throw_dice_2() {
    assert_eq!(throw_dice(5, 20, 12), 330);
}

fn main() {
    let dies = 3;
    let faces = 6;
    let total = 7;
    let result = throw_dice(dies, faces, total);
    println!(
        "There are {} many ways to roll a {} with {} {}-sided dies",
        result, total, dies, faces
    );
}
