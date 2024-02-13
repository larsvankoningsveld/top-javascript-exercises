const reverseString = function(input) {
  console.log (input);
  const array = input.split('');
  console.log(array);
  const revArray = array.reverse();
  console.log(revArray);
  const res = revArray.join('');
  console.log(res);
  return res;
};

// Do not edit below this line
module.exports = reverseString;
