import { Tree } from "./tree.js";

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

const data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const bst = Tree(data);
prettyPrint(bst.root);
bst.insert(22);
bst.insert(22);
bst.insert(1);
bst.insert(40);
bst.insert(2);
bst.insert(6);
console.log("----------------");
prettyPrint(bst.root);
bst.deleteItem(6);
bst.deleteItem(4); 
console.log("----------------");
prettyPrint(bst.root);
console.log(bst.find(1));
console.log(bst.find(100));