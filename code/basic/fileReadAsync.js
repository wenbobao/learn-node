'use strict';

var fs = require('fs');

// 异步读取文本
fs.readFile('sample.txt' ,'utf-8', function(err, data) {
    if(err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
});

// 异步读取图片
fs.readFile('sample.jpg', function(err, data) {
    if(err) {
        console.log(err);
    }
    else {
        // 返回的是一个Buffer对象
        console.log(data);
        // Buffer 转 String
        // var text = data.toString('utf-8');
        // console.log(text);
        // String -> Buffer
        // var buf = Buffer.from(text, 'utf-8');
        // console.log(buf);
        console.log(data.length + 'bytes');
    }
});
