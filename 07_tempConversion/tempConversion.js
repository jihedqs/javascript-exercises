const convertToCelsius = function (fern) {

  return Math.round(((fern - 32) * (5 / 9)) * 10) / 10

};

const convertToFahrenheit = function (cel) {
  return Math.round(((cel * (9 / 5)) + 32) * 10) / 10

};

// Do not edit below this line
console.log(convertToCelsius(100))
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
