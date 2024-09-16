const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }

    let start = "";
    for (let i = 0; i < num; i++) {
        start += string;
    }
    return start;
};

// Do not edit below this line
module.exports = repeatString;
