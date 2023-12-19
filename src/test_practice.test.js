import {
  Calculator,
  capitalize,
  reverseString,
  analyzeArray,
  caesarCipher,
} from './test_practice';

describe('#capitalize', () => {
  test('capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('returns an empty string if passed an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('returns the same string if the first letter is already capitalized', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  test('capitalizes the first letter of a multi-word string', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  test('returns the same string if the first letter is a number', () => {
    expect(capitalize('1hello')).toBe('1hello');
  });
});

describe('#reverseString', () => {
  test('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('returns an empty string if passed an empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('returns the same string if passed a single character', () => {
    expect(reverseString('h')).toBe('h');
  });

  test('reverses a multi-word string', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });
});

describe('Calculator OBJECT', () => {
  describe('#add', () => {
    test('Returns the sum of two numbers', () => {
      const instance = new Calculator();
      const sum1 = instance.add(1, 2);
      const sum2 = instance.add(10, 11);
      expect(sum1).toBe(3);
      expect(sum2).toBe(21);
    });
  });
  describe('#subtract', () => {
    test('Returns the difference of two numbers', () => {
      const instance = new Calculator();
      const dif1 = instance.subtract(10, 2);
      const dif2 = instance.subtract(10, 200);
      expect(dif1).toBe(8);
      expect(dif2).toBe(-190);
    });
  });
  describe('#multiply', () => {
    test('Returns the product of two numbers', () => {
      const instance = new Calculator();
      const product1 = instance.multiply(11, 3);
      const product2 = instance.multiply(10, 8);
      expect(product1).toBe(33);
      expect(product2).toBe(80);
    });
  });
  describe('#divide', () => {
    test('Returns the quotient of two numbers', () => {
      const instance = new Calculator();
      const quotient1 = instance.divide(9, 3);
      const quotient2 = instance.divide(10, 4);
      expect(quotient1).toBe(3);
      expect(quotient2).toBe(2.5);
    });
  });
});

describe('#analyzeArray', () => {
  test('Returns average, min, max and length of a given array', () => {
    const arr = [3, 8, 4, 10, 22, 13];
    const test = analyzeArray(arr);

    expect(test).toEqual({ average: 10, min: 3, max: 22, length: 6 });
  });

  test('Returns NaN average, null min, null max and 0 length values of an empty array', () => {
    const arr = [];
    const test = analyzeArray(arr);

    expect(test).toEqual({ average: NaN, min: null, max: null, length: 0 });
  });

  test('Returns NaN average, [] min and c max values of an array of letters and correct length of the array', () => {
    const arr = ['a', 'b', 'c', 4, []];
    const test = analyzeArray(arr);

    expect(test).toEqual({ average: NaN, min: [], max: 'c', length: 5 });
  });
});

describe('#caesarCipher', () => {
  test('Returns a string with each letter shifted by a given shift factor while maintaining capitalization', () => {
    const test = caesarCipher('Hello World', 5);

    expect(test).toBe('Mjqqt Btwqi');
  });

  test('Returns a caesarCipher string checking for wrapping from z to a', () => {
    const test = caesarCipher('Zoom Zoom', 10);

    expect(test).toBe('Jyyw Jyyw');
  });

  test('Returns a caesarCipher string checking for punctuation', () => {
    const test = caesarCipher('Hello! World :)', 10);

    expect(test).toBe('Rovvy! Gybvn :)');
  });
});
