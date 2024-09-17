const getTheTitles = function(array) {

let titleArray = [];

for (let i in array) {
    titleArray.push(array[i].title );
}

return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
