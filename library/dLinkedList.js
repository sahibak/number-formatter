"use strict";

class Node {
  /**
   * creating a node for doubly linked list.
   * @param {any} data
   * @return {node}
   */
  constructor(data) {
    this.previous = null;
    this.data = data;
    this.next = null;
  }

  addLinkToBack(data) {
    /**
     * Adding values to the end of the doubly linked list.
     * In the begining, lastNode = values in this.
     * Eg. this = Node1 = {previous: null, data:1, next = null}
     * after addition,
     *  Node 1 = {previous: null, data:1, next = Node2}
     *  Node 2 = {previous: Node1, data:2, next = null}
     * @param {any} data
     * @return {node}
     */
    let nextNode = this;
    while (nextNode.next != null) {
      nextNode = nextNode.next;
    }
    let newNode = new Node(data);
    newNode.previous = nextNode;
    nextNode.next = newNode;
    return this;
  }

  addLinkToFront(value) {
    /**
     * adding a node to the begging of the chain
     * Eg. this = Node1 = {previous: null, data:1, next = null}
     * after addition,
     *  Node 1 = {previous: null, data:2, next = Node2}
     *  Node 2 = {previous: Node1, data:1, next = null} -> newNode
     * to achive the above,
     *  values of this.data, this.next are saved in the newNode => making newNode mimic "this".
     *  newnodes' previous is set to Node1
     *  then at this.data inserting value param and setting this.next = new node.
     * @param {any} value
     * @return {node}
     */
    let newNode = new Node(this.data);
    newNode.previous = this;
    newNode.next = this.next;
    this.data = value;
    this.next = newNode;
    return this;
  }

  addLinkCheck() {
    /**
     * To test the data inserted after using addLink functions above
     * @return {array}
     */
    let dataInNodes = [this.data];
    let nextNode = this;
    while (nextNode.next != null) {
      nextNode = nextNode.next;
      dataInNodes.push(nextNode.data);
    }
    return dataInNodes;
  }
}

module.exports = { Node };
