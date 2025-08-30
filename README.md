# JavaScript Algorithm Interview Practice

A comprehensive collection of common JavaScript algorithms and data structure problems with detailed explanations, multiple solution approaches, and performance analysis.

## 🎯 Overview

This repository contains implementations of popular coding interview problems in JavaScript. Each algorithm includes:
- Problem description and constraints
- Multiple solution approaches with time/space complexity analysis
- Test cases and examples
- Performance comparisons where applicable
- Detailed comments explaining the logic

## 📁 Algorithms Included

### 1. **Two Sum** (`twosum.js`)
**Problem**: Find two numbers in an array that add up to a target value.

**Approaches**:
- **Brute Force**: O(n²) time, O(1) space
- **Hash Map**: O(n) time, O(n) space (Optimal)
- **Two Pointers**: O(n log n) time, O(n) space

**Example**:
```javascript
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1] // Because nums[0] + nums[1] == 9
```

### 2. **Anagrams** (`anagrams.js`)
**Problem**: Check if two strings are anagrams of each other.

**Approaches**:
- **Character Map**: O(n) time, O(n) space
- **Sorting**: O(n log n) time, O(n) space

**Example**:
```javascript
anagram("RAIL! SAFETY!", "fairy tales") // true
anagram("coding money", "money coding") // true
```

### 3. **Max Character** (`maxchar.js`)
**Problem**: Find the most frequently occurring character in a string.

**Approach**: Character frequency mapping
- **Time Complexity**: O(n)
- **Space Complexity**: O(n)

**Example**:
```javascript
maxchar("abccccccd") // { c: 6 }
maxchar("apple 123111111") // { 1: 7 }
```

### 4. **Array Chunking** (`chunk.js`)
**Problem**: Divide an array into subarrays of specified size.

**Approach**: Slice and iterate
- **Time Complexity**: O(n)
- **Space Complexity**: O(n)

**Example**:
```javascript
chunk([1, 2, 3, 4], 2) // [[1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
```

### 5. **Palindrome** (`palindrome.js`)
**Problem**: Check if a string is a palindrome.

**Approach**: Two-pointer technique
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

### 6. **Reverse String** (`reverse-string.js`)
**Problem**: Reverse a string.

**Approaches**:
- **Built-in methods**: O(n) time
- **Manual iteration**: O(n) time

### 7. **Reverse Integer** (`reverse-int.js`)
**Problem**: Reverse the digits of an integer.

**Approach**: Mathematical operations
- **Time Complexity**: O(log n)
- **Space Complexity**: O(1)

### 8. **Fizz Buzz** (`fizz-buzz.js`)
**Problem**: Classic FizzBuzz problem.

**Approach**: Conditional logic
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

### 9. **Vowels** (`vowels.js`)
**Problem**: Count vowels in a string.

**Approaches**:
- **Regular expressions**: O(n) time
- **Character iteration**: O(n) time

### 10. **Title Case** (`titlecase.js`)
**Problem**: Convert string to title case.

**Approach**: String manipulation
- **Time Complexity**: O(n)
- **Space Complexity**: O(n)

### 11. **Step String** (`step-string.js`)
**Problem**: Create a stepped string pattern.

**Approach**: String building
- **Time Complexity**: O(n²)
- **Space Complexity**: O(n²)

## 🚀 Getting Started

### Prerequisites
- Node.js (version 12 or higher)
- Basic understanding of JavaScript

### Installation
1. Clone the repository:
```bash
git clone <repository-url>
cd js-algo-interview
```

2. Run any algorithm file:
```bash
node twosum.js
node anagrams.js
node maxchar.js
# ... etc
```

## 🧪 Testing

Each algorithm file includes test cases. For example, run the Two Sum tests:

```bash
node twosum.js
```

This will output:
- Test case results
- Performance comparisons between different approaches
- Execution times for large datasets

## 📊 Performance Analysis

The repository includes performance comparisons for algorithms with multiple approaches:

- **Two Sum**: Compares brute force vs hash map approach
- **Anagrams**: Compares character map vs sorting approach

## 🎓 Learning Resources

### Key Concepts Covered:
- **Time Complexity**: Understanding Big O notation
- **Space Complexity**: Memory usage analysis
- **Hash Maps**: Efficient lookups and storage
- **Two Pointers**: Array manipulation technique
- **String Manipulation**: Common string operations
- **Array Methods**: Built-in JavaScript array functions

### Common Patterns:
- **Sliding Window**: For subarray problems
- **Two Pointers**: For array traversal
- **Hash Map**: For frequency counting and lookups
- **Sorting**: For optimization in some cases

## 🤝 Contributing

Feel free to contribute by:
1. Adding new algorithms
2. Improving existing solutions
3. Adding more test cases
4. Enhancing documentation
5. Optimizing performance

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Related Resources

- [LeetCode](https://leetcode.com/) - Practice platform
- [HackerRank](https://www.hackerrank.com/) - Coding challenges
- [JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - JavaScript documentation

---

**Happy Coding! 🚀**

*Perfect for interview preparation and algorithm practice.*
