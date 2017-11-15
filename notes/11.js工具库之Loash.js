/**
 * Lodash 是一个具有一致接口、模块化、高性能的 JavaScript 工具库。提供各个对象的封装后的函数。
 * 使用方法：
 * 1、页面中引入文件：<script src="lodash.js"></script> 或者 require(['lodash'], function(_) {});
 * 2、后端使用 
 *      安装 $ npm i --save lodash；
 *      引入 var _ = require('lodash');
 *      或者引入部分方法 var array = require('lodash/array');
 * 
 * Lodash 提供大致如下几类方法：
 *      1、Array //数组相关方法
 *      2、Chain //链式调用
 *      3、collection  //
 *      4、Date
 *      5、Function
 *      6、Lang  //语法
 *      7、Math
 *      8、Number
 *      9、Object
 *      10、String
 *      11、Utility  //公用
 *      12、Methods
 *      13、Properties  //属性
 *      
 */

// 示例
var _ = require('lodash');
var originArr = [1,2,3,4,5,6,7,8,9,10];
var newArr = _.chunk(originArr,3);//使用 _.chunk 方法把数组分小数组。
console.log(newArr,_.now());