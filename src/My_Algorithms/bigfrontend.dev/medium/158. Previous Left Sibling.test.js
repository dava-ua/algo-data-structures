// https://bigfrontend.dev/problem/previous-left-sibling

/**
 * @param {Element} root
 * @param {Element} target
 * @return {Elemnt | null}
 */
function previousLeftSibling(root, target) {
  const q = [root];

  while (q.length) {
    let prev = null;
    for (let i = 0; i < q.length; i += 1) {
      const current = q.shift();

      if (current === target) {
        return prev;
      }

      q.push(...current.children);
      prev = current;
    }
  }

  return null;
}
