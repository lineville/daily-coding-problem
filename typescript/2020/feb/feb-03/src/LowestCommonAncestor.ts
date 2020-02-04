import BinaryTree from "./BinaryTree";

// * Returns the binary tree node that is the lowest node in the tree beginning
// * at the root for which node1 and node2 are both descendents.
export function lowestCommonAncestor<T>(
  root: BinaryTree<T>,
  node1: BinaryTree<T>,
  node2: BinaryTree<T>
): BinaryTree<T> {

    // * The actual work
    
    // * If node2 is in the subtree then just return node1.parent
    // * If node1 is in the subtree of node2 then return node2.parent
    // * Otherwise they are both in different trees.
    // * Start at node1.
    // * Traverse up in the tree by parents and at each new node 
    // * check if node2 is in subtree, if it is return the node we are at.

    return root;
}
