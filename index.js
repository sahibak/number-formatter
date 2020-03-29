'use strict';

/**
 * Push and pop from a stack
 * @param {string} value
 * @param {number} value
 * @return {string}
 * @return {array}
 */

//  creating a stack of length 5
let lengthOfStack = 5
let stack = new Array(lengthOfStack);
let lastUpdatedIndex = 0;

let addValueToStack = (value) => {
// pushing value onto the stack
    if (lastUpdatedIndex === lengthOfStack){
        return "Stack is full, cannot push."
    }
    else {
        stack[lastUpdatedIndex] = value;
        lastUpdatedIndex += 1;
        return stack;
    }
}

let removeValueFromStack = () => {
    // popping values from a stack
    if (lastUpdatedIndex === 0){
        return "Stack is empty,nothing to pop."
    }
    else {
        let itemPopped = stack.splice(lastUpdatedIndex - 1,1);
        lastUpdatedIndex -= 1;
        return stack;
    }
}

let printStack = () => {
    // printing the stack
    return stack;
}

module.exports = {
    addValueToStack,
    removeValueFromStack,
    printStack
}

