/**
 * TWO SUM ALGORITHM PROBLEM
 * 
 * Problem Description:
 * Given an array of integers nums and an integer target, return indices of the two numbers 
 * in the array such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and you may not use 
 * the same element twice.
 * 
 * Example:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Constraints:
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 * - Only one valid answer exists
 */

/**
 * BRUTE FORCE APPROACH (O(n²) time, O(1) space)
 * 
 * This approach uses nested loops to check every possible pair of numbers.
 * For each element, we check it against all subsequent elements to find a pair
 * that sums to the target.
 * 
 * Time Complexity: O(n²) - We have nested loops
 * Space Complexity: O(1) - We only use a constant amount of extra space
 */
function twoSumBruteForce(nums, target) {
    // Loop through each element in the array
    for (let i = 0; i < nums.length; i++) {
        // For each element, check it against all subsequent elements
        for (let j = i + 1; j < nums.length; j++) {
            // If we find a pair that sums to target, return their indices
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    // If no solution is found (though problem guarantees one exists)
    return [];
}

/**
 * HASH MAP APPROACH (O(n) time, O(n) space) - OPTIMAL SOLUTION
 * 
 * This approach uses a hash map to store previously seen numbers and their indices.
 * For each current number, we calculate the complement (target - current number)
 * and check if we've seen it before. If yes, we've found our pair.
 * 
 * Time Complexity: O(n) - We only need to traverse the array once
 * Space Complexity: O(n) - In worst case, we might store almost all elements in the map
 * 
 * Why this is optimal:
 * - We trade space for time, achieving linear time complexity
 * - Hash map lookups are O(1) on average
 * - We only need one pass through the array
 */
function twoSum(nums, target) {
    // Create a hash map to store numbers we've seen and their indices
    const numMap = new Map();
    
    // Iterate through the array once
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;
        
        // Check if we've seen the complement before
        if (numMap.has(complement)) {
            // Return the index of the complement and current index
            return [numMap.get(complement), i];
        }
        
        // Store current number and its index for future lookups
        numMap.set(currentNum, i);
    }
    
    // If no solution is found (though problem guarantees one exists)
    return [];
}

/**
 * ALTERNATIVE APPROACH: TWO POINTERS (O(n log n) time, O(n) space)
 * 
 * This approach requires sorting the array first, then using two pointers.
 * Note: This approach returns the actual numbers, not indices, so it's not
 * suitable for the original problem but shows another algorithmic pattern.
 * 
 * Time Complexity: O(n log n) - Due to sorting
 * Space Complexity: O(n) - To store the original indices
 */
function twoSumTwoPointers(nums, target) {
    // Create array of objects with original indices
    const indexedNums = nums.map((num, index) => ({ num, index }));
    
    // Sort by values (not indices)
    indexedNums.sort((a, b) => a.num - b.num);
    
    let left = 0;
    let right = indexedNums.length - 1;
    
    while (left < right) {
        const sum = indexedNums[left].num + indexedNums[right].num;
        
        if (sum === target) {
            // Return original indices
            return [indexedNums[left].index, indexedNums[right].index];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return [];
}

// Test cases to demonstrate the algorithm
function runTests() {
    console.log("=== TWO SUM ALGORITHM TESTS ===\n");
    
    const testCases = [
        { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
        { nums: [3, 2, 4], target: 6, expected: [1, 2] },
        { nums: [3, 3], target: 6, expected: [0, 1] },
        { nums: [1, 5, 8, 10, 13], target: 18, expected: [2, 4] },
        { nums: [-1, -2, -3, -4, -5], target: -8, expected: [2, 4] }
    ];
    
    testCases.forEach((testCase, index) => {
        console.log(`Test Case ${index + 1}:`);
        console.log(`Input: nums = [${testCase.nums}], target = ${testCase.target}`);
        
        const result = twoSum(testCase.nums, testCase.target);
        console.log(`Output: [${result}]`);
        console.log(`Expected: [${testCase.expected}]`);
        console.log(`Status: ${JSON.stringify(result) === JSON.stringify(testCase.expected) ? 'PASS' : 'FAIL'}`);
        console.log('');
    });
}

// Performance comparison
function performanceComparison() {
    console.log("=== PERFORMANCE COMPARISON ===\n");
    
    // Create a large array for testing
    const largeArray = Array.from({ length: 10000 }, (_, i) => i);
    const target = 19998; // Sum of 9999 + 9999
    
    console.log("Testing with array of 10,000 elements...\n");
    
    // Test brute force approach
    console.time("Brute Force");
    const bruteResult = twoSumBruteForce(largeArray, target);
    console.timeEnd("Brute Force");
    
    // Test hash map approach
    console.time("Hash Map");
    const hashResult = twoSum(largeArray, target);
    console.timeEnd("Hash Map");
    
    console.log(`\nBrute Force Result: [${bruteResult}]`);
    console.log(`Hash Map Result: [${hashResult}]`);
}

// Run the tests if this file is executed directly
if (require.main === module) {
    runTests();
    performanceComparison();
}

// Export functions for use in other modules
module.exports = {
    twoSum,
    twoSumBruteForce,
    twoSumTwoPointers
};
