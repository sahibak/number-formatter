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
    this.totalNodesinTree = 1;
  }

  addLink(data) {
    /**
     * Values added to left of node if data > node.data
     * Values added to right of node if data < node.data
     * Adding algorithms starts from root node always.
     * methodology based on iteriation.
     * @param {any} data
     * @return {node}
     */
    let nextNode = this;
    this.totalNodesinTree += 1;
    while (nextNode != null) {
      if (nextNode.data < data && nextNode.right != null) {
        nextNode = nextNode.right;
      } else if (nextNode.data > data && nextNode.left != null) {
        nextNode = nextNode.left;
      } else if (nextNode.data < data && nextNode.right === null) {
        nextNode.right = new Node(data);
        break;
      } else if (nextNode.data > data && nextNode.left === null) {
        nextNode.left = new Node(data);
        break;
      }
    }
    return this;
  }

  printTreeByBreadth() {
    let valuesInNodes = [];
    let countOfNodes = this.totalNodesinTree;
    let currentNodes = [this];
    while (countOfNodes > 0) {
      let nextNodes = [];
      for (let i = 0; i < currentNodes.length; i++) {
        valuesInNodes.push(currentNodes[i].data);
        nextNodes.push(currentNodes[i].right);
        nextNodes.push(currentNodes[i].left);
        countOfNodes -= 1;
      }
      currentNodes = nextNodes;
    }
    return valuesInNodes;
  }

  printTreeByDepth() {
    let valuesInNodes = [this.data];
    let leftNodes = [];
    let countOfNodes = this.totalNodesinTree - 1;
    let currentNode = this;
    let adjustedIndex = 1;
    while (countOfNodes > 0) {
      currentNode.left != null ? leftNodes.push(currentNode.left) : null;
      if (currentNode.right != null) {
        currentNode = currentNode.right;
      } else {
        currentNode = leftNodes[leftNodes.length - adjustedIndex];
        adjustedIndex += 1;
        leftNodes.length - adjustedIndex < 0
          ? (adjustedIndex = 1)
          : adjustedIndex;
      }
      valuesInNodes.push(currentNode.data);
      countOfNodes -= 1;
    }
    return valuesInNodes;
  }
}

module.exports = { Node };
