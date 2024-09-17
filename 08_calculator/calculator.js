const add = function(...addends) {
	
  let sum = 0

  for (const addend of addends) {
    sum += addend;
  }

  return sum;

};

const subtract = function(minuend, subtrahend) {
	
  let difference = minuend - subtrahend;

  return difference;
};

const sum = function(array) {
	
  let sum = 0

 array.forEach((element) => sum += element);
  

  return sum;
};

const multiply = function(array) {

 let product = 1
 
 array.forEach((element) => product *= element);
  

  return product;
};

const power = function(a, b) {

  let power = a**b;

  return power;
	
};

const factorial = function(num) {
	
  if (num === 0){
    return 1;
  }else {
    for (let i = num-1; i > 0; i--){
    num *= i;
    }
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
