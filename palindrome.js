// --- Directions
// Given a string, return true if the string is a palindrome
// and false otherwise. Palindromes are strings
// that form the same word if it is reversed.

// --- Examples
// kayak === true
// diams === false
// madam === true
function palindrome(str) {
  return str.split("").reverse().join("") === str;
}

console.log(palindrome("kayak"));
console.log(palindrome("diams"));
console.log(palindrome("madam"));
