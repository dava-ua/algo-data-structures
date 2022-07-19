// https://leetcode.com/problems/maximum-depth-of-binary-tree/

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
 * @return {number}
 */
const maxDepth = function (root) {
  if (!root) return 0;
  const queue = [root];
  let depth = 0;
  while (queue.length !== 0) {
    depth += 1;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      if (queue[i].left) queue.push(queue[i].left);
      if (queue[i].right) queue.push(queue[i].right);
    }
    queue.splice(0, len);
  }
  return depth;
};

// Solution 2: recursive

const maxDepth_recursive = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

const maxDepth_other = function (root) {
  function checkDepth(node, depth) {
    if (node === null) {
      return depth;
    }
    depth += 1;
    const left = checkDepth(node.left, depth);
    const right = checkDepth(node.right, depth);
    return Math.max(left, right);
  }
  return checkDepth(root, 0);
};
