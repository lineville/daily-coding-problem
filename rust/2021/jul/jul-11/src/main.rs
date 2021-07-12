// * Daily Coding Problem July 11 2021

// * [Medium] -- Apple

// * Implement a job scheduler which takes in a function f and an integer n, 
// * and calls f after n milliseconds.

use std::{thread, time};

fn call_after_n_seconds(f: fn(), n: u64) {
    let duration = time::Duration::from_secs(n);
    thread::sleep(duration);
    f();
}

fn some_function() {
    println!("Hello world!");
}

fn main() {
    let n = 10;
    println!("Calling function in {} seconds", n);
    call_after_n_seconds(some_function, n);
}
