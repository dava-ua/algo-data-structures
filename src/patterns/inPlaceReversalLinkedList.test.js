// https://wsvincent.com/javascript-reverse-linked-list/

// Iterative Solution
// O(n) time & O(1) space
const reverseLinkedList = function (linkedlist) {
  let node = linkedlist;
  let previous = null;

  while (node) {
    // save next or you lose it!!!
    const save = node.next; // 2
    // reverse pointer
    node.next = previous; // null
    // increment previous to current node
    previous = node; // 1
    // increment node to next node or null at end of list
    node = save; // 2
  }
  return previous; // Change the list head !!!
};

// Recursive Solution
// O(n) time & O(n) space
function reverseRecursive(head) {
  if (!head || !head.next) {
    return head;
  }
  const tmp = reverseRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return tmp;
}

describe('reverse', () => {
  it('should return correct reverse', () => {
    const list = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
    const list1 = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
    expect(reverseLinkedList(list)).toStrictEqual({ value: 3, next: { value: 2, next: { value: 1, next: null } } });
    expect(reverseRecursive(list1)).toStrictEqual({ value: 3, next: { value: 2, next: { value: 1, next: null } } });
  });
});
