// * Daily Coding Problem November 23 2020

// * [Easy] -- Snapchat

// * Given an array of time intervals (start, end) for classroom lectures (possibly overlapping),
// * find the minimum number of rooms required.

// ! Ex: [(30, 75), (0, 50), (60, 150)] ==> 2 classrooms

fn rooms_needed(classes: &Vec<(u32, u32)>) -> u32 {
    let mut result = 0;

    return result;
}

fn main() {
    let classes = vec![(30, 75), (0, 50), (60, 150)];
    let result = rooms_needed(&classes);
    println!("Classes: {:?}\nRooms Needed: {}", classes, result);
}

// * _________________________TESTS_________________________

#[test]
fn test_rooms_needed_1() {
    let classes = vec![(30, 75), (0, 50), (60, 150)];
    assert_eq!(rooms_needed(&classes), 2);
}

#[test]
fn test_rooms_needed_2() {
    let classes = vec![(30, 75), (0, 50), (60, 150), (150, 200)];
    assert_eq!(rooms_needed(&classes), 2);
}
