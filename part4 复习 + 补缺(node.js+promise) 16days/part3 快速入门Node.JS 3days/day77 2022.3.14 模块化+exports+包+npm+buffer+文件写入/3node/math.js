/*
    作业:
    定义一个模块 math
        - 在该模块中提供两个方法
            add(a, b);  // 求两个数的和
            mul(a, b);  // 求两个数的积
*/
// exports.add = function(a, b) {
//     return a + b;
// }

// exports.mul = function(a, b) {
//     return a * b;
// }

// 讲解
// function add(a, b) {
//     return a + b;
// }
exports.mul = function(a, b) {
    return a * b;
}


module.exports.add = function(a, b) {
    return a + b;
}