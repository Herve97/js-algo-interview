// --- Directions
// Given an Int, return a new Int with the reversed order of the number
//--- Examples
// reverse(20) === 02
// reverse(15) === 51

function reverseInt(val) {
  if (typeof val !== "number") {
    return "Please give a number";
  }
  return parseInt(val.toString().split("").reverse().join("")) * Math.sign(val);
}

console.log(reverseInt(20));
console.log(reverseInt(65));
console.log(reverseInt(15));
console.log(reverseInt(-17));
console.log(reverseInt("Hello"));
