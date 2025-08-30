// --- Directions
// Given a string, return a new string with the reversed order of the characters
//--- Examples
// reverse('hi) === ih
// reverse(hello) === olleh

// function reverse(str) {
//   let reversed = "";

//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

function reverse(str) {
  if (typeof str !== "string") {
    return "Please give a string";
  }
  return str.split("").reverse().join("");
}

console.log(reverse("hi"));
console.log(reverse("hello"));
console.log(reverse("Diams"));
console.log(reverse(20));
console.log(reverse("-20"));
