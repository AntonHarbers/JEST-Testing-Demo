const capitalize = (string) => {
  return string.length === 0
    ? string
    : string[0].toUpperCase() + string.slice(1);
};

const reverseString = (string) => {
  return string.length <= 1 ? string : string.split('').reverse().join('');
};

class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}

const analyzeArray = (array) => {
  let average = 0;
  let min = null;
  let max = null;

  array.forEach((e) => {
    min = min === null ? e : e < min ? e : min;
    max = max === null ? e : e > max ? e : max;
    average += e;
  });

  average = average / array.length;

  return { average: average, min: min, max: max, length: array.length };
};

const caesarCipher = (string, shiftFactor) => {
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabet = alphabetString.split('');
  const splitArr = string.split('');

  for (var i = 0; i < string.length; i++) {
    let isCapitalized = false;
    const lowerCaseValue = splitArr[i].toLowerCase();
    if (splitArr[i] === splitArr[i].toUpperCase()) isCapitalized = true;

    for (var a = 0; a < alphabet.length; a++) {
      if (lowerCaseValue === alphabet[a]) {
        splitArr[i] =
          a + shiftFactor >= alphabet.length
            ? alphabet[a + shiftFactor - alphabet.length]
            : alphabet[a + shiftFactor];
        break;
      }
    }
    if (isCapitalized) {
      splitArr[i] = splitArr[i].toUpperCase();
    }
  }

  return splitArr.join('');
};

export { capitalize, reverseString, Calculator, analyzeArray, caesarCipher };
