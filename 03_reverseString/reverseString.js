const reverseString = function(string) {
let reverseString = "";

let stringSplit = [];
stringSplit = string.split("");
reverseString = stringSplit.reverse().join("");

return reverseString;
}

// Do not edit below this line
module.exports = reverseString;
