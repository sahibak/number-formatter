"use strict";

const expect = require("chai").expect;
const { Stack } = require("../library/stack");

// creating 2 stacks for testing 
let stack1 = new Stack(5);
let stack2 = new Stack(3);
let stack3 = new Stack(0);
let stack4 = new Stack("n");

describe("#addValuesToStack1", function() {
// describe used to group tests - this is a groupping of tests to add/remove values from stack1
    it("should add values to stack1 for full length", function() {
        stack1.push(1);
        stack1.push(1);
        stack1.push(1);
        stack1.push("xyz");
        let result = stack1.push(1);
        expect(result).to.eql([1,1,1,"xyz",1]);
    });

    it("confirm the correct value is popped from the stack1", function() {
        let result = stack1.pop();
        expect(1).to.equal(1);
    });

    it("confirm the stack1 after pop", function() {
        let result = stack1.print();
        expect(result).to.eql([1,1,1,"xyz",null]);
    });

    it("should push value to stack1", function() {
        let result = stack1.push("4");
        expect(result).to.eql([1,1,1,"xyz","4"]);
    });

    it("should pop till stack1 empty", function() {
        stack1.pop();
        stack1.pop();
        stack1.pop();
        stack1.pop();
        stack1.pop();
        let result = stack1.print();
        expect(result).to.eql([null,null,null,null,null]);
    });

    it("shoudl give an error when trying to pop from empty stack1", function() {
        let result = stack1.pop();
        expect(result).to.throw();
    })

    it("should add value to stack1", function() {
        let result = stack1.push("adding");
        expect(result).to.eql(["adding",null,null,null,null]);
    });
});

describe("#ensuring max length of stack 1 is still as intended by user", function() {
    it("check for current length of stack1", function() {
        let result = stack1.size();
        expect(result).to.equal(5);
    });

    it("should throw an error when pushing values, if aloowable stack length is reached.",function() {
        stack1.push("item1");
        stack1.push(5);
        stack1.push(6);
        stack1.push("item2");
        let resultOnStackFull = stack1.push("item3");
        expect(resultOnStackFull).to.throw();
    });
});

describe("#removeValuesFromStack2 which is currently empty", function() {
    it("popping values from stack2 shoudl should throw and error.", function() {
        let result = stack2.pop();
        expect(result).to.throw();
    });
});

describe("#updating stack3", function() {
    it("should not allow for value to be added to stack3", function() {
        let result = stack3.push();
        expect(result).to.throw();
    });

    it("should not allow to pop values from stack3", function() {
        let result = stack3.pop();
        expect(result).to.throw();
    })
});

describe("#printCurrentStacks", function() {
// This is a groupping of tests to print current stack.
    it("should print stack", function() {
        let result = stack1.print();
        expect(result).to.eql(["adding","item1",5,6,"item2"]);
    });

    it("should print stack2 (which is empty)", function() {
        let result = stack2.print();
        expect(result).to.eql([])
    });
});

describe("#printing the lengths of stack4 and stack4", function() {
    it("should create a stack4 with length zero", function() {
        let result = stack4.size();
        expect(result).to.equal(0);
    });
});