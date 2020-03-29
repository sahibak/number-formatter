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

addValueToStack = (value) => {
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

removeValueFromStack = (value) => {
    // popping values from a stack
    if (lastUpdatedIndex === 0){
        return "Stack is empty,nothing to pop."
    }
    else {
        stack.splice(1,lastUpdatedIndex - 1);
        lastUpdatedIndex -= 1;
        return stack;
    }
}

printStack = () => {
    // printing the stack
    return stack;
}


