/*
实例2：使用AMD规范创建模块：define方式来创建模块,同时，该模块还依赖moduleA
*/
define(['moduleA'], function(moduleA){
　　function add(x, y){
        return moduleA.add(x, y);
　　}
　　return {
     add : add
　　};
});