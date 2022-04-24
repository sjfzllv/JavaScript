/*
    Buffer(缓冲区)
        - Buffer的结构和数组很像，操作的方法也和数组类似
        - 数组中不能存储二进制的文件，而buffer就是专门用来存储二进制数据
        - 使用buffer不需要引入模块，直接使用即可
        - 在buffer中存储的都是二进制数据，但是在显示时都是以16进制的形式显示
            buffer中每一个元素的大小范围是从00 - ff   0 - 255
            00000000 - 11111111

            计算机 一个0 或一个1 我们称为1位（bit）

            bit = 1byte（字节）
            1024byte = 1kb
            1024kb = 1mb
            1024mb = 1gb
            1024gb = 1tb

            buffer中的一个元素，占用内存的一个字节

        - Buffer的大小一旦确定，则不能修改，Buffer实际上是对底层内存的直接操作
* */

// var str = 'Hello Atguigu';
// var str = 'Hello 尚硅谷';

// 将一个字符串保存到buffer中
// var buf = Buffer.from(str);

// console.log(buf);
// console.log(buf.length);  // 占用内存的大小
// console.log(str.length);  // 字符串的长度

// 创建一个指定大小的buffer
// buffer构造函数都是不推荐使用的
// var buf2 = new Buffer(10);  // 10字节的buffer
// console.log(buf2.length);

// 创建一个10字节的buffer
// var buf = Buffer.alloc(10);
// console.log(buf2);
// 通过索引，来操作buf2中的元素
// buf2[0] = 88;
// buf2[1] = 255;
// buf2[2] = 0xaa;
// buf[10] = 16;
// buf2[3] = 556;      // 1000101100  --->  00101100 2c
// console.log(buf2);
// 只要数字在数控台或页面中输出一定是十进制
// console.log(buf2[2]);
// console.log(buf2[2].toString(16));  // 转成16进制的字符串

// for(var o = 0; i < buf2.length; i++) {
//     console.log(buf2[i]);
// }

// Buffer.allocUnSafe(size) 创建一个指定大小的buffer，但是buffer中可能含有敏感数据
// var buf3 = Buffer.alloc(10);
// var buf3 = Buffer.allocUnsafe(10);
// console.log(buf3);

/*
    Buffer.from(str) 将一个字符串转换为buffer
    Buffer.alloc(size) 创建一个指定大小的Buffer
    Buffer.allocUnsafe(size) 创建一个指定大小的Buffer，但是可能包含敏感数据
    buf.toString() 将缓冲区中的数据转换为字符串
* */

var buf4 = Buffer.from('我是一段文本数据');
// console.log(buf4);
console.log(buf4.toString());