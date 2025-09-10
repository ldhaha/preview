const name = '《React进阶实践指南》';
const author = '我不是外星人';
export { name, author };
export const say = function () {
	console.log('hello , world');
};

// 默认导出
export default { name, author, say };
/*
    import {name,author,say} from './EsModule.js'

    导入默认导出的模块
    import ld from './EsModule.js'

    混合导出
    import ld, {name,author} from './EsModule.js'


    特性
    ES6 module 的引入和导出是静态的，
    import 会自动提升到代码的顶层 ，import , export 不能放在块级作用域或条件语句中。

    import 可以动态加载
    export const name ='alien'
    export default function sayhello(){
    console.log('hello,world')
}

    setTimeout(() => {
    const result  = import('./b')
    result.then(res=>{
        console.log(res)   // 输出结果{name:'alien',default:f}
    })
}, 0);

*/
