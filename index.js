
function capitalize(str) {
    if (str.length === 0) return '';
    return str[0].toUpperCase() + str.slice(1);
}


function reverseString(str) {
    return str.split('').reverse().join('');
}

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (b === 0) throw new Error('Cannot divide by zero');
        return a / b;
    },
};

function caesarCipher(str, shift) {
    const shiftChar = (char, shift) => {
        const base = char === char.toUpperCase() ? 65 : 97;
        return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
    };

    return str
        .split('')
        .map((char) => {
            if (/[a-zA-Z]/.test(char)) {
                return shiftChar(char, shift);
            }
            return char; // Non-alphabetical characters remain unchanged
        })
        .join('');
}

// Analyze array function
function analyzeArray(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return {
        average: sum / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    };
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
};