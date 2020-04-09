"use strict";

class Dqueue {
  /**
   * creating a dqueue of length = lengthOfDqueue
   * creating a new array of the length provided
   * @TODO need to get better way to make the comments below
   * setting head (position where the entry will be made from front)
   * setting tail (position where the entry will be made from the back)
   * @param {integer} lengthOfDqueue
   * @return {dqueue}
   */
  constructor(lengthOfDqueue) {
    this.verifyLengthInput(lengthOfDqueue);
    this.lengthOfDqueue = lengthOfDqueue;
    this.head = 0;
    this.tail = this.lengthOfDqueue - 1;
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

  pushToFront(value) {
    /**
     * Pushing value onto the dqueue from front, if full throw error
     * @param {any} value
     * @return {array}
     */
    if (this.count === this.lengthOfDqueue) {
      throw new Error("Error");
    }
    this.dqueue[this.head] = value;
    this.count += 1;
    this.head += 1;
    this.head === this.lengthOfDqueue
      ? (this.head = this.head % this.lengthOfDqueue)
      : this.head;
    return this.dqueue;
  }

  pushToBack(value) {
    /**
     * Pushing value onto the dqueue from back, if full throw error
     * @param {any} value
     * @return {array}
     */
    if (this.count === this.lengthOfDqueue) {
      throw new Error("Error");
    }
    this.dqueue[this.tail] = value;
    this.count += 1;
    this.tail -= 1;
    return this.dqueue;
  }

  popFromFront() {
    /**
     * Popping values from dqueue from front, if empty throw error
     * @return {any}
     */
    if (this.count === 0) {
      throw new Error("Error");
    }
    this.head -= 1;
    let poppedValue = this.dqueue[this.head];
    this.dqueue[this.head] = null;
    this.count -= 1;
    this.resetValuesOnPop();
    console.log(poppedValue, this.dqueue);
    return poppedValue;
  }

  popFromBack() {
    /**
     * Popping values from dqueue from back, if empty
     *  - throw error
     *  - reset head and tail values
     * When stack is empty, reset head and tail values.
     * @Todo when tail === -length, then how do i pop further from back? Is my approach correct?
     * @return {any}
     */
    if (this.count === 0) {
      throw new Error("Error");
    }
    this.tail += 1;
    this.tail === this.lengthOfDqueue ? (this.tail = 0) : this.tail;
    let poppedValue = this.dqueue[this.tail];
    this.dqueue[this.tail] = null;
    this.count -= 1;
    this.resetValuesOnPop();
    return poppedValue;
  }

  print() {
    /**
     * printing the dqueue
     * @return {array}
     */
    return this.dqueue;
  }

  size() {
    /**
     * checking length of dqueue
     * @return {integer}
     */
    return this.dqueue.length;
  }

  resetValuesOnPop() {
    /**
     * this is a helper function, to reset the values of head and tail when all values have been popped.
     * @return {integer}
     */
    if (this.count === 0) {
      this.head = 0;
      this.tail = this.lengthOfDqueue - 1;
    }
    return this.head, this.tail;
  }

  resetValuesOnPush() {
    /**
     * this is a helper function, to reset the values of head and tail to ensure they remain valid (ie non-negative)
     * @return {integer}
     */
    if (this.head < 0) {
      this.head = this.lengthOfDqueue - 1;
      this.tail = this.lengthOfDqueue - 1;
    }
    return this.head, this.tail;
  }
}

module.exports = { Dqueue };
