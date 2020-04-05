"use strict";

class Stack {
  /**
   * creating a stack of length = lengthOfStack
   * creating a new array of the length provided
   * setting up initial index to 0
   * @param {integer} lengthOfStack
   * @return {stack}
   */
  constructor(lengthOfStack) {
    this.verifyLengthInput(lengthOfStack);
    this.lengthOfStack = lengthOfStack;
    this.position = 0;
    this.stack = new Array(this.lengthOfStack);
  }

  verifyLengthInput(lengthOfStack) {
    /**
     * if the lengthOfStack provided in stack is non-numeric, setting lengthOfStak === 0
     * @param {integer} lengthOfStack
     * @return {integer}
     */
    if (!Number.isInteger(lengthOfStack)) {
      throw new Error("Provide integer value for length.");
    }
    return lengthOfStack;
  }

  push(value) {
    /**
     * pushing value onto the stack
     * if stack is full, throwing an exception
     * @param {any} value
     * @return {stack}
     */
    if (this.position === this.lengthOfStack) {
      throw new Error("Error");
    }
    this.stack[this.position] = value;
    this.position += 1;
    return this.stack;
  }

  pop() {
    /**
     * popping values from a stack
     * if stack is empty, throwing an exception
     * @return {any}
     */
    if (this.position === 0) {
      throw new Error("Error");
    }
    this.position -= 1;
    let poppedValue = this.stack[this.position];
    this.stack[this.position] = null;
    return poppedValue;
  }

  print() {
    /**
     * printing the stack
     * @return {stack}
     */
    return this.stack;
  }

  size() {
    /**
     * checking length of stack
     * @return {integer}
     */
    return this.stack.length;
  }
}

module.exports = { Stack };
