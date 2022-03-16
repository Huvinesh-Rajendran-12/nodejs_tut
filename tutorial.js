// sum of two numbers
const sum = (a, b) => a + b;
console.log(sum(1, 2)); // 3
// PI the number of the circle
const PI = 3.14;
// class somemathobject
/**
 * @class somemathobject
 * @console log the sum of two numbers
 */
class SomeMathObject {
  // eslint-disable-next-line require-jsdoc
  constructor() {
    console.log('object created');
  }
}

module.exports = {sum: sum, PI: PI, SomeMathObject: SomeMathObject};
