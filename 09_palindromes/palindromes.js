const palindromes = function (string) {
  const chars = string.toLowerCase().split('')

  const regex = new RegExp('[!?\., ]')


  chars.forEach((char, i) => {
    if (regex.test(char) === true) {
      chars.splice(i, 1)
    }
  })

  chars.forEach((char, i) => {
    if (regex.test(char) === true) {
      chars.splice(i, 1)
    }
  })

  const reversed = chars.toReversed()

  result = true

  chars.forEach((char, i) => {
    if (char !== reversed[i]) result = false
  })

  return result
};

// Do not edit below this line
module.exports = palindromes;
