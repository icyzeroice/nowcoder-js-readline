# 牛客网在线编程离线测试 readline & print 模块 - **伪**

虽然说看上去像是牛客网 `readline` 和 `print` 模块，但还是得在 node 环境下使用。

因为我嫌麻烦，在线用 __V8 6.0.0__ 版本（牛客网上的 __V8 6.0.0__ 比 __Node 6.11.4__ 代码看上去清晰多了），离线测试却用 node 来测试……

毕竟测试时 node 不用 html 引入看控制台，直接 **Run** 就能看到输出。

### 使用方法

* 安装
```s
$ npm i nowcoder-js-readline -S
```

* 引入方法
```js
const {createReadline, print} = require('nowcoder-js-readline');
```

* 创建 readline
直接换行
```js
let readline = createReadline(`2
4 5
6 7`);
```
或者用 `\n` 与下一行隔开
```js
let readline = createReadline('2\n4 5\n6 7');
```

* 然后就可以和牛客网上的用法一样使用 `readline` 和 `print` 了
```js
let n = parseInt(readline());      // 2
let arr = [];

while (n--) {
  arr.push(readline().split(' '));
}

print(arr); // [ [ '4', '5'], [ '6', '7' ] ]
```


### TODO

- [x] Add JavaScript (V8 6.0.0) support.

- [ ] Add JavaScript (Node 6.11.4) support.
