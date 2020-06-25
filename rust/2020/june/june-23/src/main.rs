// * Daily Coding Problem June 23 2020

// * [Medium] -- PayPal

// * Given a string and a number of lines k, print the string in zigzag form.
// * In zigzag, characters are printed out diagonally from top left to bottom right
// * until reaching the kth line, then back up to top right, and so on.

// ! Ex: "thisisazigzag" k = 4
// * t     a     g (5 spaces)
// *  h   s z   a
// *   i i   i z
// *    s     g

fn zigzag(word : &str, k : usize) {
    let mut grid = vec![vec![' '; word.len()]; k];
    
    let mut row = 0;
    let mut col = 0;
    let mut down = true;

    for c in word.chars() {
        grid[row][col] = c;
        col += 1;

        if down {
            if row == k - 1 {
                down = false;
                row -= 1;
            } else {
                row += 1;
            }
        } else {
            if row == 0 {
                down = true;
                row += 1;
            } else {
                row -= 1;
            }
        }
    }

    for row in grid.iter() {
        let stringified_row : String = row.into_iter().collect(); 
        println!("{}", stringified_row);
    }

}


fn main() {
    zigzag("ILoveLindaVeryVeryMuch", 6);
}


