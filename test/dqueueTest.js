"use strict";

const expect = require("chai").expect;
const { Dqueue } = require("../library/dqueue");

// creating dqueues for testing
let dqueue1 = new Dqueue(5);
let dqueue2 = new Dqueue(5);
let dqueue3 = new Dqueue(4);
let dqueue4 = new Dqueue(0);
let dqueue5 = new Dqueue(2);

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
    expect(result).to.eql([null, "c", "a", "b", "z"]);
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
    expect(result).to.eql("e");
  });
});

describe("#Updating dqueue3", function () {
  it("should add values dqueue3", function () {
    dqueue3.pushToBack("a");
    dqueue3.pushToFront("b");
    dqueue3.pushToFront("c");
    let result = dqueue3.pushToBack("d");
    expect(result).to.eql(["b", "c", "d", "a"]);
  });

  it("should not add values dqueue3", function () {
    expect(() => dqueue3.pushToFront("c")).to.throw();
  });

  it("should remove values dqueue3 and then add in other values", function () {
    dqueue3.popFromFront();
    dqueue3.popFromFront();
    dqueue3.popFromFront();
    let result = dqueue3.print();
    expect(result).to.eql([null, null, "d", null]);
  });
});

describe("#Initalize a dqueue with non-integer length value", function () {
  it("should throw and error", function () {
    expect(() => new Dqueue("n")).to.throw();
  });
});

describe("#Remove values from dqueue with length zero", function () {
  it("throw an error when trying to pop values from dqueue4 from front", function () {
    expect(dqueue4.popFromFront).to.throw();
  });

  it("throw an error when trying to pop values from dqueue4 from back", function () {
    expect(dqueue4.popFromBack).to.throw();
  });
});

describe("#Should not allow to add values to dqueue with length zero.", function () {
  it("should not allow for value to be added to dqueue from front", function () {
    expect(() => this.dqueue4.pushToFront("xyx")).to.throw();
  });

  it("should not allow for value to be added to dqueue from back", function () {
    expect(() => this.dqueue4.pushToBack("xyx")).to.throw();
  });
});

describe("#updating dqueue5", function () {
  it("should not allow to add value to dqueue after length has been reached.", function () {
    dqueue5.pushToFront("a");
    dqueue5.pushToFront("b");
    let result = dqueue5.size();
    expect(result).to.equal(2);
    expect(() => dqueue5.pushToFront("b")).to.throw();
  });
});
