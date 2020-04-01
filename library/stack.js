'use strict';

/** @TODO add this to all methods
 * Push and pop from a stack
 * @param {string} value
 * @param {number} value
 * @return {array}
 */

class Stack {
    //  creating a stack of length = lengthOfStack
    // creating a new array of the length provided
    // setting up initial index to 0
    constructor(lengthOfStack) {
        this.lengthOfStack = this.checkLengthInput(lengthOfStack);
        this.position = 0;
        this.stack = new Array(this.lengthOfStack);
    }

    checkLengthInput(lengthOfStack){
    // if the lengthOfStack provided in stack is non-numeric, setting lengthOfStak === 0
        if (!(Number(lengthOfStack))) {
            return 0;
        }
        return lengthOfStack;
    }

    push(value) {
    // pushing value onto the stack
    // if stack is full, throwing an exception
        if (this.position === this.lengthOfStack) {
            throw new Error ("Error");
        }
        this.stack[this.position] = value;
        this.position += 1;
        return this.stack;
    }

    pop() {
    // popping values from a stack
    // if stack is empty, throwing an exception
        if(this.position === 0) {
            throw new Error ("Error");
        }
        this.position -= 1;
        let poppedValue = this.stack[this.position];
        this.stack[this.position] = null;
        return poppedValue;
    }

    print() {
        // printing the stack
        return this.stack;
    }

    size() {
        // checking length of stack
        return this.stack.length;
    }
}

module.exports = {Stack};