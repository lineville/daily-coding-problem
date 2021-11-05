// * Daily Coding Problem November 5 2021

// * [Easy] -- Amazon

// Implement a stack that has the following methods:

// push(val), which pushes an element onto the stack
// pop(), which pops off and returns the topmost element of the stack. If there are no elements in the stack, then it should throw an error or return null.
// max(), which returns the maximum value in the stack currently.
//   If there are no elements in the stack, then it should throw an error or return null.
// ! Constraint: Each method should run in constant time.

trait IStack {
    fn push(&mut self, val: i32);
    fn pop(&mut self) -> i32;
    fn max(&self) -> i32;
}

struct Stack {
    stack: Vec<i32>,
    max: i32,
}

impl IStack for Stack {
    // Pushes val onto the stack, and if this is the new biggest max reset the max
    fn push(&mut self, val: i32) {
        
        // If stack is not empty and value is bigger than max, set max to value
        if self.stack.len() == 0 {
            self.max = val;
            self.stack.push(val);
            return;
        } 
        
        // If value is bigger than max, update max to be 2 * value - max
        if val > self.max {
            self.stack.push(2 * val - self.max); // This is the trick
            self.max = val;
        } else {
            self.stack.push(val);
        }
     
    }

    // Removes the topmost element from the stack, and returns it
    // Updates max element if it was popped off
    fn pop(&mut self) -> i32 {
        if self.stack.len() == 0 {
            panic!("Stack is empty");
        }

        let top = self.stack.pop().unwrap();

        if top > self.max {
            self.max = (2 * self.max) - top; // This is the trick
        }
        return top;
    }

    // Returns the max value in the stack
    fn max(&self) -> i32 {
        if self.stack.len() == 0 {
            panic!("Stack is empty");
        }

        return self.max;
    }
}

fn main() {
    let mut s = Stack {
        stack: vec![],
        max: 0,
    };
    s.push(1);
    s.push(2);
    s.push(3);
    s.push(4);
    let mut max = s.max();
    println!("Max: {:?}", max);

    s.pop();
    max = s.max();
    println!("Max: {:?}", max);
}
