"use strict";

class Node {
  /**
   * creating a node
   * @param {any} data
   * @return {node}
   */
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  addLinkToBack(data) {
    /**
     * adding another link to the back
     * eg. intial node => Node(data:1,next:null)
     * new node => Node(data:1, next:(data:1, next:null))
     * the method checks if the next for first node(this.next) is null, then next node is added here. Otherwise,
     * it runs a while loop till .next is null. Then inserts the new node such that .next: new node.
     * @param {any} data
     * @return {node}
     */
    let nextNode = this.next;
    if (nextNode === null) {
      this.next = new Node(data);
    } else {
      while (nextNode.next != null) {
        nextNode = nextNode.next;
      }
      nextNode.next = new Node(data);
    }
    return this;
  }

  addLinkToFront(value) {
    /**
     * adding a node to the begging of the chain
     * eg. intial node => Node(data:1, next:(data:2, next:null)) and value = "xyz"
     * new node => Node(data:"xyz", next:(data:1, next:(data:2, next:null)))
     * @param {any} value
     * @return {node}
     */
    let newNode = new Node();
    newNode.data = this.data;
    newNode.next = this.next;
    this.data = value;
    this.next = newNode;
    return this;
  }

  removeFirst() {
    /**
     * removing the first node in the chain
     * eg. intial node => Node(data:1, next:(data:2, next:null))
     * new node => Node(data:2,next:null)
     * if there are no links, it will make the class values of keys to be null
     * otherwise, it will remove the first link and set the second link as first.
     * @return {node}
     */
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
    /**
     * removes all links and sets the values of keys to null
     * @return {node}
     */
    this.data = null;
    this.next = null;
    return this;
  }

  containes(value) {
    /**
     * loops through the nodes to find the value.
     *loop will continue till .next!= null and .data != value.
     * @param {any} value
     * @return {binary}
     */

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
