import {Calculator, capitalize, reverseString} from './test_practice';

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
            const sum1 = instance.add(1,2);
            const sum2 = instance.add(10,11);
            expect(sum1).toBe(3);
            expect(sum2).toBe(21);
        })
    });
    describe('#subtract', () => {
        test('Returns the difference of two numbers', () => {
            const instance = new Calculator();
            const dif1 = instance.subtract(10,2);
            const dif2 = instance.subtract(10, 200);
            expect(dif1).toBe(8);
            expect(dif2).toBe(-190);
        });
    });
    describe('#multiply', () => {
        test('Returns the product of two numbers', () => {
            const instance = new Calculator();
            const product1 = instance.multiply(11,3);
            const product2 = instance.multiply(10,8);
            expect(product1).toBe(33);
            expect(product2).toBe(80);
        });
    });
    describe('#divide', () => {
        test('Returns the quotient of two numbers', () => {
            const instance = new Calculator();
            const quotient1 = instance.divide(9,3);
            const quotient2 = instance.divide(10,4);
            expect(quotient1).toBe(3);
            expect(quotient2).toBe(2.5);
        });
    });
});
