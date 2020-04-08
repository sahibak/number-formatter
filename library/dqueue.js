"use strict";

class Dqueue {
  /**
   * creating a dqueue of length = lengthOfDqueue
   * creating a new array of the length provided
   * setting index of 1st entry (head) to 0
   * setting index of 1st exit (tail) to 0
   * @param {integer} lengthOfDqueue
   * @return {dqueue}
   */
  constructor(lengthOfDqueue) {
    this.lengthOfDqueue = this.verifyLengthInput(lengthOfDqueue);
    this.head = 0;
    this.tail = 0;
    this.count = 0;
    this.dqueue = new Array(this.lengthOfDqueue);
  }

  verifyLengthInput(lengthOfDqueue) {
    /**
     * Verify the lengthOfQueue provided is an integer.
     * @param {integer} lengthOfDqueue
     * @return {integer}
     */
    if (!Number.isInteger(lengthOfDqueue)) {
      throw new Error("Only accept integer as length");
    }
    return lengthOfDqueue;
  }

  push(value) {
    /**
     * Pushing value onto the dqueue, if full throw error
     * @param {any} value
     * @return {array}
     */
    if (this.tail === this.head) {
      throw new Error("Error");
    }
    this.queue[this.tail] = value;
    this.count += 1;
    this.tail += 1;
    this.tail === this.lengthOfDqueue
      ? (this.tail = this.tail % this.lengthOfDqueue)
      : this.tail;
    return this.dqueue;
  }

  pop() {
    /**
     * Popping values from a queue, if empty throw error
     * @return {any}
     */
    if (this.head === this.tail && this.count === 0) {
      throw new Error("Error");
    }
    let poppedValue = this.dqueue[this.head];
    this.dqueue[this.head] = null;
    this.head += 1;
    this.head === this.lengthOfDqueue
      ? (this.head = this.head % this.lengthOfDqueue)
      : this.head;
    this.count -= 1;
    return poppedValue;
  }

  print() {
    /**
     * printing the queue
     * @return {array}
     */
    return this.dqueue;
  }

  size() {
    /**
     * checking length of queue
     * @return {integer}
     */
    return this.dqueue.length;
  }

  createQueue(listOfValues) {
    /**
     * Add values to the empty queue till it is full, from a list of values provides.
     * This function is used for testing.
     * @return {array}
     */
    for (let i = 0; i < this.lengthOfDqueue; i++) {
      this.dqueue[i] = listOfValues[i];
      this.count += 1;
    }
    return this.dqueue;
  }

  emptyQueue() {
    /**
     * Empty the queue.
     * This function is used for testing.
     * @return {array}
     */
    for (let i = this.count; i > 0; i--) {
      this.dqueue[this.head] = null;
      this.head += 1;
      this.head === this.lengthOfDqueue ? (this.head = 0) : this.head;
    }
    return this.dqueue;
  }
}

module.exports = { Dqueue };
