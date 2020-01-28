// * Daily Coding Problem

// * [Medium] --Pinterest

// * Given an integer list where each number represents the number of hops you can make, 
// * determine whether you can reach to the last index starting at index 0.

// ! Ex: [2, 0, 1, 0] -> True
// ! Ex: [1, 1, 0, 1] -> False

fn main() {
    println!("Daily Problem Jan 28 2020")
}


#[allow(dead_code)]
fn can_hop_there(arr: &[usize]) -> bool {
    let mut position: usize = 0;
    let mut next_position: usize;
    
    while position < arr.len() - 1 {
        next_position = position + arr[position];
        
        if next_position == position {
            return false;
        }
        position = next_position;
    }
    return true;
}

#[cfg(test)]
mod tests {

    use super::*;

    #[test]
    fn test_can_hop_there_1() {
        let numbers = &[2, 0, 1, 0];
        let result: bool = can_hop_there(numbers);
        assert_eq!(result, true);
    }


    #[test]
    fn test_can_hop_there_2() {
        let numbers = &[1, 1, 0, 1];
        let result: bool = can_hop_there(numbers);
        assert_eq!(result, false);
    }

    #[test]
    fn test_can_hop_there_3() {
        let numbers = &[0, 1, 0, 1];
        let result: bool = can_hop_there(numbers);
        assert_eq!(result, false);
    }

    #[test]
    fn test_can_hop_there_4() {
        let numbers = &[3, 0, 0, 1, 2, 0, 0];
        let result: bool = can_hop_there(numbers);
        assert_eq!(result, true);
    }
}

