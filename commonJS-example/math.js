var basicNum = 0;
function add(a, b) {
    return a + b;
}
module.exports = { //在这里写上需要向外暴露的函数、变量
    add: add,
    basicNum: basicNum
}
