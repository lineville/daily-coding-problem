// * Daily Coding Problem August 3rd 2022

// * [Medium] -- Apple

// Suppose you have a multiplication table that is N by N. 
// That is, a 2D array where the value at the i-th row and j-th column 
// is (i + 1) * (j + 1) (if 0-indexed) or i * j (if 1-indexed).

// Given integers N and X, write a function that returns the number of times 
// X appears as a value in an N by N multiplication table.

// For example, given N = 6 and X = 12, you should return 4

fn create_multiplication_table(n: usize) -> Vec<Vec<usize>> {
    let mut table = Vec::new();
    for i in 0..n {
        let mut row = Vec::new();
        for j in 0..n {
            row.push((i + 1) * (j + 1));
        }
        table.push(row);
    }
    table
}

fn num_occurrences(n: usize, x: usize) -> usize {
    let table = create_multiplication_table(n);
    
    let mut count = 0;
    for row in table {
        for elem in row {
            if elem == x {
                count += 1;
            }
        }
    }
    count
}

fn main() {
    println!("{}", num_occurrences(6, 12));
}
