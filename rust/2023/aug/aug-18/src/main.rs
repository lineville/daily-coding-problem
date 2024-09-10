
// Given an array of numbers of length N, find both the minimum and maximum using less than 2 * (N - 2) comparisons.

fn find_min_and_max(arr: &[i32]) -> (i32, i32) {
    let mut min = arr[0];
    let mut max = arr[0];

    let mut comparisons = 0;

    for i in 1..arr.len() {
        if arr[i] < min {
            comparisons += 1;
            min = arr[i];
        } else if arr[i] > max {
            comparisons += 1;
            max = arr[i];
        }
    }

    println!("Comparisons: {}", comparisons);
    (min, max)
}

fn main() {
    // create an array of values 1 to 1000
    let mut arr = [0; 1000];
    for i in 0..arr.len() {
        arr[i] = i as i32 + 1;
    }
    let (min, max) = find_min_and_max(&arr);
    println!("Min: {}, Max: {}", min, max);
    println!("Max Allowed Comparisons: {}", 2 * (arr.len() - 2));
}
