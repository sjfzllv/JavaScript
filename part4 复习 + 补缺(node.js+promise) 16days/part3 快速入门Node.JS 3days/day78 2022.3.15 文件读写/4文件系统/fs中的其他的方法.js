var fs = require('fs');
/*
    fs.existsSync(path)
        - 检查一个文件是否存在
* */
// var isExists = fs.existsSync('a.mp3');
// console.log(isExists);

/*
    fs.stat(path, callback)
    fs.statSync(path)
        - 获取文件的状态
        - 它会给我们返回一个对象，这个对象中保存了当前对象状态的相关信息
* */
// fs.stat('a.mp3', function(err, stat) {
    // console.log(arguments);
    /*
        size 文件的大小
        isFile() 是否是一个文件
        isDirectory() 是否是一个文件夹（目录）
    * */
    // console.log(stat);
    // console.log(stat.isFile()); // true
    // console.log(stat.isDirectory()); // false
// })

/*
    fs.unlink(path, callback)
    fs.unlinkSync(path)
        - 删除文件
* */

// fs.unlinkSync('hello.txt');

/*
    fs.readdir(path[, options], callback)
    fs.readdirSync(path[, options])
        - 读取一个目录的目录文件
            files是一个字符串数组，每一个元素就是一个文件夹或文件的名字
* */

// fs.readdir('.', function(err, files) {
//     if(!err) {
//         console.log(files);
//     }
// })

/*
    fs.truncate(path, len, callback)
    fs.truncateSync(path, len)
        - 截断文件,将文件修改为指定的大小
* */
// fs.truncateSync('hello2.txt', 10);

/*
    fs.mkdir(path[, mode], callback)
    fs.mkdirSync(path[, mode])
        - 创建一个目录

    fs.rmdir(path, callback)
    fs.rmdirSync(path)
        - 删除一个目录
* */
// fs.mkdirSync('hello');
// fs.rmdirSync('hello');

/*
    fs.rename(oldPath, newPath, callback)
    fs.renameSync(oldPath, newPath)
        - 对文件进行重命名
        - 参数：
            oldPath 旧的路径
            newPath 新的路径
            callback 回调函数
* */
// fs.rename('a.mp3', '笔记.mp3', function() {
//     if(!err) {
//         console.log('修改成功~~~');
//     }
// })

/*
    fs.watchFile(filename[, options], listener)
        - 监视文件的修改
        - 参数：
            filename 要监视的文件的名字
            options 配置选项
            listener 回调函数，当文件发生变化时，回调函数会执行
                在回调函数中会有两个参数：
                    curr 当前文件的状态
                    prev 修改前文件的状态
                        - 这两个对象都是stats对象
* */
// fs.watchFile('hello2.txt', function(curr, prev) {
fs.watchFile('hello2.txt', {interval: 1000}, function(curr, prev) {
    console.log('修改前文件大小：' + prev.size);
    console.log('修改后文件大小：' + curr.size);
})
