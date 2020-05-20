"use strict";

class Node {
  /**
   * creating a node for binary tree.
   * @param {any} data
   * @return {node}
   */
  constructor(data) {
    this.right = null;
    this.data = data;
    this.left = null;
  }

  addLink(nextNode, data) {
    /**
     * Searching through the tree till a nul space is found and adding a new node at that position.
     * @param {any} data
     * @return {node}
     */
    if (!nextNode.data) {
      nextNode.data = data;
      return this;
    }
    if (nextNode.data > data && nextNode.left === null) {
      nextNode.left = new Node(data);
      return this;
    } else if (nextNode.data < data && nextNode.right === null) {
      nextNode.right = new Node(data);
      return this;
    } else if (nextNode.data > data && nextNode.left != null) {
      nextNode = nextNode.left;
      return this.addLink(nextNode, data);
    } else {
      nextNode = nextNode.right;
      return this.addLink(nextNode, data);
    }
  }
}

module.exports = { Node };
