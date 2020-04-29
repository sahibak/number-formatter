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
     * methodology based on iteriation.
     * @param {any} data
     * @return {node}
     */
    let nextNode = this;
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

  //   printTree(nodes) {
  //     let currentNodes = [];
  //     let newNodes = [];
  //     currentNodes.push(nodes);
  //     console.log(currentNodes);
  //     for (let i = 0; i < currentNodes.length; i++) {
  //       console.log(currentNodes[i].data);
  //       currentNodes[i].right != null
  //         ? nextNodes.push(currentNodes[i].right)
  //         : null;
  //       currentNodes[i].left != null
  //         ? nextNodes.push(currentNodes[i].left)
  //         : null;
  //     }
  //     nodes = newNodes;
  //     nodes.length > 0 ? this.printTree(nodes) : null;
  //   }
}

module.exports = { Node };
