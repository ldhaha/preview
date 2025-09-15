/*

CommonJS和ES Module是JavaScript中两种不同的模块系统，它们有几个关键的区别：

语法差异：

CommonJS使用require()来导入模块，使用module.exports或exports来导出模块。

ES Module使用import和export语法。

加载方式：

CommonJS是动态加载模块，可以在代码的任何地方使用require()，模块的加载是同步的。

ES Module是静态的，import必须位于模块的顶层，不能在条件语句或函数中使用（但动态import()提案允许异步加载），这种静态特性使得树摇（tree-shaking）成为可能。

运行环境：

CommonJS主要用于Node.js环境。

ES Module是ECMAScript标准，旨在浏览器和Node.js中都得到支持。

输出拷贝 vs 输出引用：

CommonJS模块输出的是值的拷贝，一旦输出，模块内部的变化不会影响这个值。

ES Module输出的是值的引用，模块内部的改变会反映在引用上。

运行时 vs 编译时：

CommonJS模块在运行时加载。

ES Module在编译时确定依赖关系。

循环依赖的处理：

两者处理循环依赖的方式不同。CommonJS在遇到循环依赖时，可能会拿到未执行完的模块的exports对象，而ES Module则通过动态绑定，使得循环依赖的双方都能获取到对方最新导出的值。

顶层的this：

CommonJS模块中，顶层的this指向当前模块的exports对象。

ES Module中，顶层的this是undefined。

Node.js中的支持：

Node.js最初只支持CommonJS，现在也支持ES Module，但需要设置"type": "module"或者在文件后缀中使用.mjs。

*/
