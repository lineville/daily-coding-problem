// * Daily Coding Problem Feb 25 2020

// ********************************

// * [Easy] -- Facebook

// * Given a large array of numbers that are mostly zeroes, implement a new
// * more space efficient implementation of the following interface for spare_array.

// * init(arr, size) -- The original less efficient array and it's size.
// * set(i, val) -- set value at index i to new val
// * get(i) -- get the value at index i

// * Example: arr = [100 0's ... 1, 2, 100 zeroes, 3,4,0,0,5,0,0....0,0,9]
// * We should provide a data structure that provides equivalent functionality
// * but uses less memory.

// * Lets just use a HashMap and do it in rust using Traits and Structs.

use std::collections::HashMap;

struct SparseArray {
    map: HashMap<usize,i32>,
    size: usize
}

// * This is how we implement the constructor rather than including it in the trait definition
impl SparseArray {
    pub fn new(arr: Vec<i32>, size: usize) -> SparseArray {
        let mut efficient_array = SparseArray {
            map: HashMap::new(),
            size: 0
        };
        
        for (i, &v) in arr.iter().enumerate() {
            efficient_array.map.insert(i, v);
        }
        efficient_array
    }
}

// * This is similar to interfaces in other languages. It allows us to define abstract functionality
trait Accessible {
    fn get(&self, index: usize) -> i32;
    fn set(&self, index: usize, value: i32) -> ();
    fn size(&self) -> usize;
}

// * Rather that creating classes and objects like in traditional OO style, we individually
// * declare implementations of traits onto specific types. The glue between the methods and types
// * is thus more explicit and easy to track but limits the power of inheritance.
impl Accessible for SparseArray {
    fn get(&self, i: usize) -> i32 {
        match self.map.get(&i) {
            Some(&i) => i,
            None => 0
        }
    }

    fn set(&self, i: usize, value: i32) {
        self.map.insert(i, value);
        self.size += 1;
    }

    // fn init(mut &self, arr: [i32; 500], size: usize) -> SparseArray {
    //     self = &SparseArray::new();
    //     self.size = 0;
    //     for val in arr.iter() {
    //         self.set(self.size, *val);
    //     }
    //     *self
    // }

    fn size(&self) -> usize {
        self.size
    }
}


#[test]
fn test_sparse_array_get() {
    let mut arr: [i32; 500] = [0; 500];
    arr[5] = 1;
    arr[6] = 2;
    arr[7] = 3;
    arr[250] = 9;
    arr[251] = 10;
    arr[arr.len() - 1] = 2;

    // * init a new sparse_array and check that get(i) are as expected


}


fn main() {
    let mut arr: [i32; 500] = [0; 500];
    arr[arr.len() - 1] = 50;
    println!("first element of the array: {}", arr[0]);
    println!("last element of the array: {}", arr[arr.len() - 1]);
}
