"use strict";

const expect = require("chai").expect;
const { Dstack } = require("../library/dstack");

// creating dstacks for testing
let dstack1 = new Dstack(3, 10);
let dstack2 = new Dstack(3, 10);
let dstack3 = new Dstack(0, 5);

//  Helper function
function createDstack(dstack, array) {
  for (let i = 0; i < array.length; i++) {
    dstack.push(array[i]);
  }
  return dstack.Dstack;
}

function emptyDstack(dstack, countOfPops) {
  for (let i = 1; i <= countOfPops; i++) {
    dstack.pop();
  }
  return dstack.Dstack;
}

describe("#Updating dstack1", function () {
  it("should add values to Dstack1 for full length", function () {
    let arrayProvided = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = createDstack(dstack1, arrayProvided);
    expect(result).to.eql(arrayProvided);
  });

  it("should give an error on adding anymore values to Dstack1", function () {
    expect(() => createDstack(dstack1, [10, 11])).to.throw();
  });

  it("should pop values from Dstack1 till empty", function () {
    emptyDstack(dstack1, 10);
    expect(dstack1.print()).to.eql([
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ]);
  });
});

describe("#Updating dstack2", function () {
  it("should return length set at initialization", function () {
    expect(dstack2.size()).to.eql(3);
  });

  it("should give length equal to the double of initalization length", function () {
    let arrayProvided = [0, 1, 2, 3, 4];
    createDstack(dstack2, arrayProvided);
    expect(dstack2.size()).to.eql(6);
  });
});

describe("#Updating dstack3", function () {
  it("should return length set at initialization", function () {
    expect(dstack3.size()).to.eql(0);
  });

  it("should give an error while trying to add values to the stack", function () {
    let arrayProvided = [0, 1, 2, 3, 4];
    expect(() => createDstack(dstack3, arrayProvided)).to.throw();
  });
});

describe("#Initializing a new dstack", function () {
  it("should return error when maxLength is non-integer", function () {
    expect(() => new Dstack(1, n)).to.throw();
  });

  it("should return error when length is non-integer", function () {
    expect(() => new Dstack(n, 1)).to.throw();
  });

  it("should return error when length and maxlength are non-integer", function () {
    expect(() => new Dstack(n, n)).to.throw();
  });
});
