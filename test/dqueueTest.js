"use strict";

const expect = require("chai").expect;
const { Dqueue } = require("../library/dqueue");

// creating dqueues for testing
let dqueue1 = new Dqueue(5);
let dqueue2 = new Dqueue(5);

describe("#Updating dqueue1", function () {
  it("should add values dqueue1 from front and back", function () {
    dqueue1.pushToFront("a");
    dqueue1.pushToFront("b");
    dqueue1.pushToBack("c");
    dqueue1.pushToBack("d");
    let result = dqueue1.pushToFront("e");
    expect(result).to.eql(["a", "b", "e", "d", "c"]);
  });

  it("should give an error trying to add anymore values to dqueue1 from front", function () {
    expect(() => dqueue1.pushToFront("f")).to.throw();
  });

  it("should give an error trying to add anymore values to dqueue1 from back", function () {
    expect(() => dqueue1.pushToBack("f")).to.throw();
  });

  it("should pop values from dqueue1 from back", function () {
    dqueue1.popFromBack();
    dqueue1.popFromBack();
    dqueue1.popFromBack();
    dqueue1.popFromBack();
    let result = dqueue1.popFromBack();
    expect(result).to.eql("e");
  });

  it("should add value to the correct place when adding to dqueue1", function () {
    dqueue1.pushToBack("a");
    dqueue1.pushToFront("b");
    dqueue1.pushToBack("c");
    let result = dqueue1.pushToFront("z");
    expect(result).to.eql(["b", "z", null, "c", "a"]);
  });
});

describe("#Updating dqueue2", function () {
  it("should add values dqueue2 from back", function () {
    dqueue2.pushToBack("a");
    dqueue2.pushToBack("b");
    dqueue2.pushToBack("c");
    dqueue2.pushToBack("d");
    let result = dqueue2.pushToBack("e");
    expect(result).to.eql(["e", "d", "c", "b", "a"]);
  });

  it("should removes values dqueue2 from front", function () {
    dqueue2.popFromFront();
    dqueue2.popFromFront();
    dqueue2.popFromFront();
    dqueue2.popFromFront();
    let result = dqueue2.popFromFront();
    expect(result).to.eql("a");
  });
});
