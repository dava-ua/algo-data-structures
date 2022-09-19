// https://leetcode.com/problems/validate-binary-search-tree/description/

var isValidBST = function (root, min = -Infinity, max = Infinity) {
  if (!root) return true;

  const left = isValidBST(root.left, min, root.val);
  const right = isValidBST(root.right, root.val, max);

  return left && right && root.val > min && root.val < max;
};

// https://leetcode.com/problems/validate-binary-search-tree/solutions/783930/easy-to-understand-2-lines-solution-o-n-with-examples-and-explanation-javascript/
function isValidBST_1(root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  return !(root.val <= min || root.val >= max)
    && isValidBST(root.left, min, root.val)
    && isValidBST(root.right, root.val, max);
}

function isValidBST_2(root) {
  const dfs = (node, left, right) => {
    if (!node) return true;
    if (!(node?.val < right && node?.val > left)) return false;
    return dfs(node.left, left, node.val) && dfs(node.right, node.val, right);
  };

  return dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}
