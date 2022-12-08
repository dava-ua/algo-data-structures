// https://leetcode.com/problems/implement-trie-prefix-tree/
// https://leetcode.com/problems/implement-trie-prefix-tree/solutions/2094586/js-simple-explained-prefix-trees/

class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (const c of word) {
      if (node[c] == null) node[c] = {};
      node = node[c];
    }
    node.endOfWord = true;
  }

  traverse(word) {
    let node = this.root;
    for (const c of word) {
      node = node[c];
      if (node == null) return null;
    }
    return node;
  }

  search(word) {
    const node = this.traverse(word);
    return node != null && node.endOfWord === true;
  }

  startsWith(prefix) {
    return this.traverse(prefix) != null;
  }
}
