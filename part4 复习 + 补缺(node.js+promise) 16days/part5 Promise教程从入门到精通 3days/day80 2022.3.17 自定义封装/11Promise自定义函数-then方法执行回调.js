// 声明构造函数
function Promise(executor) {
    // 添加属性
    this.PromiseState = 'panding';
    this.PromiseResult = '';
    // 保存实例对象的 this 的值
    const self = this;   // self _this that
    // resolve 函数
    function resolve(data) {
        // console.log(this);
        // 1. 修改对象的状态(promiseState)
        self.PromiseState = 'fulfilled';  // resolved
        // 2. 设置对象结果值(promiseResult)
        self.PromiseResult = data;
    }
    // reject 函数
    function reject(data) {
        // 1. 修改对象的状态(promiseState)
        self.PromiseState = 'rejected';
        // 2. 设置对象结果值(promiseResult)
        self.PromiseResult = data;
    }
    // 同步调用『执行器函数』
    try{
        executor(resolve, reject);
    } catch(e) {
        // 修改 promise 对象状态为『失败』
        reject(e);
    }
}

// 添加 then 方法
Promise.prototype.then = function(onResolved, onRejected) {
    // 调用回调函数 PromiseState
    if(this.PromiseState === 'fulfilled'){
        onResolved(this.PromiseResult);
    }
    if(this.PromiseState === 'rejected') {
        onRejected(this.PromiseResult);
    }
}