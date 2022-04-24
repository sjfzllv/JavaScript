// 引入其他的模块
/*
    在node中，通过require()函数引入外部的模块
        require()可以传递一个路径作为参数，node将会自动根据该路径来引入外部模块
        这里路径。如果使用相对路径，必须以.或..开头
    
    使用require()引入模块以后，该函数会返回一个对象，这个对象代表的是引入的模块
*/
var md = require('./module');

// console.log(x);  // 报错
console.log(md.x);
console.log(md);

// 作业部分
var math = require('./math');
console.log(math.add(10, 20));
console.log(math.mul(10, 20));