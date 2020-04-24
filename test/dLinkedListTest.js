"use strict";

const expect = require("chai").expect;
const { Node } = require("../library/dLinkedList");

let node1 = new Node("a");

describe("#tests on node1", function () {
  it("should add first next node to node1", function () {
    node1.addLinkToBack(1);
    expect(node1.addLinkCheck()).to.eql(["a", 1]);
  });

  it("should add second next node to node1", function () {
    node1.addLinkToBack(2);
    expect(node1.addLinkCheck()).to.eql(["a", 1, 2]);
  });

  it("should add link to the beginning of node1", function () {
    node1.addLinkToFront(55);
    expect(node1.addLinkCheck()).to.eql([55, "a", 1, 2]);
  });
});
