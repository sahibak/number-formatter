"use strict";

const expect = require("chai").expect;
const { PractiseSum, PractiseArrays } = require("../library/recurssion");

let class1 = new PractiseSum(5);
let class2 = new PractiseArrays([-1, -10, 11, 5], 4);
let class3 = new PractiseArrays([-1, -2, -2, -1], 4);
let class4 = new PractiseArrays([-1, -2, 3, -2, -1], 5);
let class5 = new PractiseArrays([], 0);
let class6 = new PractiseArrays(["a", "A", "A"], 3);

describe("#tests for recurssion on integers", function () {
  it("should add first n numbers", function () {
    expect(class1.sumOfNNumbers()).to.equal(15);
  });
});
describe("#tests for recurssion for lists", function () {
  it("should find minimum number in array", function () {
    expect(class2.findMinimum()).to.equal(-10);
  });

  it("should find sum of numbers in array", function () {
    expect(class2.findSumOfArray()).to.equal(5);
  });

  it("should find if array is a palindrome", function () {
    expect(class2.findPalindrome()).to.equal(0);
  });

  it("should find if array is a palindrome", function () {
    expect(class3.findPalindrome()).to.equal(1);
  });

  it("should find if array is a palindrome", function () {
    expect(class4.findPalindrome()).to.equal(1);
  });

  it("should find if array is a palindrome", function () {
    expect(class5.findPalindrome()).to.equal(1);
  });

  it("should find if array is a palindrome", function () {
    expect(class6.findPalindrome()).to.equal(0);
  });
});
