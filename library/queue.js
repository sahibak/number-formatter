"use strict";

class Queue {
  /**
   * creating a queue of length = lengthOfQueue
   * if the length is non-integer, throw an error.
   * setting index of 1st entry (head) to 0
   * setting index of 1st exit (tail) to 0
   * @param {integer} lengthOfQueue
   * @return {queue}
   */
  constructor(lengthOfQueue) {
    this.verifyLengthInput(lengthOfQueue);
    this.lengthOfQueue = lengthOfQueue;
    this.head = 0;
    this.tail = 0;
    this.countOfItems = 0;
    this.queue = new Array(this.lengthOfQueue);
  }

  verifyLengthInput(lengthOfQueue) {
    /**
     * Verify the lengthOfQueue provided is an integer.
     * @param {integer} lengthOfQueue
     * @return {integer}
     */
    if (!Number.isInteger(lengthOfQueue)) {
      throw new Error("Only accept integer as length");
    }
    return lengthOfQueue;
  }

  push(value) {
    /**
     * Pushing value onto the queue, if full throw error
     * as items are added to the queue, the tail index keeps increasing till length is reached and then resets to zero.
     * @param {any} value
     * @return {array}
     */
    if (this.count === this.lengthOfQueue) {
      throw new Error("Error");
    }
    this.queue[this.tail] = value;
    this.countOfItems += 1;
    this.tail += 1;
    this.tail = this.tail % this.lengthOfQueue;
    return this.queue;
  }

  pop() {
    /**
     * Popping values from a queue, if empty throw error
     * as items are popped, head index keeps increasing till length is reached and then reset to zero.
     * @return {any}
     */
    if (this.countOfItems === 0) {
      throw new Error("Error");
    }
    let poppedValue = this.queue[this.head];
    this.queue[this.head] = null;
    this.head += 1;
    this.head = this.head % this.lengthOfQueue;
    this.countOfItems -= 1;
    return poppedValue;
  }

  print() {
    /**
     * printing the queue
     * @return {array}
     */
    return this.queue;
  }

  size() {
    /**
     * checking length of queue
     * @return {integer}
     */
    return this.queue.length;
  }
}

module.exports = { Queue };
