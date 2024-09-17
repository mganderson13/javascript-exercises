const fibonacci = function(number) {

let num = parseInt(number);

if (num === 0) {
    return 0;
}else if (num < 0) {
    return "OOPS";
}

    let first = 1;
    let next = 0;
for (let i = 2; i <= num; i++) {
    let current = first + next;
    next = first;
    first = current;
}

return first;
};

// Do not edit below this line
module.exports = fibonacci;
