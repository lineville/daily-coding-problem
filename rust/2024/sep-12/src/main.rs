
// Given a list of numbers L, implement a method sum(i, j) which returns the sum from the sublist L[i:j] (including i, excluding j).

// For example, given L = [1, 2, 3, 4, 5], sum(1, 3) should return sum([2, 3]), which is 5.

// You can assume that you can do some pre-processing. sum() should be optimized over the pre-processing step.

// Function that takes a list of numbers, and two indices, i and j, and returns the sum of the sublist L[i:j] (including i, excluding j).
fn sum_sublist(l: Vec<i32>, i: usize, j: usize) -> i32 {
    let preprocessed = preprocess(l);
    let sum = preprocessed[j] - preprocessed[i];
    sum
}


fn preprocess(l: Vec<i32>) -> Vec<i32> {
    let mut sum: i32 = 0;
    let mut preprocessed: Vec<i32> = vec![0; l.len()];
    for (idx, n) in l.iter().enumerate() {
        preprocessed[idx] = sum;
        sum += n;
    }
    preprocessed
}

fn main() {
    let l = vec![1, 2, 3, 4, 5];
    let i = 1;
    let j = 3;
    let result = sum_sublist(l, i, j);
    println!("The sum of the sublist L[{}:{}] is: {}", i, j, result);
}
