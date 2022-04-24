/**
 * resource  1.html   2.html   3.html
 */
// 回调函数的方式
const fs = require('fs');
const util = require('util');
const mineReadFile = util.promisify(fs.readFile);
// fs.readFile('./10resource/1.html', (err, data1) => {
//     if(err) throw err;
//     fs.readFile('./10resource/2.html', (err, data2) => {
//         if(err) throw err;
//         fs.readFile('./10resource/3.html', (err, data3) => {
//             if(err) throw err;
//             console.log(data1 + data2 + data3);
//         })
//     })
// })

// async 与 await
async function main() {
    try {
        let data1 = await mineReadFile('./10resource/1.html');
        let data2 = await mineReadFile('./10resource/2.html');
        let data3 = await mineReadFile('./10resource/3.html');
        console.log(data1 + data2 + data3);
    } catch(e) {
        // console.log(e);
        console.log(e.code);
    }
    // 读取第一个文件的内容
}
main();