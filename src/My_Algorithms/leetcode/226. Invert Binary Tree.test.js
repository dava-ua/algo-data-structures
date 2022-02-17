// https://leetcode.com/problems/invert-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// my initial solution
const invertTree = function (root) {
  // create a queue and a variable to store the values of nodes visited
  const queue = [root];
  // loop as long as there is anything in the queue
  while (queue.length) {
    // dequeue a node from the queue
    const node = queue.shift();
    if (node != null) {
      [node.left, node.right] = [node.right, node.left];
      queue.push(node.left, node.right);
    }
  }
  // return final inverted nodes array
  return root;
};

/* leetcode solutions */

// Recursion
function invertTreeRecursion(root) {
  if (root == null) return root;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
}

// DFS
function invertTreeDFS(root) {
  const stack = [root];

  while (stack.length) {
    const n = stack.pop();
    if (n != null) {
      [n.left, n.right] = [n.right, n.left];
      stack.push(n.left, n.right);
    }
  }

  return root;
}

// BFS
function invertTreeBFS(root) {
  const queue = [root];

  while (queue.length) {
    const n = queue.shift();
    if (n != null) {
      [n.left, n.right] = [n.right, n.left];
      queue.push(n.left, n.right);
    }
  }

  return root;
}
