function hasTargetSum(array, target) {
  const numSet = new Set();

  for (let num of array) {
    const complement = target - num;

    if (numSet.has(complement)) {
      return true;
    }

    numSet.add(num);
  }

  return false;
}

module.exports = hasTargetSum;

// Write your algorithm here
//START
// 1. Create an empty set called numSet.
// 2. Iterate through each element, num, in the array:
//    a. Calculate the complement as target - num.
//    b. Check if the complement is in numSet:
//       - If true, return true (a pair with the target sum is found).
//    c. Add num to numSet.
// 3. If the loop completes without finding a pair, return false.
//STOP

/* 
  Write the Big O time complexity of your function here
  O(n) where n is the number of elements in the input array.
*/

/* 
  Add your pseudocode here
      =>Create a set to store encountered numbers.
      =>Iterate through each number in the array.
      =>Calculate the complement needed for the target sum.
      =>Check if the complement is in the set.
      =>A pair with the target sum is found, return true.
      =>Add the current number to the set.
      =>No pair with the target sum was found, return false.
    */

/*
  Add written explanation of your solution here

      -The hasTargetSum function is designed to determine whether there
    exist two distinct elements in an array that add up to a given 
    target sum. 
    -Create an empty set named numSet to store the numbers encountered 
    during the iteration.
    -Iterate through the array.
    -Calculate the complement as target - num.
    -Check if the complement is already present in numSet.
    -If true, it means a pair of numbers with the target sum has been found, 
    and the function returns true
    -If false, add the current num to numSet.
    -If the iteration completes without finding a pair with the target sum, 
    the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
