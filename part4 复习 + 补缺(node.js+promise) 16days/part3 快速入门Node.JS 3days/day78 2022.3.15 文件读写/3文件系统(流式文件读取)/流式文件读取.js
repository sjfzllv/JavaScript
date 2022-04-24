/*
    流式文件读取也适用于一些比较大的文件，可以分多次将文件读取到内存中
* */
var fs = require('fs');

// 创建一个可读流
var rs = fs.createReadStream('C:/Users/cx/Desktop/自学/技术胖/part4 浏览器脚本语言(JavaScript)/part4 复习 + 补缺/part3 快速入门Node.JS/day78 2022.3.15/音频测试.mp3');

// 创建一个可写流
var ws = fs.createWriteStream('a.mp3');


// 监听流的开启和关闭
rs.once('open', function() {
    console.log('可读流打开了~~');
})

rs.once('close', function() {
    console.log('可读流关闭了~~');
    // 数据读取完毕，关闭可写流
    ws.end();
})

ws.once('open', function() {
    console.log('可写流打开了~~');
})

ws.once('close', function() {
    console.log('可写流关闭了~~');
})

// 如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，它会自动开始读取数据
rs.on('data', function(data) {
    console.log(data);
    console.log(data.length);   // 一次最多65536字节
    // 将读取到的数据写到可写流中
    ws.write(data);
    // ws.end() // ×
})