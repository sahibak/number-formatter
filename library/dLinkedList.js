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
     * @param {any} data
     * @return {node}
     */

    let nextNode = this;

    while (nextNode.next != null) {
      nextNode = nextNode.next;
    }
    console.log("nextNode", nextNode);
    let newNode = new Node(data);
    newNode.previous = new Node(nextNode.data);
    newNode.previous.previous = nextNode.previous;
    nextNode.next = newNode;
    console.log("-----------", this);
    return this;
  }

  //   addLinkToFront(value) {
  //     /**
  //      * adding a node to the begging of the chain
  //      * eg. intial node => Node(data:1, next:(data:2, next:null)) and value = "xyz"
  //      * new node => Node(data:"xyz", next:(data:1, next:(data:2, next:null)))
  //      * to achive the above, values of this.data and this.next is saved in the newNode => making newNode mimic this.
  //      * then at this.data inserting value param and this.next's value to be the new node.
  //      * @param {any} value
  //      * @return {node}
  //      */
  //     let newNode = new Node();
  //     newNode.data = this.data;
  //     newNode.next = this.next;
  //     this.data = value;
  //     this.next = newNode;
  //     return this;
  //   }

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
