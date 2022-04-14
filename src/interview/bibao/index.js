/**
 * 闭包 能够读取其他函数内部的变量的函数
 */

// 闭包使用场景1-读取内部变量
function closure(x) {
    let y = x + 1;
    return function (y) {
        return x + y;
    };
}

console.log(closure(5)(6));

// 闭包使用场景2-打印时间
function printDate() {
    for (let i = 0; i <= 5; i++) {
        (
            function (j) {
                setTimeout(function () {
                    console.log(j, '💛 生成块级作用域,访问外部变量')
                }, 1000 * j)
            }
        )(i)

    }
}

printDate()



















