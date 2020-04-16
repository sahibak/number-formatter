"use strict";

class Node {
  constructor() {
    this.data = 1;
    this.next = null;
  }

  addLink() {
    let nextNode = this.next;
    if (nextNode === null) {
      this.next = new Node();
      this.next.data = this.data + 1;
    } else {
      while (nextNode.next != null) {
        nextNode = nextNode.next;
      }
      nextNode.next = new Node();
      nextNode.next.data = nextNode.data + 1;
    }
    return this;
  }
}

module.exports = { Node };
