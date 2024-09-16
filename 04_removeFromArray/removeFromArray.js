const removeFromArray = function(array, ...toRemove) {

    if (toRemove) {
        for (const arg of toRemove) {

            let toRemoveIndex = array.indexOf(arg);

            while (toRemoveIndex !== -1) {
                array.splice(toRemoveIndex, 1);
                toRemoveIndex = array.indexOf(arg);
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
