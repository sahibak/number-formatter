'use strict';

const expect = require('chai').expect;
// const { addValueToStack, removeValueFromStack, printStack } = require('../library/stack');
const { StackCreation } = require('../library/stack');

let stack1 = new StackCreation(5);
let stack2 = new StackCreation(3);

describe('#addValuesToStack1', function() {
// describe used to group tests - this is a groupping of tests to add/remove values from stack1
    it('should add values to stack1', function() {
        stack1.addValueToStack(1);
        stack1.addValueToStack(1);
        stack1.addValueToStack(1);
        stack1.addValueToStack("xyz");
        let result = stack1.addValueToStack(1);
        expect(result).to.eql([1,1,1,"xyz",1]);
    });

    it('should not be able to add to stack1', function() {
        let result = stack1.addValueToStack(1);
        expect(result).to.equal("Error");
    });

    it('should pop value from stack1', function() {
        let result = stack1.removeValueFromStack();
        expect(result).to.eql([1,1,1,"xyz",]);
    });

    it('should push value to stack1', function() {
        let result = stack1.addValueToStack("4");
        expect(result).to.eql([1,1,1,"xyz","4"]);
    });

    it("should pop till stack1 empty", function() {
        stack1.removeValueFromStack();
        stack1.removeValueFromStack();
        stack1.removeValueFromStack();
        stack1.removeValueFromStack();
        let result = stack1.removeValueFromStack();
        let resultOnEmptyStack = stack1.removeValueFromStack();
        expect(result).to.eql([]);
        expect(resultOnEmptyStack).to.equals("Error");
    });

    it('should add value to stack1', function() {
        let result = stack1.addValueToStack("adding");
        expect(result).to.eql(["adding"]);
    });
});

describe("ensuring max length of stack 1 is still as intended by user", function(){
    it("check for current length of stack1", function(){
        let result = stack1.checkStackLength();
        expect(result).to.equal(1);
    });

    it("should only only to add 4 more items to the stack",function(){
        stack1.addValueToStack("item1");
        stack1.addValueToStack(5);
        stack1.addValueToStack(6);
        let result = stack1.addValueToStack("item2");
        let resultOnStackFull = stack1.addValueToStack("item3");
        expect(result).to.eql(["adding","item1",5,6,"item2"]);
        expect(resultOnStackFull).to.equals("Error");
    });
})

describe('#removeValuesFromStack2', function() {
// Removes values from stack2.
    it('should pop value from stack2', function() {
        let result = stack2.removeValueFromStack();
        expect(result).to.equal("Error");
    });
});

describe('#printCurrentStacks', function() {
// This is a groupping of tests to print current stack.
    it("should print stack", function(){
        let result = stack1.printStack();
        expect(result).to.eql(["adding","item1",5,6,"item2"]);
    });

    // it("should print stack2", function(){
    //     let result = stack2.printStack();
    //     expect(result).to.eql()
    // });
});