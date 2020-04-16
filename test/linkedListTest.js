"use strict";

const expect = require("chai").expect;
const { Node } = require("../library/linkedList");

let node1 = new Node();

describe("#creating a node", function () {
  it("should create a new Node", function () {
    expect(node1).to.eql({ data: 1, next: null });
  });

  it("should add first next node to node1", function () {
    expect(node1.addLinkToBack()).to.eql({
      data: 1,
      next: { data: 2, next: null }
    });
  });

  it("should add second node to node1", function () {
    expect(node1.addLinkToBack()).to.eql({
      data: 1,
      next: { data: 2, next: { data: 3, next: null } }
    });
  });

  it("should add third node to node1", function () {
    expect(node1.addLinkToBack()).to.eql({
      data: 1,
      next: {
        data: 2,
        next: { data: 3, next: { data: 4, next: null } }
      }
    });
  });

  it("should find the data 1", function () {
    expect(node1.containes(1)).to.eql(true);
  });

  it("should find the data 4", function () {
    expect(node1.containes(4)).to.eql(true);
  });

  it("should find the data 3", function () {
    expect(node1.containes(3)).to.eql(true);
  });

  //   it("should add link to the beginning", function () {
  //     expect(node1.addLinkToFront()).to.eql({
  //       data: 1,
  //       next: {
  //         data: 1,
  //         next: {
  //           data: 2,
  //           next: { data: 3, next: { data: 4, next: null } }
  //         }
  //       }
  //     });
  //   });

  it("should remove the 1st node", function () {
    expect(node1.removeFirst()).to.eql({
      data: 2,
      next: { data: 3, next: { data: 4, next: null } }
    });
  });

  it("should remove the 1st node", function () {
    expect(node1.removeFirst()).to.eql({
      data: 3,
      next: { data: 4, next: null }
    });
  });

  it("should remove the 1st node", function () {
    expect(node1.removeFirst()).to.eql({
      data: 4,
      next: null
    });
  });

  it("should remove the 1st node", function () {
    expect(node1.removeFirst()).to.eql({
      data: null,
      next: null
    });
  });

  //   it("should empty the node1 to have no links", function () {
  //     expect(node1.removeAll()).to.eql({ data: 1, next: null });
  //   });
});
