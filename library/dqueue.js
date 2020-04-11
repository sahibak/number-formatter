"use strict";

class Dqueue {
  /**
   * creating a dqueue of length = lengthOfDqueue
   * if the length provided is non-integer throw an error.
   * setting head (position where the entry will be made from front,ie clockwise && position where pop from front will be made)
   * setting tail (position where the entry will be made from the back, ie counter-clockwise && position where pop from back will be made)
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
     * Pushing value onto the dqueue from front(clockwise), if full throw error
     * adjusting the value of the head when it is equal to the length
     * @param {any} value
     * @return {array}
     */
    if (this.count === this.lengthOfDqueue) {
      throw new Error("Error");
    }
    this.dqueue[this.head] = value;
    this.count += 1;
    this.head += 1;
    this.head = this.head % this.lengthOfDqueue;
    return this.dqueue;
  }

  pushToBack(value) {
    /**
     * Pushing value onto the dqueue from back(counter-clockwise), if full throw error
     * adjusting the value of tail when it is negative
     * @param {any} value
     * @return {array}
     */
    if (this.count === this.lengthOfDqueue) {
      throw new Error("Error");
    }
    this.dqueue[this.tail] = value;
    this.count += 1;
    this.tail -= 1;
    this.tail = this.tail < 0 ? this.lengthOfDqueue - 1 : this.tail;
    return this.dqueue;
  }

  popFromFront() {
    /**
     * Popping values from dqueue from front, if empty throw error
     * Popping values from the front === last value added clockwise.
     * Readjusting the value of head when it is negative
     * When dqueue is empty, reset head and tail values.
     * @return {any}
     */
    if (this.count === 0) {
      throw new Error("Error");
    }
    this.head -= 1;
    this.head =
      this.head < 0 ? (this.head = this.lengthOfDqueue - 1) : this.head;
    let poppedValue = this.dqueue[this.head];
    this.dqueue[this.head] = null;
    this.count -= 1;
    this.resetValuesOnEmpty();
    return poppedValue;
  }

  popFromBack() {
    /**
     * Popping values from dqueue from back, if empty throw error
     * Reset tail value when it is equal to the length
     * When dqueue is empty, reset head and tail values.
     * Popping values from the back === first value added to dqueue when going counter- clockwise.
     * @return {any}
     */
    if (this.count === 0) {
      throw new Error("Error");
    }
    this.tail += 1;
    this.tail = this.tail % this.lengthOfDqueue;
    let poppedValue = this.dqueue[this.tail];
    this.dqueue[this.tail] = null;
    this.count -= 1;
    this.resetValuesOnEmpty();
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

  resetValuesOnEmpty() {
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
}

module.exports = { Dqueue };
