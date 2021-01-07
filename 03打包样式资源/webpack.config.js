/*
 * @Author       : LiCai
 * @connect      : 1981824361@qq.com
 * @Date         : 2021-01-07 15:13:56
 * @LastEditors  : LiCai
 * @LastEditTime : 2021-01-07 15:50:05
 * @Description  : webpack配置文件
 * 指示webpack干哪些活（运行webpack指令 加载配置)
 * @FilePath     : /webpack/03打包样式资源/webpack.config.js
 */
const { resolve } = require('path');
module.exports = {
  // 入口
  entry: "./src/index.js",
  // 输出
  output: {
    // 输出文件名
    filename: "main.js",
    // __dirname nodeJs变量值 代表当前文件目录绝对路径
    path: resolve(__dirname, "dist"),
  },
  // 不同文件配置不同loader  less  sass等样式
  module: {
    rules: [
      // 详细loader配置
      {
        test: /\.css$/, // 正则
        // 使用哪些loader
        use: [
          // 从下到上执行
          "style-loader", // 创建style标签 将commonJS样式资源引入到 head标签中
          "css-loader", //将css文件变成commonJS模块加载到，里面是样式字符串
        ],
      },
      {
        test: /\.less$/, // 正则
        // 使用哪些loader
        use: [
          // 从下到上执行
          "style-loader", // 创建style标签 将commonJS样式资源引入到 head标签中
          "css-loader", //将css文件变成commonJS模块加载到，里面是样式字符串
          "less-loader", // 将less文件编译成css
        ],
      },
    ],
  },
  plugins: [],
  mode: "development",
};