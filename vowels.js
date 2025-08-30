/**
 * --- Directions
 * Write a function that returns the number of vowels
 * used in the string. Vowels are the characters 'a', 'e'
 * 'i', 'o', 'u'.
 * ---- Examples
 * vowels('Hi There!') --- 3
 * vowels('How are you?') --- 5
 * vowels('Coding Money') --- 4
 * vowels('Why') --- 0
 */

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  // .toLowerCase()
  // .replace(/[\Wbcdfghjklmnpqrstvwxyz]/g, "")
  // .split("");
  return matches ? matches.length : 0;
}

console.log(vowels("Hi There!"));
console.log(vowels("How are you?"));
console.log(vowels("Coding Money"));
console.log(vowels("Why"));
