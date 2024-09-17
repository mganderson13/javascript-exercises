const leapYears = function(year) {

    let everyFour = year % 4 === 0;
    let century = year % 100 === 0;
    let leapCentury = year % 400 === 0;

    if (everyFour && (!century || leapCentury)) {
        return true;
    }else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
