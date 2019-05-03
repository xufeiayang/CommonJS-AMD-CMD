# CommonJS-AMD-CMD
用Common，AMD，CMD分别实现模块化，在浏览器直接预览，
例子代码用三种方式都实现了一个模块引入另一个模块，如果有帮助，欢迎star一下，谢谢

## commonJS

在CommonJS中，有一个全局性方法require()，用于加载模块。但是浏览器环境不支持require()方法，所以需要用browserify转化一下

###安装browserify 

npm i -g browserify

###转化文件

browserify use.js > canUse.js

##AMD

    require([module], callback);

AMD（Asynchronous Module Definition）也采用require()语句加载模块，但是不同于CommonJS，它要求两个参数：
第一个参数[module]，是一个数组，里面的成员就是要加载的模块；第二个参数callback，则是加载成功之后的回调函数。

##CMD

CMD (Common Module Definition), 是seajs推崇的规范，CMD则是依赖就近，用的时候再require。它写起来是这样的：
CMD与AMD一样，也是采用特定的define()函数来定义,用require方式来引用模块

    define(id?, dependencies?, factory)

id: 字符串，模块名称(可选)

dependencies:  是我们要载入的依赖模块(可选)，使用相对路径。,注意是数组格式

factory:  工厂方法，返回一个模块函数

