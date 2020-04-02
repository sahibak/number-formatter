'use strict';

/** @TODO add this to all methods
 * Push and pop from a queue
 * @param {string} value
 * @param {number} value
 * @return {array}
 */

class Queue {
    //  creating a queue of length = lengthOfQueue
    // creating a new array of the length provided
    // setting up head and tail values. Head value will determine location of pop and tail value will determine location of push. 
    // countOfItems keeps a count of number of items in the array at a given time.
    constructor(lengthOfQueue) {
        this.lengthOfQueue = this.checkLengthInput(lengthOfQueue);
        this.head = 0;
        this.tail = 0;
        this.countOfItems = 0;
        this.queue = new Array(this.lengthOfQueue);
    }

    checkLengthInput(lengthOfQueue){
    // if the lengthOfQueue provided in queue is non-numeric, setting lengthOfStak === 0
        if (!(Number(lengthOfQueue))) {
            return 0;
        }
        return lengthOfQueue;
    }

    push(value) {
    // pushing value onto the queue
    // if queue is full and head===tail, throwing an exception
    // resetting the tail to zero once the length of array is reached.
        if (this.tail === this.head && this.countOfItems === this.lengthOfQueue) {
            throw new Error ("Error");
        }
        this.queue[this.tail] = value;
        this.countOfItems += 1;
        this.tail += 1;
        this.tail === this.lengthOfQueue ? this.tail = this.tail % this.lengthOfQueue : this.tail;
        return this.queue;
    }

    pop() {
    // popping values from a queue
    // if queue is empty, and head === tail throwing an exception
        if(this.head === this.tail && this.countOfItems === 0) {
            throw new Error ("Error");
        }
        let poppedValue = this.queue[this.head];
        this.queue[this.position] = null;
        this.head += 1 ;
        this.countOfItems -= 1;
        return poppedValue;
    }

    print() {
        // printing the queue
        return this.queue;
    }

    size() {
        // checking length of queue
        return this.queue.length;
    }

    addValues(listOfValues){
        // add values to the empty queue till full from a list of values provides.
        for (let i = 0; i < this.lengthOfQueue; i++) {
            this.queue[i] = listOfValues[i];
        }
        return this.queue;
    }
}

module.exports = {Queue};