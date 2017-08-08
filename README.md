# Node.js Random Number Between

This is a simple module for Node.js made with the included Math functions of Node.js. Usage is simple and an example has been included.

## Usage
Example code:

```javascript
var randnum = require('random-number-between');
var rand = randnum(1, 10, 5);
console.log(rand);
```
In the above example code, the first number in the second line (`var rand = randnum(1, 10, 5)`), the first number (`1`) is the minimum number, the second number (`10`) is the maximum number, and the third number (`5`) is the number of numbers to generate.

**NOTE: In the included `example.js`, the line that has the correct way of requiring the package is commented out to allow it to run in that directory. In normal code, you will follow the example above and require the package by package name.**
