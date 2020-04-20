"use strict";

class Dstack {
  /**
   * Dstack is a dynamic stack that doubles in length when intial length is reached.
   * max length is the allowable integer till when the stack is allowed to increase in length.
   * creating a Dstack of length = lengthOfDstack
   * creating a new array of the length provided
   * setting up initial index to 0
   * @param {integer} lengthOfDstack
   * @return {Dstack}
   */
  constructor(lengthOfDstack, maxLength) {
    this.verifyLengthInput(lengthOfDstack, maxLength);
    this.lengthOfDstack = lengthOfDstack;
    this.maxLength = maxLength;
    this.position = 0;
    this.Dstack = new Array(this.lengthOfDstack);
  }

  verifyLengthInput(lengthOfDstack, maxLength) {
    /**
     * checking lengthOfDstack && maxLength provided in Dstack are numeric.
     * @param {integer} lengthOfDstack
     * @param {integer} maxLength
     * @return {integer, integer}
     */
    if (!Number.isInteger(lengthOfDstack) || !Number.isInteger(maxLength)) {
      throw new Error("Provide integer value for length and max length.");
    }
    return lengthOfDstack, maxLength;
  }

  push(value) {
    /**
     * pushing value onto the Dstack
     * if Dstack is full, doubling up the length before inserting the value.
     * length can only be increased till maxLength value.
     * if maxlength is reached, no more pushes allowed.
     * @param {any} value
     * @return {Dstack}
     */
    if (this.position === this.maxLength || this.lengthOfDstack === 0) {
      throw new Error("Error");
    }
    if (this.position === this.lengthOfDstack) {
      this.lengthOfDstack = Math.min(this.lengthOfDstack * 2, this.maxLength);
      let previousStack = this.Dstack;
      this.Dstack = new Array(this.lengthOfDstack);
      this.updateNewStack(previousStack);
    }
    this.Dstack[this.position] = value;
    this.position += 1;
    return this.Dstack;
  }

  pop() {
    /**
     * popping values from a Dstack
     * if Dstack is empty, throwing an exception
     * @return {any}
     */
    if (this.position === 0) {
      throw new Error("Error");
    }
    this.position -= 1;
    let poppedValue = this.Dstack[this.position];
    this.Dstack[this.position] = null;
    return poppedValue;
  }

  print() {
    /**
     * printing the Dstack
     * @return {Dstack}
     */
    return this.Dstack;
  }

  size() {
    /**
     * checking length of Dstack
     * @return {integer}
     */
    return this.Dstack.length;
  }

  updateNewStack(previousStack) {
    /**
     * when a new dstack is created (when lengthOfDstack is doubled), previous dstack is saved under previousStack.
     * Adding values from previousStack to the new Dstack.
     * @param {array} previousStack
     * @return {Dstack}
     */
    for (let i = 0; i < previousStack.length; i++) {
      this.Dstack[i] = previousStack[i];
    }
    return this.Dstack;
  }
}

module.exports = { Dstack };
