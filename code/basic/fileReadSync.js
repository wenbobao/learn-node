'use strict';

var fs = require('fs');

// 同步读文本

// var data = fs.readFileSync('sample.txt', 'utf-8');
// console.log(data);

// 如果发生错误，需要用try...catch 捕获改错误

try {
    var data = fs.readFileSync('sample.txt', 'utf-8');
    console.log(data);
} catch (err) {
    console.log(err);
}