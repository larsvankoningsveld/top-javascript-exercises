const sumAll = function(num1, num2) {
  if (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2)) return 'ERROR'
  else {
    let sum = 0;
    let small = 0;
    let big = 0;

    if (num1 > num2) {
      small = num2;
      big = num1;
    }

    else {
      small = num1;
      big = num2;
    };

    for (small; small <= big; small++){
      sum += small;
    };

    return parseInt(sum);
  };
};

// Do not edit below this line
module.exports = sumAll;
