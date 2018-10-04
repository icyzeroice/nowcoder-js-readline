/**
 * @class GeneratorFunction
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction
 */
const GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor

/**
 * 关于闭包中的变量回收机制
 * @tutorial http://justjavac.iteye.com/blog/1465169
 * 
 * @param {string} str 
 * @returns {Function}
 */
module.exports = function createReadline(str) {
  const _readlineGenerator = new GeneratorFunction(joinYield(splitLine(str)))
  const _readline = _readlineGenerator()

  return function () {
    return _readline.next().value
  }
}

/**
 * LF, CR, CRLF
 * @param {string} str 
 * @returns {string[]}
 */
function splitLine(str) {
  return str.replace('\r\n', '\n').replace('\r', '\n').split('\n')
}

/**
 * generate generator function's body array
 * @param {string[]} arr 
 * @returns {string[]}
 */
function joinYield(arr) {
  return arr.map(str => `yield '${str}'`)
}