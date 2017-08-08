var randnum = require('random-number-between');
var rand = randnum(1, 10, 5);  // First number is minimum, second is maximum, third is optional times to repeat

/* In this example code, a random number between 1 and 10 will be added to an array 5 times
  Example output: [ 3, 7, 1, 4, 9 ]
*/

console.log(rand);
