"use strict";

const expect = require("chai").expect;
const {
  sumOfNNumbers,
  findMinimum,
  findSumOfArray,
  findPalindrome,
} = require("../library/recurssion");

describe("#tests for recurssion on integers", function () {
  it("should add first n numbers", function () {
    expect(sumOfNNumbers(5)).to.equal(15);
  });
});
describe("#tests for recurssion for lists", function () {
  it("should find minimum number in array", function () {
    expect(findMinimum([-1, -10, 11, 5], 4)).to.equal(-10);
  });

  it("should find sum of numbers in array", function () {
    expect(findSumOfArray([-1, -10, 11, 5], 4)).to.equal(5);
  });

  it("should find if array is a palindrome", function () {
    expect(findPalindrome([-1, -10, 11, 5], 4)).to.equal(0);
  });

  it("should find if array is a palindrome", function () {
    expect(findPalindrome([-1, -2, 3, -2, -1], 5)).to.equal(1);
  });

  it("should find if array is a palindrome", function () {
    expect(findPalindrome([], 0)).to.equal(1);
  });

  it("should find if array is a palindrome", function () {
    expect(findPalindrome(["a", "A", "A"], 3)).to.equal(0);
  });
});
