// * Daily Coding Problem September 29 2022

// * [Easy] -- Twitter

// A permutation can be specified by an array P, where P[i] represents the
// location of the element at i in the permutation. For example, [2, 1, 0]
// represents the permutation where elements at the index 0 and 2 are swapped.

// Given an array and a permutation, apply the permutation to the array.
// For example, given the array ["a", "b", "c"] and the
// permutation [2, 1, 0], return ["c", "b", "a"].

fn apply_permutation<T: Copy>(arr: Vec<T>, perm: Vec<usize>) -> Vec<T> {
    let mut result = Vec::with_capacity(arr.len());
    for i in 0..arr.len() {
        result[perm[i]] = arr[i];
    }
    result
}

fn main() {
    let arr = vec!["a", "b", "c"];
    let perm = vec![2, 1, 0];
    println!("Array: {:?}", arr);
    println!("Permutation: {:?}", perm);

    let result = apply_permutation(arr, perm);
    println!("Result: {:?}", result);
}
