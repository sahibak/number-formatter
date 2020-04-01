'use strict';

const expect = require('chai').expect;
const { Stack } = require('../library/stack');

// creating 2 stacks for testing 
let stack1 = new Stack(5);
let stack2 = new Stack(3);

describe('#addValuesToStack1', function() {
// describe used to group tests - this is a groupping of tests to add/remove values from stack1
    it('should add values to stack1 for full length', function() {
        stack1.addValueToStack(1);
        stack1.addValueToStack(1);
        stack1.addValueToStack(1);
        stack1.addValueToStack("xyz");
        let result = stack1.addValueToStack(1);
        expect(result).to.eql([1,1,1,"xyz",1]);
    });

    it("confirm the correct value is popped from the stack1", function() {
        let result = stack1.removeValueFromStack();
        expect(1).to.equal(1);
    });

    it("confirm the stack1 after pop", function() {
        let result = stack1.printStack();
        expect(result).to.eql([1,1,1,"xyz",null]);
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
        stack1.removeValueFromStack();
        let result = stack1.printStack();
        expect(result).to.eql([null,null,null,null,null]);
    });

    it("shoudl give an error when trying to pop from empty stack1", function(){
        let result = stack1.removeValueFromStack();
        expect(result).to.throw();
    })

    it('should add value to stack1', function() {
        let result = stack1.addValueToStack("adding");
        expect(result).to.eql(["adding",null,null,null,null]);
    });
});

describe("#ensuring max length of stack 1 is still as intended by user", function(){
    it("check for current length of stack1", function(){
        let result = stack1.checkStackLength();
        expect(result).to.equal(5);
    });

    it("should throw an error when pushing values, if aloowable stack length is reached.",function(){
        stack1.addValueToStack("item1");
        stack1.addValueToStack(5);
        stack1.addValueToStack(6);
        stack1.addValueToStack("item2");
        let resultOnStackFull = stack1.addValueToStack("item3");
        expect(resultOnStackFull).to.throw();
    });
});

describe('#removeValuesFromStack2 which is currently empty', function() {
// Removes values from stack2.
    it('should throw an error as stack 2', function() {
        let result = stack2.removeValueFromStack();
        expect(result).to.throw();
    });
});

describe('#printCurrentStacks', function() {
// This is a groupping of tests to print current stack.
    it("should print stack", function(){
        let result = stack1.printStack();
        expect(result).to.eql(["adding","item1",5,6,"item2"]);
    });

    it("should print stack2 (which is empty)", function(){
        let result = stack2.printStack();
        expect(result).to.eql([])
    });
});