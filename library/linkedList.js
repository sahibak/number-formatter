"use strict";

class LinkedList {
  constructor() {
    this.data = 0;
    this.next = null;
    this.linkedList = (this.data, this.next);
  }

  addLink() {
    if (this.data === 0) {
      this.data += 1;
      this.next = new LinkedList();
      console.log(this.linkedList);
      return this.linkedList;
    }
  }
}
