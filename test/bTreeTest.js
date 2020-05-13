"use strict";

const expect = require("chai").expect;
const { Node } = require("../library/bTree");

let node1 = new Node(8);

describe("#tests on node1", function () {
  it("should add nodes", function () {
    node1.addLink(9);
    node1.addLink(5);
    node1.addLink(2);
    node1.addLink(1);
    expect(node1.printTreeByBreadth()).to.eql([5, 2, 8, 1, 9]);
  });
  // it("should add node to right", function () {
  //   node1.addLink(15);
  //   node1.addLink(5);
  //   node1.addLink(9);
  //   node1.addLink(-1);
  //   node1.addLink(20);
  //   node1.addLink(11);
  //   expect(node1).to.eql({
  //     left: {
  //       left: {
  //         left: null,
  //         data: -1,
  //         right: null,
  //         totalNodesinTree: 1
  //       },
  //       data: 5,
  //       right: {
  //         left: null,
  //         data: 9,
  //         right: null,
  //         totalNodesinTree: 1
  //       },
  //       totalNodesinTree: 1
  //     },
  //     data: 10,
  //     right: {
  //       left: {
  //         left: null,
  //         data: 11,
  //         right: null,
  //         totalNodesinTree: 1
  //       },
  //       data: 15,
  //       right: {
  //         left: null,
  //         data: 20,
  //         right: null,
  //         totalNodesinTree: 1
  //       },
  //       totalNodesinTree: 1
  //     },
  //     totalNodesinTree: 7
  //   });
  // });
  // it("should print all values breadth-first", function () {
  //   expect(node1.printTreeByBreadth()).to.eql([10, 15, 5, 20, 11, 9, -1]);
  // });

  // it("should print all values depth-first", function () {
  //   expect(node1.printTreeByDepth()).to.eql([10, 15, 20, 11, 5, 9, -1]);
  // });
});
