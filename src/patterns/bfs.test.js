import BinaryTreeNode from '../data-structures/tree/BinaryTreeNode';

function breadthFirstSearch(root) {
  // create a queue and a variable to store the values of nodes visited
  const queue = [];
  const result = [];
  // initiate a node variable to store the current node
  let node;
  // push the root node to the queue
  queue.push(root);
  // loop as long as there is anything in the queue
  while (queue.length) {
    // dequeue a node from the queue
    // push the visited node into the result
    node = queue.shift();
    result.push(node.value);
    // push children to the queue
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  // return final traversed nodes array
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

    // In-order traversing.
    expect(breadthFirstSearch(nodeA).toString()).toBe('A,B,C,D,E,F,G');
  });
});
