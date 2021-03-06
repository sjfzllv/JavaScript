// 1. 引入express
const { request, response } = require('express');
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response)=> {
    // 设置响应头  设置允许跨越
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应体
    response.send('HELLO AJAX - 2');
});

// 可以接收任意类型的请求
app.all('/server', (request, response)=> {
    // 设置响应头  设置允许跨越
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    // 设置响应体
    response.send('HELLO AJAX POST');
});

app.all('/json-server', (request, response)=> {
    // 设置响应头  设置允许跨越
    response.setHeader('Access-Control-Allow-Origin','*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    // 响应一个数据
    const data = {
        name: 'atguigu'
    };
    // 对对象进行字符串转换
    let str = JSON.stringify(data);
    // 设置响应体
    response.send(str);
});

// 针对 IE 缓存
app.get('/ie', (request, response)=> {
    // 设置相应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应体
    response.send('HELLO IE - 5');
})

// 延时响应
app.get('/delay', (request, response)=> {
    // 设置相应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(()=>{
        // 设置响应体
        response.send('延时响应');
    }, 3000)
})

// jQuery 服务
app.all('/jquery-server', (request, response)=> {
    // 设置相应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    // response.send('Hello jQuery AJAX');
    const data = {name: '尚硅谷'};
    response.send(JSON.stringify(data))
})

// 4. 监听端口启动服务
app.listen(8000, ()=> {
    console.log('服务已经启用,8000端口监听中....');
})
