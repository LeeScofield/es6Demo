console.log("1模块加载了！");
export const aaa=9;
const bbb = 10;
const ccc = 11;
const ddd = 12;
export {
    bbb,ccc,ddd
}

/**
 *也可以起别名
 * export {bbb as b,ccc as c,ddd as d}
 * 起了别名后，引入时需要用别名
 * import {b,c,d} from 'xxx'
 * 导入时也能起别名
 * import {b as b1,c,d as d1} from 'xxx'
 * 也可能用
 * import * as ali from 'xxx'
 * 这里 ali是对象，可以ali.attr方式该问
 *
 * export default 789
 * 如果export 后带了default，import x from 'xxx'时不需要{}包住变量，其它情况下都需要{}包住变量
 *
 * 用 export导出去的模块，如果里面有定时器改了值，外面引的地方也会对应的更改
 */