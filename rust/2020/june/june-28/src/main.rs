// * Daily Coding Problem June 28 2020

// * [Easy] -- WhatsApp

// * Given an array of integers out of order, determine the bounds of the smallest window
//  * that must be sorted in order for the entire array to be sorted.
// ! Ex:  [3, 7, 5, 6, 9], you should return (1, 3).

fn main() {
    let integers = vec![3, 7, 5, 6, 9];
    println!(
        "Smallest unsorted slice of {:?} --> {:?}",
        integers,
        smallest_unsorted_slice(&integers)
    );
}

fn smallest_unsorted_slice(numbers: &Vec<i32>) -> (usize, usize) {
    let mut start: usize = 0;
    let mut end: usize = numbers.len() - 1;

    for (i, num) in numbers.iter().enumerate() {
        if i < numbers.len() - 1 && num > &numbers[i + 1] {
            start = i as usize;
            break;
        }
    }

    for (i, num) in numbers.iter().rev().enumerate() {
        if i < numbers.len() - 1 && num > &numbers[i + 1] {
            end = numbers.len() - i as usize;
            break;
        }
    }

    let mut min = numbers[start];
    let mut max = numbers[start];
    for i in start + 1..end {
        if numbers[i] > max {
            max = numbers[i];
        }
        if numbers[i] < min {
            min = numbers[i];
        }
    }

    for i in 0..start {
        if numbers[i] > min {
            start = i;
            break;
        }
    }

    for i in (end + 1..numbers.len() - 1).rev() {
        if numbers[i] < max {
            end = numbers.len() - i as usize;
            break;
        }
    }

    (start, end)
}

#[test]
fn test_smallest_unsorted_slice() {
    let result = smallest_unsorted_slice(&vec![3, 7, 5, 6, 9]);
    assert_eq!(result, (1, 3));
}
