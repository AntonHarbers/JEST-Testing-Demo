const capitalize = (string) => {
  if (string.length === 0) {
    return string;
  }
  return string[0].toUpperCase() + string.slice(1);
};

const reverseString = (string) => {
  if (string.length <= 1) {
    return string;
  }

  return string.split('').reverse().join('');
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
  const length = array.length;

  array.forEach((e) => {
    if (min === null) {
      min = e;
    } else if (e < min) {
      min = e;
    }

    if (max === null) {
      max = e;
    } else if (e > max) {
      max = e;
    }

    average += e;
  });

  average = average / length;

  return { average: average, min: min, max: max, length: length };
};

const caesarCipher = (string, shiftFactor) => {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  const splitArr = string.split('');

  for (var i = 0; i < string.length; i++) {
    let isCapitalized = false;
    if (splitArr[i] === splitArr[i].toUpperCase()) {
      isCapitalized = true;
    }
    const lowerCaseValue = splitArr[i].toLowerCase();
    
    for (var a = 0; a < alphabet.length; a++) {
      if (lowerCaseValue === alphabet[a]) {
        if (a + shiftFactor >= alphabet.length) {
          splitArr[i] = alphabet[a + shiftFactor - alphabet.length];
        } else {
          splitArr[i] = alphabet[a + shiftFactor];
        }

        break;
      }
    }

    if (isCapitalized) {
        let upperCaseValue = splitArr[i].toUpperCase();
        splitArr[i] = upperCaseValue;
    }
  }

  return splitArr.join('');
};

export { capitalize, reverseString, Calculator, analyzeArray, caesarCipher };
