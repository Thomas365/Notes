/**
 * 异步编程 对 javascript 语言太重要。因为 javascript 语言的执行环境是“单线程”的，如果没有异步编程，无法使用。
 * 
 * 1、异步编程传统方法：
 *      ES6 诞生之前，异步编程的方法，概括有以下四种：
 *      - 回调函数
 *      - 事件订阅
 *      - 发布/订阅
 *      - promise 对象
 * 
 * Generator 函数可以实现 javascript 异步编程。
 * 
 * 异步 指一个任务不是连续执行，执行过程中可以穿插一些其他任务。
 * 
 * 协程：传统的编程语言的异步编程解决方案中有一个概念叫做 “协程”，意思是多个线程相互协作，完成异步任务。
 *      协程有点像函数，又有点像线程。
 * 
 * Generator 函数实现协程，Generator 函数可以暂停执行和恢复执行，这是它能封装异步任务的根本原因，除此之外，它还有两个特性：
 *      - 函数体内外的数据的交换：next()方法的返回值(形如：{value：123，done:false})的value 属性，是Generator 函数向外输出的数据。
 *      - 错误处理机制：Generator 函数内部还可以部署错误处理代码，捕获函数体外抛出的错误，函数体外可以使用 throw() 方法抛出错误。
 *  
 * Thunk 函数：自动执行Generator 函数的一种方法。
 *      用来包裹“参数表达式”的临时函数，实现“传名调用”。
 *      javascript 语言是传值调用的，所以 Thunk 函数替换的不是表达式，而是多参数函数，将其替换成一个只接受回调函数作为参数的单参数函数。 
 *
 * Thunk 函数可以保证 Generator 函数的异步编程 中前一步执行完才能执行后一步。 
 */

//示例
// ES5版本
var fs = require('fs');
var Thunk = function(fn){
  return function (){
    var args = Array.prototype.slice.call(arguments);
    return function (callback){
      args.push(callback);
      return fn.apply(this, args);
    }
  };
};

// ES6版本
var Thunk = function(fn) {
  return function (...args) {
    return function (callback) {
      return fn.call(this, ...args, callback);
    }
  };
};

var readFileThunk = Thunk(fs.readFile);
readFileThunk('../package.json','UTF-8')(function(err,data){
    if(err) console.log(err);
    console.log("data:",data)
});
