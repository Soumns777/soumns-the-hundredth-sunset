/**
 * 闭包 可以在外部使用内部的变量
 */

function closure(x) {
    let y = x + 1;
    return function (y) {
        return x + y;
    };
}

console.log(closure(5)(6));

// 回调函数
function callBack(obj, cb) {
    return cb(obj.name)
}

function getName(name) {
    console.log(name, '💦 name')
}

callBack({name: 'IU'}, getName)
