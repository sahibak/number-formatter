/*link: http://www.bowdoin.edu/~ltoma/teaching/cs107/spring05/recursion.html*/

function sumOfNNumbers(number) {
  /** 
      Exercise 1
      Write a recursive function that computes the sum of all numbers from 1 to n, where n is given as parameter.
    
      Function returns the sum of 1 to n numbers
      Assumption: Only positive integers are provided as input
      @param {integer} number
      @return {integer}
      */
  if (number > 0) {
    return number + sumOfNNumbers(number - 1);
  } else {
    return number;
  }
}

function findMinimum(listOfValues, size) {
  /**
    Exercise 2
    Write a recursive function that finds and returns the minimum element in an array, where the array and its size are given as parameters.

    Function returns the minimum value in an array
    Assumption: Only positive integers are provided as size input
    @param { array } listOfValues
    @param {integer} size
    @return {integer}
    */
  size -= 1;
  if (size > 0) {
    return Math.min(listOfValues[size], findMinimum(listOfValues, size));
  } else {
    return listOfValues[size];
  }
}

function findSumOfArray(listOfValues, size) {
  /**
    Exercise 3
    Write a recursive function that computes and returns the sum of all elements in an array, where the array and its size are given as parameters

    Function returns the sum of values in the array
    Assumption: Only positive integers are provided as size input
    @param { array } listOfValues
    @param {integer} size
    @return {integer}
    */
  size -= 1;
  if (size > 0) {
    return listOfValues[size] + findSumOfArray(listOfValues, size);
  } else {
    return listOfValues[size];
  }
}

function findPalindrome(listOfValues, size) {
  /**
    Exercise 4
    Write a recursive function that determines whether an array is a palindrome, where the array and its size are given as parameters.

    Function returns 1 if the array is a palindromm otherwise 0
    Assumption: Only positive integers are provided as size input
    @param { array } listOfValues
    @param {integer} size
    @return {integer}
    */
  size -= 1;
  if (size <= 0) {
    return 1;
  } else {
    if (listOfValues[0] === listOfValues[size]) {
      updatedListOfValues = listOfValues;
      updatedListOfValues.pop();
      updatedListOfValues.shift();
      size -= 1;
      return findPalindrome(updatedListOfValues, size);
    } else {
      return 0;
    }
  }
}

module.exports = { sumOfNNumbers, findMinimum, findSumOfArray, findPalindrome };
