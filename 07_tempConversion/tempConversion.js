const convertToCelsius = function(temp) {

  let celsiusTemp = Math.round(((temp - 32) * 5/9) * 10) / 10;

  return celsiusTemp;
};

const convertToFahrenheit = function(temp) {

  let fahrTemp = Math.round((temp * 9/5 + 32) * 10) / 10;;

  return fahrTemp;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
