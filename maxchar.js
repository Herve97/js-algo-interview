// Donner le plus grand nombre des caractères dans une chaîne

function maxchar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  // texTab = str.split("");
  for (const element of str) {
    charMap[element] = ++charMap[element] || 1;
    // if (charMap[element]) {
    //   charMap[element]++;
    // } else {
    //   charMap[element] = 1;
    // }
  }
  // for (const [key, value] of Object.entries(charMap)) {
  //   if (value > max) {
  //     max = value;
  //     maxChar = key;
  //   }
  // }
  for (const key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      maxChar = key;
    }
  }
  return {
    [maxChar]: max,
  };
  // return Object.entries(charMap);
  // return Math.max(...Object.values(charMap));
}

console.log(maxchar("abccccccd"));
console.log(maxchar("apple 123111111"));
