// * Daily Coding Problem Feb 27 2020

// * [Medium] -- Google

// * Given an N by M matrix consisting only of 1's and 0's, 
// * find the largest rectangle containing only 1's and return its area.




#[test]
fn main() {
    let mut total = 0;
    // * Creates a 10 x 10 grid of all zeroes
    let mut grid: [[i32; 10]; 10] = [[0; 10]; 10];
    for (i, row) in grid.iter_mut().enumerate() {
        for (y, col) in row.iter_mut().enumerate() {
            total += 1;
            println!("{}", col);
        }
    }
    assert_eq!(total,100);
}
