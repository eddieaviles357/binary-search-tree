
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

  find(val) {
    let curr = this.root;

    while(curr) {
      // found node or node not found
      if(val === curr.val || !curr) break;

      (val < curr.val) ? curr = curr.left : curr = curr.right;
    };

    return (curr === null) ? undefined : curr;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, curr = this.root) {
    if(!curr) return;
    if(val === curr.val) return curr;

    return (val < curr.val) ? 
      this.findRecursively(val, curr.left) : 
      this.findRecursively(val, curr.right);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(visited = [], curr = this.root) {
    visited.push(curr.val);

    if(curr.left) this.dfsPreOrder(visited, curr.left);
    if(curr.right) this.dfsPreOrder(visited, curr.right);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(visited = [], curr = this.root) {

    function inOrder(node) {
      if(node.left) inOrder(node.left);
      visited.push(node.val)
      if(node.right) inOrder(node.right);
    };

    inOrder(curr);
    return visited;
  }

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
// let binarySearchTree = new BinarySearchTree();
// binarySearchTree
// .insert(15)
// .insert(20)
// .insert(10)
// .insert(12)
// .insert(1)
// .insert(5)
// .insert(50);
// binarySearchTree.dfsInOrder()
/**
 *       15
 *      /  \
 *     10  20
 *    /  \   \
 *   1   12  50
 *    \
 *    5
 * 
 * 
 * 
 */
module.exports = BinarySearchTree;
