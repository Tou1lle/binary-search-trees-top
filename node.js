class Node {
  #data;
  #leftNode;
  #rightNode;

  constructor(data, leftNode = null, rightNote = null) {
    this.data = data;
    this.leftNode = leftNode;
    this.rightNote = rightNote;
  }

  get data() { return this.#data; }
  get leftNode() { return this.#leftNode; }
  get rightNote() { return this.#rightNode; }

  set data(data) { this.#data = data; }
  set leftNode(node) { this.#leftNode = node; }
  set rightNote(node) { this.#rightNode = node; }
}