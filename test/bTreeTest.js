"use strict";

const expect = require("chai").expect;
const { Node } = require("../library/bTree");

let node1 = new Node(10);

describe("#tests on node1", function () {
  it("should add node to right", function () {
    node1.addLink(15);
    node1.addLink(5);
    node1.addLink(9);
    node1.addLink(-1);
    expect(node1).to.eql({
      left: {
        left: {
          left: null,
          data: -1,
          right: null,
        },
        data: 5,
        right: {
          left: null,
          data: 9,
          right: null,
        },
      },
      data: 10,
      right: {
        left: null,
        data: 15,
        right: null,
      },
    });
  });
});
