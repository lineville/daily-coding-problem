// * Daily Coding Problem October 16 2020

// * [Medium] -- Two Sigma

// * This problem was asked by Two Sigma.

// * Given two sorted iterators, merge it into one iterator.

// fn merge_iterators<'a, I>(iter1: I, iter2: I) -> I
// where
//     I: Iterator<Item = &'a u32>,
// {
//     return iter1;
// }
use std::cmp;

fn merge_iterators_rec(iter1: Vec<u32>, iter2: Vec<u32>, mut result: Vec<u32>) -> Vec<u32> {
    let val1 = iter1.iter().next();
    let val2 = iter2.iter().next();

    match (val1, val2) {
        (None, None) => result,
        (Some(a), None) => {
            result.push(*a);
            merge_iterators_rec(iter1, iter2, result)
        }
        (None, Some(b)) => {
            result.push(*b);
            merge_iterators_rec(iter1, iter2, result)
        }
        (Some(a), Some(b)) => {
            result.push(cmp::min(*a, *b));
            merge_iterators_rec(iter1, iter2, result)
        }
    }
}

fn merge_iterators(iter1: Vec<u32>, iter2: Vec<u32>) -> Vec<u32> {
    merge_iterators_rec(iter1, iter2, vec![])
}

fn main() {
    println!("Merge iterators!");
    let mut iter1 = vec![5, 10, 15];
    let mut iter2 = vec![3, 8, 9];
    let merged = merge_iterators(iter1, iter2);

    for num in merged.iter() {
        println!("{}", num);
    }
}

// _____________________________TESTS___________________________

#[test]
fn test_merge_iterators_1() {
    let mut iter1 = vec![5, 10, 15];
    let mut iter2 = vec![3, 8, 9];
    assert_eq!(merge_iterators(iter1, iter2), vec![3, 5, 8, 9, 10, 15]);
}
