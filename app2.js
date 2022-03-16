const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('tutorial', (num1, num2) => {
  console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 1, 2);

// class Person extends EventEmitter
/**
 * @class Person
 * @extends EventEmitter
 */
class Person extends EventEmitter {
  /**
     *
     * @param {string} name
     */
  constructor(name) {
    super();
    this.name = name;
  }
  // get the name
  /**
   *
   * @return {string} name
   */
  getName() {
    return this.name;
  }
}

const pedro = new Person('Pedro');
// create person called Julia
const julia = new Person('Julia');
pedro.on('name', (said) => {
  console.log(`My name is ` + pedro.name);
});
julia.on('name', (said) => {
  console.log(`My name is ` + julia.name);
});
pedro.emit('name');
julia.emit('name');
