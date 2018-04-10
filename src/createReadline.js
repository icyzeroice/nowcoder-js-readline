/**
 * TODO: Add support for nowcoder node.js mode.
 */

function joinYield(str) {

  // Notice:
  // '\\n'.split('\n')  // [ '\\n' ]
  // '\\n'.split('\\n') // [ '', '' ]
  str = str.split('\n');

  return `yield "${str.join('"; yield "')}";`;
}

function createReadline(str) {

  // TODO: Error Check
  // construct a generator function
  let readlineGenerator = new Function(`return function* readline() {${joinYield(str)} return undefined;}`);
  
  readline = readlineGenerator()();
  
  return function () {
    return readline.next().value;
  }
}

module.exports = createReadline;