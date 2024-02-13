const removeFromArray = function(array, ...items) {
  for (const item of items){
    const found = array.indexOf(item);
    console.log(`found: ${found}`);
    array.splice(found, 1);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
