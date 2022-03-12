import { useState } from 'react';
import styles from './styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const ListNode = ({ val, onNodeRemove }) => {
  const classes = styles();

  return (
    <div className={classes.node} onClick={() => onNodeRemove(val)}>
      {val}
    </div>
  );

};

export const ReverseLinkedList = () => {
  const [head, setHead] = useState({val: 0, next: null});

  const getNextVal = () => {
    let node = head;
    while (node.next) {
      node = node.next;
    }
    return node.val + 1;
  };

  // TODO: refactor after reverse case
  const getIndex = (val) => {
    let node = { ...head };
    let idx = 0;
    while (node.val !== val) {
      node = node.next;
      idx += 1
    }
    return idx;
  };

  const addNode = () => {
    let node = head;
    while (node.next) {
      node = node.next;
    }

    const nextVal = getNextVal();
    node.next = {
      val: nextVal,
      next: null
    };

    setHead({ ...head });
    console.log(JSON.stringify(head));
  };

  const reverseList = function () {
    let node = head;
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
    // return previous; // Change the list head !!!
    setHead(previous)
  };

  const removeNode = (val) => {
    let node = head;
    if(getIndex(val) === 0){
      node = node.next;
      setHead({ ...node });
    } else{
      while (node.next.val !== val){
        node = node.next;
      }
      node.next = node.next ? node.next.next : null;
      setHead({ ...head });
    }
  };

  // TODO: implement sorting Button after reversing and adding new nodes

  const renderList = () => {
    let node = head;
    const nodes = [];
    while (node){
      nodes.push(node.val);
      node = node.next;
    }
    return nodes;
  };

  return (
    <>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" onClick={addNode}>Add node</Button>
        <Button variant="outlined" onClick={reverseList}>Reverse list</Button>
      </Stack>
      <Stack direction="row" spacing={2}>{renderList().map(n => <ListNode onNodeRemove={removeNode} val={n} key={n}/>)}</Stack>
    </>
  );
};
