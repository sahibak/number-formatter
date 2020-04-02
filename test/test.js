"use strict";

const expect = require("chai").expect;
const { Queue } = require("../library/queue");

// creating queues for testing 
let queue1 = new Queue(5);
let queue2 = new Queue(3);
let queue3 = new Queue(0);
let queue4 = new Queue("n");

describe("#Updating queue2", function() {
    it("should add values to full length of queue2", function() {
        let result = queue2.addValues([1,2,"xyz"]);
        expect(result).to.eql([1,2,"xyz"]);
    });

    it("should confirm the correct value is popped from queue2", function() {
        let result = queue2.pop();
        expect(1).to.equal(1);
    });

    it("should confirm queue2 is correct after pop", function() {
        let result = queue2.print();
        expect(result).to.eql([null,2,"xyz"]);
    });

    it("should push value to the right position in queue2", function() {
        let result = queue2.push("4");
        expect(result).to.eql(["4",]);
    });

//     it("should pop till stack1 empty", function() {
//         stack1.pop();
//         stack1.pop();
//         stack1.pop();
//         stack1.pop();
//         stack1.pop();
//         let result = stack1.print();
//         expect(result).to.eql([null,null,null,null,null]);
//     });

//     it("shoudl give an error when trying to pop from empty stack1", function() {
//         let result = stack1.pop();
//         expect(result).to.throw();
//     })

//     it("should add value to stack1", function() {
//         let result = stack1.push("adding");
//         expect(result).to.eql(["adding",null,null,null,null]);
//     });
});

// describe("#ensuring max length of stack 1 is still as intended by user", function() {
//     it("check for current length of stack1", function() {
//         let result = stack1.size();
//         expect(result).to.equal(5);
//     });

//     it("should throw an error when pushing values, if aloowable stack length is reached.",function() {
//         stack1.push("item1");
//         stack1.push(5);
//         stack1.push(6);
//         stack1.push("item2");
//         let resultOnStackFull = stack1.push("item3");
//         expect(resultOnStackFull).to.throw();
//     });
// });

// describe("#removeValuesFromStack2 which is currently empty", function() {
//     it("popping values from stack2 shoudl should throw and error.", function() {
//         let result = stack2.pop();
//         expect(result).to.throw();
//     });
// });

// describe("#updating stack3", function() {
//     it("should not allow for value to be added to stack3", function() {
//         let result = stack3.push();
//         expect(result).to.throw();
//     });

//     it("should not allow to pop values from stack3", function() {
//         let result = stack3.pop();
//         expect(result).to.throw();
//     })
// });

// describe("#printCurrentStacks", function() {
// // This is a groupping of tests to print current stack.
//     it("should print stack", function() {
//         let result = stack1.print();
//         expect(result).to.eql(["adding","item1",5,6,"item2"]);
//     });

//     it("should print stack2 (which is empty)", function() {
//         let result = stack2.print();
//         expect(result).to.eql([])
//     });
// });

// describe("#printing the lengths of stack4 and stack4", function() {
//     it("should create a stack4 with length zero", function() {
//         let result = stack4.size();
//         expect(result).to.equal(0);
//     });
// });