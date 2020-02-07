// * Daily Coding Problem Feb 7th 2020

// * [Medium] -- Jane Street

// * Generate a finite but arbitrarily (unbound) Binary Tree in O(1) (constant time)
// * Tree size should be unknown at run times


// * General approach is to create a node, and flip a coin every step
// * to decide if we should expand and add to lef/right.
import Node from './Node'

export default function generate<T>(val : T) : Node<T> {
    const root : Node<T> = new Node<T>(val);
    if (coinFlip()) {
        root.left = generate(val);
    }
    if (coinFlip()) {
        root.right = generate(val);
    }
    return root;
}

const coinFlip = () :boolean => Math.random() < 0.50;