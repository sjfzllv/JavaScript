/*
    异步文件引入
    fs.open(path, flags[, mode], callback)
        - 用来打开一个文件
        - 异步调用的方法，结果都是通过回调函数返回的
        - 回调函数两个参数
            err 错误对象，如果没有错误则为null
            fd 文件的描述符
    fs.write(fd, string[, position[, encoding]], callback)
        - 用来异步写入一个文件

    fs.close(fd, callback)
        - 用来关闭文件
* */

// 引入fs模块
var fs = require('fs');
// var f;
// 打开文件
// var fd = fs.open('hello2.txt', 'w', function() {
// fs.open('hello2.txt', 'r', function(err, fd) {
fs.open('hello2.txt', 'w', function(err, fd) {
    // console.log(123);
    // console.log(arguments);
    // 判断是否出错
    // console.log('回调函数下的代码~~~');
    if(!err) {
        // console.log(fd);
        // f = fd;
        // 如果没有出错，则对文件进行写入操作
        fs.write(fd, '这是异步写入的内容', function(err) {
            if(!err) {
                console.log('写入成功~~');
            }
            // 关闭文件
            fs.close(fd, function(err) {
                if (!err) {
                    console.log('文件已关闭~~~');
                }
            })
        })
    } else {
        console.log(err);
    }
})
// console.log(fd);    // undefined
// console.log(f);   // undefined
// fs.write(f);

// console.log('open下的代码~~~');
console.log('程序向下执行~~~');