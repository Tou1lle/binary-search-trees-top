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
console.log("Iterative:")
bst.levelOrderForEach((node) => console.log(node.data));
console.log("Recursive:")
bst.levelOrderForEachRC((node) => console.log(node.data));
console.log("InOrder traversal");
bst.inOrderForEach(node => console.log(node.data));
console.log("PreOrder traversal");
bst.preOrderForEach(node => console.log(node.data));
console.log("PostOrder traversal");
bst.postOrderForEach(node => console.log(node.data));
console.log("Height");
console.log("Height for 8: " + bst.height(8));
console.log("Height for 3: " + bst.height(3));
console.log("Height for 2: " + bst.height(2));
console.log("Height for 5: " + bst.height(5));
console.log("Height for 1000 (not there): " + bst.height(1000));
console.log("Depth");
console.log("8 depth: " + bst.depth(8));
console.log("67 depth: " + bst.depth(67));
console.log("23 depth: " + bst.depth(23));
console.log("22 depth: " + bst.depth(22));
console.log("222 depth: " + bst.depth(222));