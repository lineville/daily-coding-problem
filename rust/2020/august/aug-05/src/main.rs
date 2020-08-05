// * Daily Coding Problem August 5th 2020

// * [Medium] -- StitchFix

// * Pascal's triangle is a triangular array of integers constructed with the following formula:

// * The first row consists of the number 1.
// * For each subsequent row, each element is the sum of the numbers directly above it, on either side.

// *     1
// *    1 1
// *   1 2 1
// *  1 3 3 1
// * 1 4 6 4 1

// * Given an input k, return the kth row of Pascal's triangle in O(k) space

fn pascal_triangle(k: usize) -> Vec<usize> {
    match k {
        0 => vec![1],
        _ => {
            let previous_row = pascal_triangle(k - 1);
            let mut result = vec![1];

            for (i, num) in previous_row.iter().enumerate() {
                if i == 0 {
                    continue;
                } else {
                    result.push(num + previous_row[i - 1]);
                }
            }
            result.push(1);
            return result;
        }
    }
}

#[test]
fn test_pascal_triangle_1() {
    assert_eq!(pascal_triangle(0), vec![1]);
}

#[test]
fn test_pascal_triangle_2() {
    assert_eq!(pascal_triangle(1), vec![1, 1]);
}

#[test]
fn test_pascal_triangle_3() {
    assert_eq!(pascal_triangle(2), vec![1, 2, 1]);
}

#[test]
fn test_pascal_triangle_4() {
    assert_eq!(pascal_triangle(3), vec![1, 3, 3, 1]);
}

#[test]
fn test_pascal_triangle_5() {
    assert_eq!(pascal_triangle(4), vec![1, 4, 6, 4, 1]);
}

fn main() {
    println!("Pascal Triangle");
    println!("{:?}", pascal_triangle(0));
    println!("{:?}", pascal_triangle(1));
    println!("{:?}", pascal_triangle(2));
    println!("{:?}", pascal_triangle(3));
    println!("{:?}", pascal_triangle(4));
    println!("{:?}", pascal_triangle(5));
    println!("{:?}", pascal_triangle(6));
    println!("{:?}", pascal_triangle(7));
}
