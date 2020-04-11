"use strict";

const expect = require("chai").expect;
const { Queue } = require("../library/queue");

// Creating queues for testing
let queue2 = new Queue(3);
let queue3 = new Queue(0);

// Helper functions
function createQueue(queue, listOfValues) {
  /**
   * Add values to the empty queue till it is full, from a list of values provides.
   * This function is used for testing.
   * @return {array}
   */
  for (let i = 0; i < queue.lengthOfQueue; i++) {
    queue.push(listOfValues[i]);
  }
  return queue.queue;
}

function emptyQueue(queue) {
  /**
   * Empty the queue.
   * This function is used for testing.
   * @return {array}
   */
  for (let i = queue.countOfItems; i > 0; i--) {
    queue.pop();
  }
  return queue.queue;
}

describe("#Updating queue2", function () {
  it("should add values to full length of queue2", function () {
    let result = createQueue(queue2, [1, 2, "xyz"]);
    expect(result).to.eql([1, 2, "xyz"]);
  });

  it("should confirm the correct value is popped from queue2", function () {
    let result = queue2.pop();
    expect(result).to.equal(1);
  });

  it("should confirm queue2 is correct after pop", function () {
    let result = queue2.print();
    expect(result).to.eql([null, 2, "xyz"]);
  });

  it("should push value to the right position in queue2", function () {
    let result = queue2.push("4");
    expect(result).to.eql(["4", 2, "xyz"]);
  });

  it("should pop till queue2 empty", function () {
    let result = emptyQueue(queue2);
    expect(result).to.eql([null, null, null]);
  });

  it("shoudl give an error when trying to pop from empty queue2", function () {
    expect(queue2.pop).to.throw();
  });

  it("should maintain the same length as initialization", function () {
    let result = queue2.size();
    expect(result).to.equal(3);
  });

  it("should add an item to queue2", function () {
    let result = queue2.push("ldjfglfd");
    expect(result).to.eql([null, "ldjfglfd", null]);
  });
});

describe("#Remove values from queue with length zero", function () {
  it("throw an error when trying to pop values from queue3", function () {
    expect(queue3.pop).to.throw();
  });

  it("should return size of dqueue3", function () {
    expect(queue3.size()).to.equal(0);
  });
});

describe("#Should not allow to add values to queue with length zero.", function () {
  it("should not allow for value to be added to queue3", function () {
    expect(() => this.queue3.push("xyx")).to.throw();
  });
});

describe("#Initalize a queue with non-integer length value", function () {
  it("should throw and error", function () {
    expect(() => new Queue("n")).to.throw();
  });
});
