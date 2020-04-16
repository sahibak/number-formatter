"use strict";

class Node {
  constructor() {
    this.data = 1;
    this.next = null;
  }

  addLinkToBack() {
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

  addLinkToFront() {
    let newNode = new Node();
    let previousNodes = this;
    newNode.next = previousNodes;
    this.data = newNode.data;
    this.next = newNode.next;
    console.log(this);
    return this;
  }

  removeFirst() {
    let newNodes = this.next;
    if (newNodes != null) {
      this.data = newNodes.data;
      this.next = newNodes.next;
      return this;
    }
    this.data = null;
    this.next = null;
    return this;
  }

  removeAll() {
    this.data = null;
    this.next = null;
    return this;
  }

  containes(value) {
    if (!Number.isInteger(value)) {
      throw new Error("Provide integer value.");
    }
    let nextData = this.data;
    if (nextData === value) {
      return true;
    } else {
      let nextNode = this.next;
      while (nextNode.next != null && nextNode.data != value) {
        nextNode = nextNode.next;
      }
      if (nextNode.data === value) {
        return true;
      }
      return false;
    }
  }
}

module.exports = { Node };
