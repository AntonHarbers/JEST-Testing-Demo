import {capitalize} from './test_practice';

test('#capitalize', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('')).toBe('');
    expect(capitalize('hello world')).toBe('Hello world');
    expect(capitalize('1hello')).toBe('1hello');
    expect(capitalize('Hello')).toBe('Hello');
});