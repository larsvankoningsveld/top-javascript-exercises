const convertToCelsius = function(input) {
  let res = 0;
  res = (input - 32) * 5 / 9;
  res = Math.round(res * 10) / 10;
  return res;
};

const convertToFahrenheit = function(input) {
  let res = 0;
  res = input * 9 / 5 + 32
  res = Math.round(res * 10) / 10;
  return res;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
