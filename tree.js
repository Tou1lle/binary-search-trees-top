import { Node } from "./node.js";

function Tree(array) {
  const uniqSort = [...new Set(array.slice().sort((a,b) => a - b))];
  const root = buildTree(uniqSort, 0, uniqSort.length - 1);

  function buildTree(array, start, end) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const root = new Node(array[mid]);

    root.left = buildTree(array, start, mid-1);
    root.right = buildTree(array, mid+1, end);

    return root;
  }

  function insert(data, rootNode = root) {
    if (rootNode === null) return new Node(data);

    if (data < rootNode.data)   {
      rootNode.left = insert(data, rootNode.left);
    } else {
      rootNode.right = insert(data, rootNode.right);
    }

    return rootNode;
  }

  return { root, insert }
}

export { Tree };