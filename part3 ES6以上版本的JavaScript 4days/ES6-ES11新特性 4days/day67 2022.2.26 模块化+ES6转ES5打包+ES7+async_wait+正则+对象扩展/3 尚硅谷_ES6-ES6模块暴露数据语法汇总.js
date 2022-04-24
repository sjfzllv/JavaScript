// 分别暴露     m1.js
export let school = '尚硅谷'

export function teach() {
    console.log('我们可以教给你发开技能');
}

// 统一暴露     m2.js
let school = '尚硅谷'

function findJob() {
    console.log('我们可以帮助你找工作!!');
}
export {school, findJob};

// 默认暴露     m3.js
export default {
    school: 'atguigu',
    change: function() {
        console.log('我们可以改变你!!');
    }
}