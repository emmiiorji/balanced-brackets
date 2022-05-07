class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(n) {
    const newNode = new Node(n);
    if (this.length === 0) {
      this.bottom = newNode;
      this.top = newNode;
    }
    else {
      [this.top, this.top.next] = [newNode, this.top];
    }
    this.length += 1;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    let oldTop
    [this.top, oldTop] = [this.top.next, this.top];
    this.length -= 1;
    return oldTop.val;
  }

  peek() {
    if(!this.top) return null
    return this.top.val;
  }
}
module.exports = Stack
