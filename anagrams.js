/**
 * Check to see if two provided strings are anagrams of eachother
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces or punctuation.
 * Consider capital letters to be the same as lower case.
 */

// function charMap(str) {
//   const charMapVar = {};
//   for (let char of str) {
//     charMapVar[char] = ++charMapVar[char] || 1;
//   }
//   return charMapVar;
// }

// function anagram(str1, str2) {
//   // Step 1: Build Char Map for string 1
//   str1 = str1.toLowerCase().replace(/[\W]/g, "");
//   // const charMap1 = {};
//   const charMap1 = charMap(str1);
//   // Step 2: Build Char Map for string 2
//   str2 = str2.toLowerCase().replace(/[\W]/g, "");
//   const charMap2 = charMap(str2);
//   // Step 3: Compare each character in the both the Char Maps
//   // console.log(charMap1, charMap2);
//   if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
//     return false;
//   }
//   for (const char in charMap1) {
//     if (charMap1[char] !== charMap2[char]) {
//       return false;
//     }
//   }
//   return true;
// }

function cleanStr(str) {
  return str.toLowerCase().replace(/[\W]/g, "").split("").sort().join("");
}

function anagram(str1, str2) {
  return cleanStr(str1) === cleanStr(str2);
}

// console.log(charMap("RAIL! SAFETY!"));
// console.log(charMap("RAIL! SAFETY!"));
console.log(anagram("RAIL! SAFETY!", "fairy tales"));
console.log(anagram("coding money", "money coding"));
console.log(anagram("temp", "hellos"));
