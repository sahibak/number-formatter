'use strict';

// /**
//  * Push and pop from a stack
//  * @param {string} value
//  * @param {number} value
//  * @return {array}
//  */

class StackCreation{
    //  creating a stack of length = lengthOfStack
    // creating a new array of the length provided
    // setting up initial index to 0
    constructor(lengthOfStack){
        this.lengthOfStack = lengthOfStack;
        this.lastUpdatedIndex = 0;
        this.stack = new Array(this.lengthOfStack)
    }

    addValueToStack(value){
    // pushing value onto the stack
    // if stack is full, throwing an exception
        if (this.lastUpdatedIndex === this.lengthOfStack){
            return "Error";
        }
        this.stack[this.lastUpdatedIndex] = value;
        this.lastUpdatedIndex += 1;
        return this.stack;
    }

    removeValueFromStack(){
    // popping values from a stack
    // if stack is empty, throwing an exception
        if (this.lastUpdatedIndex === 0){
            return "Error";
        }
        let itemPopped = this.stack.splice(this.lastUpdatedIndex - 1,1);
        this.lastUpdatedIndex -= 1;
        return this.stack;
    }

    printStack(){
        // printing the stack
        return this.stack;
    }

    checkStackLength(){
        // checking length of stack
        return this.stack.length;
    }
}

module.exports = {StackCreation};
    // // exporting modules from the file to allow to be used in other files
    // module.exports = {
    //     addValueToStack,
    //     removeValueFromStack,
    //     printStack
    // }