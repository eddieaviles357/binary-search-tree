class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let curr = this.root;
    let node = new Node(val);

    if(curr === null) this.root = node;
    
    while(curr !== null) {
      // handle left side
      if(val <= curr.val)  {
        if(curr.left === null) {
          curr.left = node;
          break;
        }
        curr = curr.left;
      } else { // handle right
        if(curr.right === null) {
          curr.right = node;
          break;
        };
        curr = curr.right;
      };
    };

    return this;
  };

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, curr = this.root) {
    if(this.root === null) {
      this.root = new Node(val);
      return this;
    };

    if(val < curr.val) {
      if(curr.left === null) {
        curr.left = new Node(val);
        return this;
      };
      return this.insertRecursively(val, curr.left);
    } else {
      if(curr.right === null) {
        curr.right = new Node(val);
        return this;
      };
      return this.insertRecursively(val, curr.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  // find(val) {

  // }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  // findRecursively(val) {

  // }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  // dfsPreOrder() {

  // }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  // dfsInOrder() {

  // }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  // dfsPostOrder() {

  // }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  // bfs() {

  // }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  // remove(val) {

  // }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  // isBalanced() {

  // }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  // findSecondHighest() {
    
  // }
}

module.exports = BinarySearchTree;
