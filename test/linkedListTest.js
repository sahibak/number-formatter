"use strict";

const expect = require("chai").expect;
const { Node } = require("../library/linkedList");

let node1 = new Node();

describe("#creating a node", function () {
  it("should create a new Node", function () {
    expect(node1).to.eql({ data: 1, next: null });
  });

  it("should add first next node to node1", function () {
    expect(node1.addLink()).to.eql({ data: 1, next: { data: 2, next: null } });
  });

  it("should add second node to node1", function () {
    expect(node1.addLink()).to.eql({
      data: 1,
      next: { data: 2, next: { data: 3, next: null } }
    });
  });

  it("should add third node to node1", function () {
    expect(node1.addLink()).to.eql({
      data: 1,
      next: {
        data: 2,
        next: { data: 3, next: { data: 4, next: null } }
      }
    });
  });
});
