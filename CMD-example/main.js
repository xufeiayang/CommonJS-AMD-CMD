/**

 * 当factory为函数时，可以接受3个参数，function(require,exports,module)

 */

define(function(require) {

   //通过riquire引用模块

   var moduleA=require('./moduleA');

   alert(moduleA.foo);//输出对象foo

});