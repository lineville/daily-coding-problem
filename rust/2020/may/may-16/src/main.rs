// * Daily Coding Problem May 16 2020

// * [Medium] -- Yelp

// * The horizontal distance of a binary tree node describes how far left or right the node will be when the tree is printed out.

// * More rigorously, we can define it as follows:
// * The horizontal distance of the root is 0.
// * The horizontal distance of a left child is hd(parent) - 1.
// * The horizontal distance of a right child is hd(parent) + 1.


#[derive(Debug)]
struct BinaryTree<T> where T: Ord {
    root: Option<Box<BinNode<T>>>,
}

#[derive(Debug)]
struct BinNode<T> where T: Ord {
    value: T,
    left: Option<Box<BinNode<T>>>,
    right: Option<Box<BinNode<T>>>,
}

macro_rules! insert_at {
    ($node:expr, $value:expr) => {
        {
            (move || {
                if let Some(ref mut node) = $node.as_mut() {
                    node.insert($value);
                    return
                }
                
                $node = Some(Box::new(BinNode::new($value)));
            })()
        }
    };
}


impl<T> BinaryTree<T> where T: Ord {
    fn new() -> Self {
        BinaryTree {
            root: None,
        }
    }

    fn insert(&mut self, value: T) {
        insert_at!(self.root, value);
    }

}


impl<T> BinNode<T> where T: Ord {
    fn new(value: T) -> Self {
        BinNode {
            value: value,
            left: None,
            right: None,
        }
    }

    fn insert(&mut self, value: T) {
        if value <= self.value {
            insert_at!(self.left, value);
        } else {
            insert_at!(self.right, value);
        }
    }


    fn horizontal_distance(&mut self, value: T, distance: i32) -> i32 {

        if self.value == value {
            return distance;
        }

        if self.value > value {
            return self.left.as_mut().unwrap().horizontal_distance(value, distance - 1);
        }

        if self.value < value {
            return self.right.as_mut().unwrap().horizontal_distance(value, distance + 1);
        }
        return distance;
    }

}

fn main() {
    let mut tree = BinaryTree::new();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
    tree.insert(1);
    tree.insert(4);
    tree.insert(0);
    tree.insert(6);
    tree.insert(9);
    tree.insert(8);
    println!("{:#?}", tree);
    println!("Horizontal Distance of root: {}", tree.root.unwrap().horizontal_distance(5, 0));

}
 

#[test]
fn test_horizontal_distance_1() {
    let mut tree = BinaryTree::new();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
    tree.insert(1);
    tree.insert(4);
    tree.insert(0);
    tree.insert(6);
    tree.insert(9);
    tree.insert(8);
    assert_eq!(tree.root.unwrap().horizontal_distance(1, 0), -2);
}

#[test]
fn test_horizontal_distance_2() {
    let mut tree = BinaryTree::new();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
    tree.insert(1);
    tree.insert(4);
    tree.insert(0);
    tree.insert(6);
    tree.insert(9);
    tree.insert(8);
    assert_eq!(tree.root.unwrap().horizontal_distance(5, 0), 0);
}

#[test]
fn test_horizontal_distance_3() {
    let mut tree = BinaryTree::new();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
    tree.insert(1);
    tree.insert(4);
    tree.insert(0);
    tree.insert(6);
    tree.insert(9);
    tree.insert(8);
    assert_eq!(tree.root.unwrap().horizontal_distance(6, 0), 0);
}

#[test]
fn test_horizontal_distance_4() {
    let mut tree = BinaryTree::new();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
    tree.insert(1);
    tree.insert(4);
    tree.insert(0);
    tree.insert(6);
    tree.insert(9);
    tree.insert(8);
    assert_eq!(tree.root.unwrap().horizontal_distance(9, 0), 2);
}