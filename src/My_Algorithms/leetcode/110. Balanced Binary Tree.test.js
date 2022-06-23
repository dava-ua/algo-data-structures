// https://leetcode.com/problems/balanced-binary-tree/

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
 * @return {boolean}
 */
/* const isBalanced = function (root) {
  const queue = [root];
  let diff = 0;

  while (queue.length) {
    const node = queue.pop();
    if (node.left && node.right) {
      if (diff) { diff += 1; }
      queue.push(node.left, node.right);
    }
    if (node.right && !node.left) {
      queue.push(node.right);
      diff += 1;
    }
    if (node.left && !node.right) {
      queue.push(node.left);
      diff += 1;
    }
    if (diff >= 2) return false;
  }

  return true;
}; */

const height = (node) => {
  if (node === null) {
    return -1;
  }
  return 1 + Math.max(height(node.left), height(node.right));
};

var isBalanced = function (root) {
  if (root === null) {
    return true;
  }
  const diff = Math.abs(height(root.left) - height(root.right));
  return diff < 2
    && isBalanced(root.left)
    && isBalanced(root.right);
};
