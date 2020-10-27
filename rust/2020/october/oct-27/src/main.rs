// * Daily Coding Problem October 27 2020

// * [Hard] -- Microsoft

// * Given an array of numbers arr and a window of size k,
// * print out the median of each window of size k starting from
// * the left and moving right by one position each time.

// * Returns an array of the medians of each k sized window of arr in order
fn medians(arr: &Vec<i32>, k: usize) -> Vec<f32> {
    let mut result: Vec<f32> = vec![];
    let mut start_index = 0;

    while start_index + k <= arr.len() {
        let slice = &arr[start_index..start_index + k];
        let median = median(&mut slice.to_vec());
        result.push(median);
        start_index += 1;
    }

    return result;
}

// * Computes the median of the array
fn median(arr: &mut Vec<i32>) -> f32 {
    arr.sort();
    let result = if arr.len() % 2 == 0 {
        let left_middle: f32 = arr[(arr.len() / 2) - 1] as f32;
        let right_middle: f32 = arr[arr.len() / 2] as f32;
        (left_middle + right_middle) / 2.0
    } else {
        let middle: f32 = arr[(arr.len() - 1) / 2] as f32;
        middle
    };
    return result;
}

fn main() {
    let k = 3;
    let arr = vec![-1, 5, 13, 8, 2, 3, 3, 1];
    let result = medians(&arr, k);

    println!("Median of all {} sized windows of {:?}", k, arr);
    println!("\n---------------------------------\n{:?}", result);
}

// * ________________________TESTS___________________________

#[test]
fn test_median_1() {
    assert_eq!(median(&mut vec![-1, 5, 13, 8]), 6.5);
}

#[test]
fn test_medians_1() {
    assert_eq!(
        medians(&vec![-1, 5, 13, 8, 2, 3, 3, 1], 3),
        vec![5.0, 8.0, 8.0, 3.0, 3.0, 3.0]
    )
}

#[test]
fn test_medians_2() {
    assert_eq!(
        medians(&vec![-1, 5, 13, 8, 2, 3, 3, 1], 4),
        vec![6.5, 6.5, 5.5, 3.0, 2.5]
    )
}
