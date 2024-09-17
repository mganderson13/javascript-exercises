const palindromes = function (string) {

let array = string.toLowerCase().split("");
console.log("array: ", array);
let character = "abcdefghijklmnopqrstuvwxyz1234567890";

let newArray = array.filter((element) => character.includes(element));
console.log("newArray ", newArray);

let reverseArray = [...newArray].reverse();
console.log("reverseArray ", reverseArray);

let palindrome = reverseArray.join('') === newArray.join('');
console.log("palindrome: ", palindrome);

return palindrome;
};

// Do not edit below this line
module.exports = palindromes;
