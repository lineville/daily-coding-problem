// * Daily Coding Problem October 14 2020

// * [Hard] -- Google

use std::fmt::Debug;

pub struct Stack<T>
where
    T: Copy + Debug,
{
    values: Vec<T>,
}

pub trait IStack<T>
where
    T: Copy + Debug,
{
    fn push(&mut self, item: T);
    fn pop(&mut self) -> Option<T>;
    fn peek(&self) -> Option<T>;
    fn is_empty(&self) -> bool;
    fn clear(&mut self);
}

impl<T> IStack<T> for Stack<T>
where
    T: Copy + Debug,
{
    fn push(&mut self, item: T) {
        self.values.push(item);
    }

    fn pop(&mut self) -> Option<T> {
        self.values.pop()
    }

    fn peek(&self) -> Option<T> {
        match self.is_empty() {
            true => None,
            false => Some(self.values[self.values.len() - 1]),
        }
    }

    fn is_empty(&self) -> bool {
        self.values.len() == 0
    }

    fn clear(&mut self) {
        self.values.clear();
    }
}

trait IQuack<T>
where
    T: Copy + Debug,
{
    fn push(&mut self, item: T);
    fn pop(&mut self) -> Option<T>;
    fn pull(&mut self) -> Option<T>;
    fn show(&self);
}

struct Quack<T>
where
    T: Copy + Debug,
{
    stack1: Stack<T>,
    stack2: Stack<T>,
    stack3: Stack<T>,
    size: usize,
}

impl<T> IQuack<T> for Quack<T>
where
    T: Copy + Debug,
{
    fn push(&mut self, item: T) {
        self.stack1.push(item);
        self.stack2.push(item);
        self.size += 1;
    }

    fn pop(&mut self) -> Option<T> {
        if self.size == 0 {
            self.stack1.clear();
            self.stack2.clear();
            return None;
        }

        self.stack2.pop();
        self.size -= 1;
        return self.stack1.pop();
    }

    fn pull(&mut self) -> Option<T> {
        if self.size == 0 {
            self.stack1.clear();
            self.stack2.clear();
            return None;
        } else if self.stack3.is_empty() {
            while !self.stack2.is_empty() {
                self.stack3.push(self.stack2.pop().take().unwrap());
            }
        }

        self.size -= 1;
        return self.stack3.pop();
    }

    fn show(&self) {
        println!("{:?}", self.stack1.values);
        println!("{:?}", self.stack2.values);
        println!("{:?}", self.stack3.values);
    }
}

fn main() {
    println!("Quack!");
    let mut q = Quack::<u32> {
        stack1: Stack { values: vec![] },
        stack2: Stack { values: vec![] },
        stack3: Stack { values: vec![] },
        size: 0,
    };

    q.push(1);
    q.push(2);
    q.push(3);
    q.push(4);
    q.push(5);
    q.push(6);
    q.push(7);
    q.show();

    let popped = q.pop();
    println!("Popped {:?}", popped);
    q.show();

    let pulled = q.pull();
    println!("Pull {:?}", pulled);
    q.show();
}

// _______________________________TESTS__________________________

#[test]
fn test_push() {
    let mut q = Quack::<u32> {
        stack1: Stack { values: vec![] },
        stack2: Stack { values: vec![] },
        stack3: Stack { values: vec![] },
        size: 0,
    };

    q.push(1);
    q.push(2);
    q.push(3);

    assert_eq!(q.size, 3);
}

#[test]
fn test_pull() {
    let mut q = Quack::<u32> {
        stack1: Stack { values: vec![] },
        stack2: Stack { values: vec![] },
        stack3: Stack { values: vec![] },
        size: 0,
    };

    q.push(1);
    q.push(2);
    q.push(3);

    let pulled = q.pull().unwrap();
    assert_eq!(pulled, 1);
}

#[test]
fn test_pop() {
    let mut q = Quack::<u32> {
        stack1: Stack { values: vec![] },
        stack2: Stack { values: vec![] },
        stack3: Stack { values: vec![] },
        size: 0,
    };

    q.push(1);
    q.push(2);
    q.push(3);

    let popped = q.pop().unwrap();
    assert_eq!(popped, 3);
}

#[test]
fn test_pop_empty() {
    let mut q = Quack::<u32> {
        stack1: Stack { values: vec![] },
        stack2: Stack { values: vec![] },
        stack3: Stack { values: vec![] },
        size: 0,
    };

    let popped = q.pop();
    assert_eq!(popped, None);
}

#[test]
fn test_pull_empty() {
    let mut q = Quack::<u32> {
        stack1: Stack { values: vec![] },
        stack2: Stack { values: vec![] },
        stack3: Stack { values: vec![] },
        size: 0,
    };

    let pulled = q.pull();
    assert_eq!(pulled, None);
}
