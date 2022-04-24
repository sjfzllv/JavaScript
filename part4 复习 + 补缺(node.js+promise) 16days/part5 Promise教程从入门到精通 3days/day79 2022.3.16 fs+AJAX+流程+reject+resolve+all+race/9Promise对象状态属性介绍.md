# 笔记

## 异步编程
* fs 文件操作
  ```
  require('fs).readFile('./index.html', (err, data) => {});
  ```
* 数据库操作
* AJAX
  ```
  $.get('/server', (data) => {});
  ```
* 定时器
  ```
  setTimeout(() => {}, 2000);
  ```


## Promise 的状态
实例对象中的一个属性 『PromiseState』
* pending  未决定的
* resolved / fullfilled  成功
* rejected 失败