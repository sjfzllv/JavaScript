// import * as m1 from './11hello.js';
// 获取元素
const btn = document.getElementById('btn');
btn.onclick = function() {
    import('./11hello.js').then(module => {
        // console.log(module);
        module.hello();
    })
}