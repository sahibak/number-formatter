'use strict';

/**
 * Push and pop from a stack
 * @param {string} value
 * @param {number} value
 * @return {array}
 */

//  creating a stack of length 5
let lengthOfStack = 5
let stack = new Array(lengthOfStack);
let lastUpdatedIndex = 0;

let addValueToStack = (value) => {
// pushing value onto the stack
// if stack is full, throwing an exception
    if (lastUpdatedIndex === lengthOfStack){
        throw new Error("Stack is full, cannot push.");
    }
    stack[lastUpdatedIndex] = value;
    lastUpdatedIndex += 1;
    return stack;
}

let removeValueFromStack = () => {
// popping values from a stack
// if stack is empty, throwing an exception
    if (lastUpdatedIndex === 0){
        throw "Stack is empty,nothing to pop."
    }
    let itemPopped = stack.splice(lastUpdatedIndex - 1,1);
    lastUpdatedIndex -= 1;
    return stack;
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

