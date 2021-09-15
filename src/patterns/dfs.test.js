// https://javascript.plainenglish.io/tree-traversal-in-javascript-9b1e92e15abb
import BinaryTreeNode from '../data-structures/tree/BinaryTreeNode';

function inOrderDFS(root) {
  // a variable to store the visited nodes
  const result = [];
  // helper function -- accepts a node
  function traverse(node) {
    // if node has left, recursion to find the leftest leaf node
    if (node.left) traverse(node.left);
    // push the node to the result
    result.push(node.value);
    // if node has right, recursion to find the rightest leaf node
    if (node.right) traverse(node.right);
  }
  // invoke the helper function with the root
  traverse(root);
  // return the final result
  return result;
}

function preOrderDFS(root) {
  // create variable to store the visited nodes
  const result = [];
  // helper function accepts a node
  function traverse(node) {
    // push the node to the result
    result.push(node.value);
    // if the node has left, recursion to push it to the result
    if (node.left) traverse(node.left);
    // if the node has right, recursion to push it to the result
    if (node.right) traverse(node.right);
  }
  // invoke the helper function with the root
  traverse(root);
  // return final result
  return result;
}

function postOrderDFS(root) {
  // create a variable to store the visited nodes
  const result = [];
  // helper function accepts a node
  function traverse(node) {
    // if node has left, recursion to find the leftest node
    if (node.left) traverse(node.left);
    // if node has right, recursion to find the rightest node
    if (node.right) traverse(node.right);
    // push the node found in the result
    result.push(node.value);
  }
  // invoke helper function with root
  traverse(root);
  // return the final result
  return result;
}

describe('breadthFirstSearch', () => {
  it('should perform BFS operation on tree', () => {
    const nodeA = new BinaryTreeNode('A');
    const nodeB = new BinaryTreeNode('B');
    const nodeC = new BinaryTreeNode('C');
    const nodeD = new BinaryTreeNode('D');
    const nodeE = new BinaryTreeNode('E');
    const nodeF = new BinaryTreeNode('F');
    const nodeG = new BinaryTreeNode('G');

    nodeA.setLeft(nodeB).setRight(nodeC);
    nodeB.setLeft(nodeD).setRight(nodeE);
    nodeC.setLeft(nodeF).setRight(nodeG);

    // In-order traversing
    expect(inOrderDFS(nodeA).toString()).toBe('D,B,E,A,F,C,G');
    // Pre-order traversing
    expect(preOrderDFS(nodeA).toString()).toBe('A,B,D,E,C,F,G');
    // Post-order traversing
    expect(postOrderDFS(nodeA).toString()).toBe('D,E,B,F,G,C,A');
  });
});
