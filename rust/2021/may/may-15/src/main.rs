// * Daily Coding Problem May 15th 2021

// * [Medium] -- Uber

// * Implement a 2D iterator class. It will be initialized with an array of arrays, and should implement the following methods:

// next(): returns the next element in the array of arrays. If there are no more elements, raise an exception.
// has_next(): returns whether or not the iterator still has elements left.

// Don't use flatten

struct TwoDimensionalIterator {
    vectors: Vec<Vec<i32>>,
    current_position: (usize, usize),
    is_done: bool
}

impl Default for TwoDimensionalIterator {
    fn default() -> TwoDimensionalIterator {
        TwoDimensionalIterator {
            vectors: vec![],
            current_position: (0, 0),
            is_done: false
        }
    }
}

impl TwoDimensionalIterator {

    fn next(&mut self) -> Option<i32> {
        let mut current_vector = self.vectors[self.current_position.0].clone();

        if current_vector.is_empty() {
            // Move to next vector
            self.current_position.0 = self.current_position.0 + 1;
            self.current_position.1 = 0;
            // Check if done with everything
            if self.current_position.0 >= self.vectors.len() {
                self.is_done = true;
            } else {
                // Try again
                return self.next();
            }

        } else {
            // Pop from front, move to next one
            let value = current_vector.remove(0);
            self.current_position.1 = self.current_position.1 + 1;
            self.vectors[self.current_position.0] = current_vector;
            return Some(value);
        }
        return None;
    }

    fn has_next(&self) -> bool {
        return self.is_done == false;
    }
}

fn main() {
    let mut two_dimensional_iterator : TwoDimensionalIterator = TwoDimensionalIterator { 
        vectors: vec![
            vec![1, 2],
            vec![3],
            vec![],
            vec![4, 5, 6],
            vec![7, 8]
        ],
        ..Default::default()
    };
    
    println!("2D Iterator\n");
    
    while two_dimensional_iterator.has_next() { 
        match two_dimensional_iterator.next() {
            Some(val) => { 
                println!("{}", val);
            },
            None => {
                println!("\nDone");
            }
        }
        
    }

}
