const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function ([...numbers]) {
  let sum = 0;
  for (let number of numbers) sum += Number(number)
  return Number(sum)
};

const multiply = function ([...numbers]) {
  let result = 1;
  for (let number of numbers) result *= Number(number)
  return Number(result)

};

const power = function (a, b) {
  return Math.pow(a, b)
};

const factorial = function (number) {
  if (number === 0) return 1
  let result = 1;

  while (number > 0) {
    result *= number;
    number--
  }

  return result
};

// Recursion example
const factorialize = function (number) {
  if (number < 0) {
    return -1
  } else if (number == 0) {
    return 1;
  } else {
    return number * factorialize(number - 1)
  }
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
