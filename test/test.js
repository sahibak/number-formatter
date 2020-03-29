'use strict';

const expect = require('chai').expect;
const { addValueToStack, removeValueFromStack, printStack } = require('../index');

describe('#addValueToStack', function() {
    it('should add values to stack', function() {
        addValueToStack(1);
        addValueToStack(1);
        addValueToStack(1);
        addValueToStack("xyz");
        let result = addValueToStack(1);
        expect(result).to.eql([1,1,1,"xyz",1]);
    });

    it('should not be able to add to stack', function() {
        let result = addValueToStack(1);
        expect(result).to.equals("Stack is full, cannot push.");
    });

    it('should pop value from stack', function() {
        let result = removeValueFromStack();
        expect(result).to.eql([1,1,1,"xyz",]);
    });

    it('should push value to stack', function() {
        let result = addValueToStack("4");
        expect(result).to.eql([1,1,1,"xyz","4"]);
    });

    it("should pop till stack empty", function() {
        removeValueFromStack();
        removeValueFromStack();
        removeValueFromStack();
        removeValueFromStack();
        removeValueFromStack();
        let result = removeValueFromStack();
        expect(result).to.equals("Stack is empty,nothing to pop.");
    });

    it('should add value to stack', function() {
        let result = addValueToStack("adding");
        expect(result).to.eql(["adding"]);
    });

    it("should print stack", function(){
        let result = printStack();
        expect(result).to.eql(["adding"]);
    })
});