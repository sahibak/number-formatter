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
    this.leftNodes = [];
    this.rightNodes = [];
    this.balancingFactor = 0;
    // this.dataArray = [data];
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
    let balancingRequired = false;
    this.totalNodesinTree += 1;
    // this.dataArray.push(data);
    while (nextNode != null) {
      if (nextNode.data < data && nextNode.right != null) {
        nextNode.rightNodes.push(data);
        nextNode.balancingFactor = this.updateBalancingFactor(nextNode);
        balancingRequired =
          balancingRequired === false
            ? this.checkBalancingFactor(nextNode)
            : true;
        nextNode = nextNode.right;
      } else if (nextNode.data > data && nextNode.left != null) {
        nextNode.leftNodes.push(data);
        nextNode.balancingFactor = this.updateBalancingFactor(nextNode);
        balancingRequired =
          balancingRequired === false
            ? this.checkBalancingFactor(nextNode)
            : true;
        nextNode = nextNode.left;
      } else if (nextNode.data < data && nextNode.right === null) {
        nextNode.rightNodes.push(data);
        nextNode.balancingFactor = this.updateBalancingFactor(nextNode);
        balancingRequired =
          balancingRequired === false
            ? this.checkBalancingFactor(nextNode)
            : true;
        nextNode.right = new Node(data);
        break;
      } else if (nextNode.data > data && nextNode.left === null) {
        nextNode.leftNodes.push(data);
        nextNode.balancingFactor = this.updateBalancingFactor(nextNode);
        balancingRequired =
          balancingRequired === false
            ? this.checkBalancingFactor(nextNode)
            : true;
        nextNode.left = new Node(data);
        break;
      }
    }
    balancingRequired === true ? this.rebalanceTree() : null;
    return this;
  }

  updateBalancingFactor(nextNode) {
    let leftHeight =
      nextNode.leftNodes.length % 2 === 0 || nextNode.leftNodes.length === 1
        ? nextNode.leftNodes.length
        : nextNode.leftNodes.length - 1;
    let rightHeight =
      nextNode.rightNodes.length % 2 === 0 || nextNode.rightNodes.length === 1
        ? nextNode.rightNodes.length
        : nextNode.rightNodes.length - 1;
    let balancingFactor = leftHeight - rightHeight;
    return balancingFactor;
  }

  checkBalancingFactor(node) {
    if (
      node.balancingFactor === 0 ||
      node.balancingFactor === -1 ||
      node.balancingFactor === 1
    ) {
      return false;
    }
    return true;
  }

  rebalanceTree() {
    console.log("(((((((((((((((((((((((((((((((((((((");
    let dataArray = [...this.leftNodes, this.data, ...this.rightNodes];
    let rootDataIndex = Math.floor((dataArray.length - 1) / 2);
    this.data = dataArray[rootDataIndex];
    this.left = null;
    this.right = null;
    this.totalNodesinTree = 1;
    this.leftNodes = [];
    this.rightNodes = [];
    this.balancingFactor = 0;
    for (
      let i = rootDataIndex - 1, n = rootDataIndex + 1;
      i >= 0 || n < dataArray.length;
      i -= 1, n += 1
    ) {
      !!dataArray[i] ? this.addLink(dataArray[i]) : null;
      !!dataArray[n] ? this.addLink(dataArray[n]) : null;
    }
    return this;
  }

  printTreeByBreadth() {
    let valuesInNodes = [];
    let countOfNodes = this.totalNodesinTree;
    let currentNodes = [this];
    console.log("--------------------", this);
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
    console.log(valuesInNodes);
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
