"use strict";

const expect = require("chai").expect;
const { Node } = require("../library/linkedList");

let node1 = new Node("a");
let node2 = new Node("a");
let node3 = new Node("a");

describe("#tests on node1", function () {
  it("should create a new Node", function () {
    expect(node1).to.eql({ data: "a", next: null });
  });

  it("should add first next node to node1", function () {
    expect(node1.addLinkToBack(1)).to.eql({
      data: "a",
      next: { data: 1, next: null },
    });
  });

  it("should add second node to node1", function () {
    expect(node1.addLinkToBack(2)).to.eql({
      data: "a",
      next: { data: 1, next: { data: 2, next: null } },
    });
  });

  it("should add third node to node1", function () {
    expect(node1.addLinkToBack(3)).to.eql({
      data: "a",
      next: {
        data: 1,
        next: { data: 2, next: { data: 3, next: null } },
      },
    });
  });

  it("should find the data 1", function () {
    expect(node1.contains(1)).to.eql(true);
  });

  it("should not find the data 4", function () {
    expect(node1.contains(4)).to.eql(false);
  });

  it("should find the data 3", function () {
    expect(node1.contains(3)).to.eql(true);
  });

  it("should remove the 1st node", function () {
    expect(node1.removeFirst()).to.eql({
      data: 1,
      next: { data: 2, next: { data: 3, next: null } },
    });
  });

  it("should remove the 1st node", function () {
    expect(node1.removeFirst()).to.eql({
      data: 2,
      next: { data: 3, next: null },
    });
  });

  it("should remove the 1st node", function () {
    expect(node1.removeFirst()).to.eql({
      data: 3,
      next: null,
    });
  });

  it("should remove the 1st node", function () {
    expect(node1.removeFirst()).to.eql({
      data: null,
      next: null,
    });
  });
});

describe("#tests on node2", function () {
  it("should create a new Node", function () {
    expect(node2).to.eql({ data: "a", next: null });
  });

  it("should add first next node to node2", function () {
    expect(node2.addLinkToBack("b")).to.eql({
      data: "a",
      next: { data: "b", next: null },
    });
  });

  it("should add second node to node2", function () {
    expect(node2.addLinkToBack("c")).to.eql({
      data: "a",
      next: { data: "b", next: { data: "c", next: null } },
    });
  });

  it("should add third node to node2", function () {
    expect(node2.addLinkToBack("d")).to.eql({
      data: "a",
      next: {
        data: "b",
        next: { data: "c", next: { data: "d", next: null } },
      },
    });
  });

  it("should add link to the beginning", function () {
    expect(node2.addLinkToFront(55)).to.eql({
      data: 55,
      next: {
        data: "a",
        next: {
          data: "b",
          next: { data: "c", next: { data: "d", next: null } },
        },
      },
    });
  });

  it("should empty the node1 to have no links", function () {
    expect(node2.removeAll()).to.eql({ data: null, next: null });
  });
});

describe("#tests on node3", function () {
  it("should add links to node3", function () {
    node3.addLinkToBack("b");
    node3.addLinkToBack("c");
    expect(node3.addLinkToBack("d")).to.eql({
      data: "a",
      next: {
        data: "b",
        next: { data: "c", next: { data: "d", next: null } },
      },
    });
  });

  it("should add a new node on position 2 to node3", function () {
    expect(node3.addLink("e", 2)).to.eql({
      data: "a",
      next: {
        data: "b",
        next: {
          data: "e",
          next: { data: "c", next: { data: "d", next: null } },
        },
      },
    });
  });

  it("should add a new node on position 0 to node3", function () {
    expect(node3.addLink("f", 0)).to.eql({
      data: "f",
      next: {
        data: "a",
        next: {
          data: "b",
          next: {
            data: "e",
            next: { data: "c", next: { data: "d", next: null } },
          },
        },
      },
    });
  });

  it("should throw an error on trying to add a new node on position 10 to node3", function () {
    expect(() => node3.addLink("e", 10)).to.throw();
  });

  it("should add a new node on position 6 to node3", function () {
    expect(node3.addLink("z", 6)).to.eql({
      data: "f",
      next: {
        data: "a",
        next: {
          data: "b",
          next: {
            data: "e",
            next: {
              data: "c",
              next: { data: "d", next: { data: "z", next: null } },
            },
          },
        },
      },
    });
  });
});
