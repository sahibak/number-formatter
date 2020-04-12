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

// describe("#Updating dstack1", function () {
//   it("should add values to Dstack1 for full length", function () {
//     let arrayProvided = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     let result = createDstack(dstack1, arrayProvided);
//     expect(result).to.eql(arrayProvided);
//   });

//   it("should give an error on adding anymore values to Dstack1", function () {
//     expect(() => createDstack(dstack1, [10, 11])).to.throw();
//   });

//   it("should pop values from Dstack1 till empty", function () {
//     let result = emptyDstack(dstack1, 10);
//     expect(result).to.eql([
//       null,
//       null,
//       null,
//       null,
//       null,
//       null,
//       null,
//       null,
//       null,
//       null
//     ]);
//   });
// });

describe("#Updating dstack2", function () {
  it("should return length set at initialization", function () {
    expect(dstack2.size()).to.eql(3);
  });

  it("should add values to Dstack2", function () {
    let arrayProvided = [0, 1, 2, 3, 4];
    let result = createDstack(dstack2, arrayProvided);
    expect(result).to.eql(arrayProvided);
  });

  it("should give length of double the intialization length", function () {
    expect(dstack2.size()).to.eql(6);
  });
});
