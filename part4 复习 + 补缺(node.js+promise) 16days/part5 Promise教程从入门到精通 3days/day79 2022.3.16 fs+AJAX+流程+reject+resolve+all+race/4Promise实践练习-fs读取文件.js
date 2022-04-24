const fs = require('fs');

// 回调函数 形式
// fs.readFile('./4resource/content.txt', (err, data) => {
//     // 如果出错 则抛出错误
//     if(err) throw err;
//     // 输出文件内容
//     console.log(data);
//     console.log(data.toString());
// })

// Promise 形式
let p = new Promise((resolve, reject) => {
    fs.readFile('./4resource/content.txt', (err, data) => {
        // 如果出错
        if(err) reject(err);
        // 如果成功
        resolve(data);
    })
})

// 调用then方法
p.then(value => {
    console.log(value.toString());
}, reason => {
    console.log(reason);
})
