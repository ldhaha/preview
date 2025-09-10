console.log(this === exports, module.exports === this); // true true

this.a = 2;

exports.b = 2;

exports = { name: 'lindong' };

module.exports = {
	age: 18,
};

// console.log(module.exports, this, exports); // {age:18},{a:2,b:2},{name:'lindong'}

//  // id 为路径标识符
//  function require(id) {
//     /* 查找  Module 上有没有已经加载的 js  对象*/
//     const  cachedModule = Module._cache[id]

//     /* 如果已经加载了那么直接取走缓存的 exports 对象  */
//    if(cachedModule){
//      return cachedModule.exports
//    }

//    /* 创建当前模块的 module  */
//    const module = { exports: {} ,loaded: false , ...}

//    /* 将 module 缓存到  Module 的缓存属性中，路径标识符作为 id */
//    Module._cache[id] = module
//    /* 加载文件 */
//    runInThisContext(wrapper('module.exports = "123"'))(module.exports, require, module, __filename, __dirname)
//    /* 加载完成 *//
//    module.loaded = true
//    /* 返回值 */
//    return module.exports
//  }

/**
 *
 * require函数最终导出的的是module.exports,exports只是一个指向module.exports的引用
 * 此外每个模块还有一个标志符loaded,用来表示模块是否加载完成
 *
 * require 本质上就是一个函数，那么函数可以在任意上下文中执行，来自由地加载其他模块的属性方法。
 *
 */
