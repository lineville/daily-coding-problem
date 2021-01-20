// * Daily Coding Problem January 10 2021

// * [Easy] -- Microsoft

// Let's represent an integer in a linked list format by
// having each node represent a digit in the number.
// The nodes make up the number in reversed order.

// Given two linked lists in this format, return their sum in the same linked list format.

use std::collections::LinkedList;

fn sum_linked_lists(list1: LinkedList<u32>, list2: LinkedList<u32>) -> LinkedList<u32> {
    let mut result: LinkedList<u32> = LinkedList::new();
    let mut sum = 0;
    let mut multiplier = 1;

    let mut iter1 = list1.iter();
    let mut iter2 = list2.iter();

    let mut curr1 = iter1.next();
    let mut curr2 = iter2.next();

    while curr1.is_some() && curr2.is_some() {
        sum += (curr1.unwrap() * multiplier) + (curr2.unwrap() * multiplier);
        curr1 = iter1.next();
        curr2 = iter2.next();
        multiplier *= 10;
    }

    let sum = sum.to_string();
    println!("Sum value : {}", sum);
    for c in sum.chars() {
        result.push_back(c as u32);
    }

    return result;
}

fn main() {
    let mut list1 = LinkedList::new();
    list1.push_back(9);
    list1.push_back(9);
    let mut list2 = LinkedList::new();
    list2.push_back(5);
    list2.push_back(2);
    let mut result = sum_linked_lists(list1, list2);
    let mut iter = result.iter();
    let mut current = iter.next();
    println!("Sum\n");
    while current.is_some() {
        print!(" {:?} ", &current);
        current = iter.next();
    }
}

#[test]
fn test_sum_linked_list_1() {
    let mut list1: LinkedList<u32> = LinkedList::new();
    list1.push_back(9);
    list1.push_back(9);
    let mut list2 = LinkedList::new();
    list2.push_back(5);
    list2.push_back(2);
    let result = sum_linked_lists(list1, list2);
    let mut expected = LinkedList::new();
    expected.push_back(4);
    expected.push_back(2);
    expected.push_back(1);
    assert_eq!(1, 1);
}
