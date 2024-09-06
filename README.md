# Jest Testing Project

This project contains implementations of several utility functions in JavaScript, including:
- **capitalize**: Capitalizes the first letter of a string.
- **reverseString**: Reverses a given string.
- **calculator**: A calculator object that supports basic arithmetic operations (add, subtract, multiply, and divide).
- **caesarCipher**: Shifts the characters of a string by a given factor while preserving case and leaving non-alphabetical characters unchanged.
- **analyzeArray**: Analyzes an array of numbers and returns the average, min, max, and length.

The project is tested using the **Jest** testing framework to ensure all functionalities work correctly.

---



## Project Setup

### Prerequisites
To run this project, you'll need to have Node.js and npm installed. You can download them from [here](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/jest-testing-project.git
   cd jest-testing-project
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running Tests

This project uses **Jest** for testing. To run the tests, execute the following command:

```bash
npm test
```

The Jest framework will automatically find the test files and run all the test cases. If everything is correct, you should see that all tests pass successfully.

---



---

## Usage

- **Capitalize**: Capitalizes the first letter of a string.
  ```javascript
  const { capitalize } = require('./index');
  console.log(capitalize('hello'));  // Output: 'Hello'
  ```

- **Reverse String**: Reverses the given string.
  ```javascript
  const { reverseString } = require('./index');
  console.log(reverseString('hello'));  // Output: 'olleh'
  ```

- **Calculator**: Performs basic arithmetic operations.
  ```javascript
  const { calculator } = require('./index');
  console.log(calculator.add(2, 3));  // Output: 5
  ```

- **Caesar Cipher**: Shifts characters in a string by the specified shift factor.
  ```javascript
  const { caesarCipher } = require('./index');
  console.log(caesarCipher('xyz', 3));  // Output: 'abc'
  ```

- **Analyze Array**: Returns the average, min, max, and length of an array.
  ```javascript
  const { analyzeArray } = require('./index');
  console.log(analyzeArray([1, 8, 3, 4, 2, 6]));  
  // Output: { average: 4, min: 1, max: 8, length: 6 }
  ```

---