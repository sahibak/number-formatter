'use strict';

/** @TODO add this to all methods
 * Push and pop from a queue
 * @param {string} value
 * @param {number} value
 * @return {array}
 */

class Queue{
    //  creating a queue of length = lengthOfQueue
    // creating a new array of the length provided
    // setting up initial index to 0
    constructor(lengthOfQueue){
        this.lengthOfQueue = lengthOfQueue;
        this.lastUpdatedIndex = 0;
        this.queue = new Array(this.lengthOfQueue)
    }
        
    addValueToQueue(value){
    // pushing value onto the queue
    // if queue is full, throwing an exception
        if (this.lastUpdatedIndex === this.lengthOfQueue){
            throw new Error ("Error");
        }
        this.queue[this.lastUpdatedIndex] = value;
        this.lastUpdatedIndex += 1;
        return this.queue;
    }

    removeValueFromQueue(){
    // popping values from a queue
    // if queue is empty, throwing an exception
        if (this.lastUpdatedIndex === 0){
            throw new Error ("Error");
        }
        this.lastUpdatedIndex -= 1;
        let poppedValue = this.queue[this.lastUpdatedIndex];
        this.queue[this.lastUpdatedIndex] = null;
        return poppedValue;
    }

    printQueue(){
        // printing the queue
        return this.queue;
    }

    checkQueueLength(){
        // checking length of queue
        return this.queue.length;
    }
}

module.exports = {Queue};