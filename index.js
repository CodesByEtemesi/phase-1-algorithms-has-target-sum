function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set();

   // Iterate through the array
   for (let num of arr) {
    // Calculate the difference between the target and the current number
    const difference = target - num;

       // Check if the difference is in the set of seen numbers
       if (seenNumbers.has(difference)) {
        // If it is, we found a pair that adds up to the target
        return true;
      }
  
      // Otherwise, add the current number to the set
      seenNumbers.add(num);
    }
    // If no pair is found, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
