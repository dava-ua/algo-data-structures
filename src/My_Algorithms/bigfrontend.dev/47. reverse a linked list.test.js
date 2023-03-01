/** 
* class Node {
*  new(val: number, next: Node);
*    val: number
*    next: Node
* }
*/

/**
 * @param {Node} list
 * @return {Node} 
 */
const reverseLinkedListSwap = (list) => {
    let node = list, prev = null;
    while (node !== null) {
        [node.next, node, prev] = [prev, node.next, node];
    }
    return prev;
}

/**
 * @param {Node} list
 * @return {Node} 
 */
const reverseLinkedListClassic = (list) => {
    let nextNode = null;
    let prevNode = null;
    while (list) {
        nextNode = list.next;
        list.next = prevNode;
        prevNode = list;
        list = nextNode;
    }

    return prevNode;
}