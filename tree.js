import { Node } from "./node.js";

function Tree(array) {
  const uniqSort = [...new Set(array.slice().sort((a, b) => a - b))];
  const root = buildTree(uniqSort, 0, uniqSort.length - 1);

  function buildTree(array, start, end) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const root = new Node(array[mid]);

    root.left = buildTree(array, start, mid - 1);
    root.right = buildTree(array, mid + 1, end);

    return root;
  }

  function insert(data, rootNode = root) {
    if (rootNode === null) return new Node(data);
    if (data === rootNode.data) return rootNode;

    if (data < rootNode.data) {
      rootNode.left = insert(data, rootNode.left);
    } else {
      rootNode.right = insert(data, rootNode.right);
    }

    return rootNode;
  }

  function getSuccessor(current) {
    current = current.right;
    while (current !== null && current.left !== null) {
      current = current.left;
    }
    return current;
  }

  function deleteItem(data, rootNode = root) {
    if (rootNode === null) return rootNode;

    if (rootNode.data > data) {
      rootNode.left = deleteItem(data, rootNode.left);
    } else if (rootNode.data < data) {
      rootNode.right = deleteItem(data, rootNode.right);
    } else {
      if (rootNode.left === null) return rootNode.right;
      if (rootNode.right === null) return rootNode.left;

      const succ = getSuccessor(rootNode);
      rootNode.data = succ.data;
      rootNode.right = deleteItem(succ.data, rootNode.right);
    }

    return rootNode;
  }

  function find(data) {
    let tmp = root;

    while (tmp) {
      if (tmp.data === data) return tmp;
      if (data > tmp.data) tmp = tmp.right;
      if (data < tmp.data) tmp = tmp.left;
    }

    return tmp;
  }

  function levelOrderForEach(callback) {
    if (typeof callback !== "function") throw new Error("No callback provided");
    const queue = [];
    queue.push(root);

    while (queue.length) {
      const node = queue.shift();
      callback(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  function levelOrderForEachRC(callback, array = [root]) {
    if (!array.length) return;
    const node = array.shift();
    callback(node);
    if (node.left) array.push(node.left);
    if (node.right) array.push(node.right);
    levelOrderForEachRC(callback, array);
  }

  return {
    root,
    insert,
    deleteItem,
    find,
    levelOrderForEach,
    levelOrderForEachRC,
  };
}

export { Tree };
