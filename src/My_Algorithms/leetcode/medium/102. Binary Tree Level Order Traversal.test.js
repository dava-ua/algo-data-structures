// https://leetcode.com/problems/binary-tree-level-order-traversal/

import BinaryTreeNode from '../../../patterns/tree/BinaryTreeNode';

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
 * @return {number[][]}
 */
const levelOrder = function (root) {
  // If root is null return an empty array
  if (!root) return [];

  const queue = [root]; // initialize the queue with root
  const levels = []; // declare output array

  while (queue.length !== 0) {
    const queueLength = queue.length; // Get the length prior to dequeueing
    const currLevel = []; // Declare this level
    // loop through to exhaust all options and only to include nodes at currLevel
    for (let i = 0; i < queueLength; i++) {
      // Get next node
      const current = queue.shift();

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      // After we add left and right for current, we add to currLevel
      currLevel.push(current.val);
    }
    // Level has been finished. Push into output array
    levels.push(currLevel);
  }
  return levels;
};

describe('levelOrder', () => {
  it('levelOrder', () => {
    const node3 = new BinaryTreeNode(3);
    const node9 = new BinaryTreeNode(9);
    const node20 = new BinaryTreeNode(20);
    const node15 = new BinaryTreeNode(15);
    const node7 = new BinaryTreeNode(7);

    node3.setLeft(node9).setRight(node20);
    node20.setLeft(node15).setRight(node7);

    expect(levelOrder(node3)).toStrictEqual([[3], [9, 20], [15, 7]]);
  });
});
