/*
    1. 同步文件读取
    2. 异步文件读取
    3. 简单文件读取
        fs.readFile(path[, options], callback)
        fs.readFileSync(path[, options])
            - path 要读取的文件的路径
            - options 读取的选项
            - callback 回调函数，通过回调函数将读取到内容返回(err, data)
                err 错误对象
                data 读取到的数据，会返回一个Buffer
    4. 流式文件读取
* */

var fs = require('fs');

var path = 'C:/Users/cx/Desktop/自学/技术胖/part4 浏览器脚本语言(JavaScript)/part4 复习 + 补缺/part3 快速入门Node.JS/day78 2022.3.15/2文件系统/音频测试.mp3'

// fs.readFile('hello3.txt', function(err, data) {
fs.readFile('图片测试.jpg', function(err, data) {
// fs.readFile(path, function(err, data) {
    if(!err) {
        // console.log(data);
        // console.log(data.toString());
        // 将data写入到文件
        fs.writeFile('hello.jpg', data, function(err) {
            if(!err) {
                console.log('文件写入成功');
            }
        })
    } else {
        console.log(err);
    }
})