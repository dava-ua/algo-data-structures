/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList_fast = function (head) {
  // find middle
  // by moving "fast" twice, we'll have "slow" in the middle
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse second half
  // with reverse linked list solution
  let prev = null;
  let cur = slow.next;
  while (cur) {
    const temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }

  slow.next = null;

  // combine two halves
  let h1 = head;
  let h2 = prev;

  // if even, second half will be smaller
  while (h2) {
    const temp = h1.next;
    h1.next = h2;
    h1 = h2;
    h2 = temp;
  }
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList_stack_simple = function (head) {
  const stack = [];
  let node = head;
  if (!node) return;

  while (node) {
    stack.push(node);
    node = node.next;
  }

  const len = stack.length;
  node = head;

  for (let i = 0; i < len; i++) {
    if (i % 2 === 0) node.next = stack.shift();
    else node.next = stack.pop();
    node = node.next;
  }
  node.next = null;
};
