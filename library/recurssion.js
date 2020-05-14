/*link: http://www.bowdoin.edu/~ltoma/teaching/cs107/spring05/recursion.html*/

class PractiseSum {
  /*
    creating a class with functions
    @param {integer} n
    @return {class} 
    */
  constructor(n) {
    this.n = n;
  }

  sumOfNNumbers(total = 0, startingNumber = 1) {
    /** 
      Exercise 1
      Write a recursive function that computes the sum of all numbers from 1 to n, where n is given as parameter.
    
      Function returns the sum of 1 to n numbers
      Assumption: Only positive integers are provided as input
      @param {integer} total
      @param {integer} startingNumber
      @return {integer}
      */
    if (startingNumber > this.n) {
      return total;
    } else {
      total = total + startingNumber;
      startingNumber += 1;
      return this.sumOfNNumbers(total, startingNumber);
    }
  }
}

class PractiseArrays {
  /**
    @param {array} listOfValues
    @param {integer} size
    @return {class} 
    */
  constructor(listOfValues, size) {
    this.listOfValues = listOfValues;
    this.size = size;
  }

  findMinimum(minimumValue = 0, position = 0) {
    /** 
    Exercise 2
    Write a recursive function that finds and returns the minimum element in an array, where the array and its size are given as parameters.
    
    Function returns the minimum value in an array
    Assumption: Only positive integers are provided as size input
    @params {integer} minimumValue
    @params {integer} position
    @return {integer}
    */
    if (position === this.size) {
      return minimumValue;
    } else {
      if (position === 0) {
        minimumValue = this.listOfValues[position];
      } else {
        this.listOfValues[position] < minimumValue
          ? (minimumValue = this.listOfValues[position])
          : minimumValue;
      }
      position += 1;
      return this.findMinimum(minimumValue, position);
    }
  }

  findSumOfArray(total = 0, position = 0) {
    /** 
    Exercise 3
    Write a recursive function that computes and returns the sum of all elements in an array, where the array and its size are given as parameters
    
    Function returns the sum of values in the array
    Assumption: Only positive integers are provided as size input
    @param {integer} total
    @param {integer} position
    @return {integer}
    */
    if (position === this.size) {
      return total;
    } else {
      total = total + this.listOfValues[position];
      position += 1;
      return this.findSumOfArray(total, position);
    }
  }

  findPalindrome(
    arrayFromFront = "",
    positionFromFront = 0,
    arrayFromBack = "",
    positionFromBack = this.size - 1
  ) {
    /** 
    Exercise 4
    Write a recursive function that determines whether an array is a palindrome, where the array and its size are given as parameters.
    
    Function returns 1 if the array is a palindromm otherwise 0
    Assumption: Only positive integers are provided as size input
    @param {string} arrayFromFront
    @param {integer} positionFromFront
    @param {string} arrayFromBack
    @param {integer} positionFromBack
    @return {integer}
    */
    if (positionFromFront === this.size) {
      if (arrayFromFront === arrayFromBack) {
        return 1;
      }
      return 0;
    } else {
      arrayFromFront = arrayFromFront + this.listOfValues[positionFromFront];
      positionFromFront += 1;
      arrayFromBack = arrayFromBack + this.listOfValues[positionFromBack];
      positionFromBack -= 1;
      return this.findPalindrome(
        arrayFromFront,
        positionFromFront,
        arrayFromBack,
        positionFromBack
      );
    }
  }
}

module.exports = { PractiseSum, PractiseArrays };
