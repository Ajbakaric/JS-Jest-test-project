const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./index');

test('capitalize first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');  // Basic case: lowercase to uppercase
    expect(capitalize('Hello')).toBe('Hello');  // String already capitalized
    expect(capitalize('')).toBe('');            // Empty string
});

test('reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh');  // Basic case
    expect(reverseString('world')).toBe('dlrow');  // Another example
    expect(reverseString('')).toBe('');            // Empty string
});

test('calculator operations', () => {
    expect(calculator.add(1, 2)).toBe(3);          // 1 + 2 = 3
    expect(calculator.subtract(5, 3)).toBe(2);     // 5 - 3 = 2
    expect(calculator.multiply(4, 3)).toBe(12);    // 4 * 3 = 12
    expect(calculator.divide(8, 2)).toBe(4);       // 8 / 2 = 4
    expect(() => calculator.divide(8, 0)).toThrow('Cannot divide by zero');  // Test division by zero
});

test('caesar cipher shifting', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    expect(caesarCipher('Hello, World!', 0)).toBe('Hello, World!');
    expect(caesarCipher('abc', 26)).toBe('abc'); // Shift by full alphabet (26) should return the same string
});

test('analyze array', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});