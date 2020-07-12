// * Daily Coding Problem July 12 2020

// * [Hard] -- Netflix

// * Given a sorted list of integers of length N, determine if an
// * element x is in the list without performing any multiplication,
// * division, or bit-shift operations. Do it in (log N) time

fn contains(list: &[i32], element: i32) -> bool {
    if list.len() == 0 {
        return false;
    }

    let middle_index = list.len() / 2;
    let middle_element = list[middle_index];

    if middle_element == element {
        return true;
    }

    if element > middle_element {
        return contains(&list[middle_index + 1..], element);
    }

    if element < middle_element {
        return contains(&list[..middle_index], element);
    }
    false
}

#[test]
fn test_contains_1() {
    assert_eq!(contains(&[1, 2, 3, 4, 5, 6], 5), true);
}

#[test]
fn test_contains_2() {
    assert_eq!(contains(&[1, 2, 3, 4, 5, 6], 7), false);
}

#[test]
fn test_contains_3() {
    assert_eq!(contains(&[1, 2, 3, 4, 5, 6], -2), false);
}

fn main() {
    println!("Contains element");
    let nums = &[1, 2, 3, 4, 5, 6];
    let mut element = 5;
    println!(
        "{:?} contains {} ? --> {}",
        nums,
        element,
        contains(nums, element)
    );

    element = 7;

    println!(
        "{:?} contains {} ? --> {}",
        nums,
        element,
        contains(nums, element)
    );
}
