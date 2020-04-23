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
     * storing previous node's value in lastNode.
     * In the begining, lastNode = values in this.
     * Eg. this = Node1 = {previous: null, data:1, next = null}
     * after addition,
     *  Node 1 = {previous: null, data:1, next = Node2}
     *  Node 2 = {previous: Node1, data:2, next = null}
     * @param {any} data
     * @return {node}
     */
    let nextNode = this;
    let lastNode = new Node(this.data);
    lastNode.previous = this.previous;
    lastNode.next = this.next;

    while (nextNode.next != null) {
      lastNode.previous = nextNode.previous;
      lastNode.data = nextNode.data;
      lastNode.next = nextNode.next;
      nextNode = nextNode.next;
    }
    let newNode = new Node(data);
    newNode.previous = lastNode;
    nextNode.next = newNode;
    return this;
  }

  addLinkToFront(value) {
    /**
     * adding a node to the begging of the chain
     * Eg. this = Node1 = {previous: null, data:1, next = null}
     * after addition,
     *  Node 1 = {previous: null, data:2, next = Node2}
     *  Node 2 = {previous: Node1, data:1, next = null}
     * to achive the above, values of this.data and this.next is saved in the newNode => making newNode mimic "this".
     * then at this.data inserting value param and setting this.next = new node.
     * @param {any} value
     * @return {node}
     */
    let newNode = new Node();
    newNode.data = this.data;
    newNode.next = this.next;
    newNode.previous = this.data = value;
    this.next = newNode;
    return this;
  }

  //   addLink(value, positionToInsert) {
  //     /**
  //      * adding a node to a specific position in the node.
  //      * 1st position is considered to be at this.next value
  //      * @param {any} value
  //      * @param {integer} positionToInsert
  //      * @return {node}
  //      */
  //     if (!Number.isInteger(positionToInsert)) {
  //       throw new Error("Provide integer value for position.");
  //     }
  //     if (positionToInsert === 0) {
  //       this.addLinkToFront(value);
  //     }
  //     let nextNode = this;
  //     let currentPosition = 1;
  //     while (nextNode.next != null && currentPosition != positionToInsert) {
  //       nextNode = nextNode.next;
  //       currentPosition += 1;
  //     }
  //     if (currentPosition === positionToInsert) {
  //       let newNode = new Node(value);
  //       newNode.next = nextNode.next;
  //       nextNode.next = newNode;
  //     }
  //     return this;
  //   }

  //   removeFirst() {
  //     /**
  //      * removing the first node in the chain
  //      * eg. intial node => Node(data:1, next:(data:2, next:null))
  //      * new node => Node(data:2,next:null)
  //      * if there are no links, it will make the class values of keys to be null
  //      * otherwise, it will remove the first link and set the second link as first.
  //      * @return {node}
  //      */
  //     let newNodes = this.next;
  //     if (newNodes != null) {
  //       this.data = newNodes.data;
  //       this.next = newNodes.next;
  //       return this;
  //     }
  //     this.data = null;
  //     this.next = null;
  //     return this;
  //   }

  //   removeAll() {
  //     /**
  //      * removes all links and sets the values of keys to null
  //      * @return {node}
  //      */
  //     this.data = null;
  //     this.next = null;
  //     return this;
  //   }

  //   contains(value) {
  //     /**
  //      * method to loop through the nodes to find the value.
  //      * loop will continue till .next!= null and .data != value. If any of these conditions fail, it will check for value and return true/false.
  //      * @param {any} value
  //      * @return {binary}
  //      */
  //     let nextNode = this;
  //     while (nextNode.next != null && nextNode.data != value) {
  //       nextNode = nextNode.next;
  //     }
  //     if (nextNode.data === value) {
  //       return true;
  //     }
  //     return false;
  //   }
}

module.exports = { Node };
