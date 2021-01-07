/*
 * @Author       : LiCai
 * @connect      : 1981824361@qq.com
 * @Date         : 2021-01-07 14:10:03
 * @LastEditors  : LiCai
 * @LastEditTime : 2021-01-07 14:52:34
 * @Description  : webpack入口文件
 * 1、运行指令
 * 开发环境
 *    webpack b --mode=development
 *    以 ./src/index.js 为webpack默认入口文件  默认输出到 ./build/main.js 使用开发环境模式
 * 生产环境
 * @FilePath     : /webpack/02Webpack初体验/src/index.js
 */

function add(a,b) {
    return a+b;
}
console.log(add(1, 2));