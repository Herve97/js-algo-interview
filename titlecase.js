/**
 * Write a function that accepts a string, The function should
 * Capitalize the first letter of each word in the string then
 * return the capitalized string
 * --- Examples
 * capitalize('This is diams from newtech') --- This Is Diams From newtech
 */

function capitalize(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalize("This is diams from newtech"));
