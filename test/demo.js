const {
  createReadline,
  print
} = require('../src/index');

let readline = createReadline(`2
4 5
6 7`);

/* Now Coding */
let n = parseInt(readline());      // 2
let arr = [];

while (n--) {
  arr.push(readline().split(' '));
}

print(arr); // [ [ '4', '5'], [ '6', '7' ] ]