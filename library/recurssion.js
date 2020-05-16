/*link: http://www.bowdoin.edu/~ltoma/teaching/cs107/spring05/recursion.html*/

function sumOfNNumbers(number, total = 0, startingNumber = 1) {
  /** 
      Exercise 1
      Write a recursive function that computes the sum of all numbers from 1 to n, where n is given as parameter.
    
      Function returns the sum of 1 to n numbers
      Assumption: Only positive integers are provided as input
      @param {integer} number
      @param {integer} total
      @param {integer} startingNumber
      @return {integer}
      */
  if (startingNumber > number) {
    return total;
  } else {
    total = total + startingNumber;
    startingNumber += 1;
    return sumOfNNumbers(number, total, startingNumber);
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
  if (size != 0) {
    return Math.min(
      listOfValues[size],
      listOfValues[size - 1],
      findMinimum(listOfValues, size)
    );
  } else {
    return listOfValues[size];
  }
}

function findSumOfArray(listOfValues, size, total = 0, position = 0) {
  /**
    Exercise 3
    Write a recursive function that computes and returns the sum of all elements in an array, where the array and its size are given as parameters

    Function returns the sum of values in the array
    Assumption: Only positive integers are provided as size input
    @param { array } listOfValues
    @param {integer} size
    @param {integer} total
    @param {integer} position
    @return {integer}
    */
  if (position === size) {
    return total;
  } else {
    total = total + listOfValues[position];
    position += 1;
    return findSumOfArray(listOfValues, size, total, position);
  }
}

function findPalindrome(
  listOfValues,
  size,
  arrayFromFront = "",
  positionFromFront = 0,
  arrayFromBack = "",
  positionFromBack = size - 1
) {
  /**
    Exercise 4
    Write a recursive function that determines whether an array is a palindrome, where the array and its size are given as parameters.

    Function returns 1 if the array is a palindromm otherwise 0
    Assumption: Only positive integers are provided as size input
    @param { array } listOfValues
    @param {integer} size
    @param {string} arrayFromFront
    @param {integer} positionFromFront
    @param {string} arrayFromBack
    @param {integer} positionFromBack
    @return {integer}
    */
  if (positionFromFront === size) {
    console.log(
      arrayFromBack,
      arrayFromFront,
      arrayFromFront === arrayFromBack
    );
    if (arrayFromFront === arrayFromBack) {
      return 1;
    }
    return 0;
  } else {
    arrayFromFront = arrayFromFront + listOfValues[positionFromFront];
    positionFromFront += 1;
    arrayFromBack = arrayFromBack + listOfValues[positionFromBack];
    positionFromBack -= 1;
    return findPalindrome(
      listOfValues,
      size,
      arrayFromFront,
      positionFromFront,
      arrayFromBack,
      positionFromBack
    );
  }
}

module.exports = { sumOfNNumbers, findMinimum, findSumOfArray, findPalindrome };
