"use strict";

class Node {
  /**
   * creating a node for binary tree.
   * Assumptions-
   *  - No duplicated data values are provided
   *  - Only numbers are provided as input
   * @param {any} data
   * @return {node}
   */
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }

  addLink(data) {
    /**
     * Values added to left of node if data > node.data
     * Values added to right of node if data < node.data
     * Adding algorithms starts from root node always.
     * @param {any} data
     * @return {node}
     */
    let nextNode = this;
    if (nextNode.data < data) {
      this.addLinkToRight(nextNode, data);
    } else {
      this.addLinkToLeft(nextNode, data);
    }
    return this;
  }

  addLinkToRight(nextNode, data) {
    /**
     * Values added to right of current node (nextNode), if it is null. Otherwise,
     * compare the data value in the current node and determine next path (left/right).
     * @param {any} data
     * @param {node} nextNode
     * @return {node}
     */
    if (nextNode.right != null) {
      nextNode = nextNode.right;
      if (nextNode.data < data) {
        this.addLinkToRight(nextNode, data);
      } else {
        this.addLinkToLeft(nextNode, data);
      }
    } else {
      nextNode.right = new Node(data);
      return this;
    }
  }

  addLinkToLeft(nextNode, data) {
    /**
     * Values added to left of current node (nextNode), if it is null. Otherwise,
     * compare the data value in the current node and determine next path (left/right).
     * @param {any} data
     * @param {node} nextNode
     * @return {node}
     */
    if (nextNode.left != null) {
      nextNode = nextNode.left;
      if (nextNode.data < data) {
        this.addLinkToRight(nextNode, data);
      } else {
        this.addLinkToLeft(nextNode, data);
      }
    } else {
      nextNode.left = new Node(data);
      return this;
    }
  }
}

module.exports = { Node };
