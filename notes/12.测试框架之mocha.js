/**
 * Mocha 读“摩卡”，是现在最流行的js测试框架之一，在浏览器和Node环境都可以使用。
 * 官网：http://mochajs.org/
 * 
 * 安装：npm install -g Mocha //全局安装
 *      npm install --save-dev mocha //安装到项目
 * 
 * 使用：mocha 可以不仅可以使用在浏览器端，还可以使用在node端
 *      1、node 端；
 *          通常，测试脚本单独放在一个 test 文件夹内，并且与源码脚本同名，但是后缀名为“.test.js”（表示测试）或者“.spec.js”（表示规格）;
 *          比如 add.js 的测试脚本名字为 add.test.js
 *          describe 块被称为“测试套件”，表示一组相关的测试；他是一个函数，第一个参数为测试套件的名称，第二个参数是一个实际执行的函数。
 *              测试脚本中应该包括一个或多个 describe 块，每个describe 块应该包括一个或多个 it 块。
 *          it 块被称为“测试用例”，表示一个单独的测试，是测试的最小单位；他是一个函数，第一个参数是测试用例的名称，第二个参数是一个实际执行的函数。
 *              it 测试用例中需要使用 “断言”来判读源码的实际执行结果与预期结果是否一致，如果不一致则抛出一个错误。
 *              it 块中含有一句或多句断言，使用断言库实现，mocha 本身不带断言库，所以需要引入。
 *          一般我们使用 chai 断言库。即 mocha + chai 的方式进行测试。 
 *      @@通配符：
 *          $ mocha test/*.js
 *          $ mocha test/{my,awesome}.js
 *          
 *      @@命令行参数
 *          --help,-h ：查看mocha 所有命令行参数
 *          --reporter,-R : 参数用来指定测试报告的格式，默认是 spec 格式。
 *          ...
 *      @@配置文件mocha.opts 
 *          mocha 允许在test 目录下面，防止配置文件mocha.opts ，把命令行参数写在里面。
 *      
 *      @@ES6 测试
 *          如果测试脚本是用ES6写的，那么运行测试之前，需要先用 babel 转码，使用 --compilers 指定转码器。
 * 
 *      @@异步测试
 *          mocha 默认每个测试用例最多执行2000毫秒，如果到时没有得到结果就报错。
 *          对于涉及异步操作的测试用例，这个是时间往往是不够的，需要用 -t 或 --timeout 参数指定超时门槛。
 *          异步操作需要传入 done 参数用来标志异步执行完成。
 *      
 *      @@测试用例的钩子
 *          mocha 在describe 块中，提供测试试用的四个钩子：before(),after(),beforeEach(),afterEach().
 * 
 *      @@测试用例管理
 *          大型项目有很多测试用例，但有时我们只希望运行其中几个，这时可以使用 only ，describe 和 it 都允许调用 only 方法。
 *          我们还可以使用 skip 方法，表示跳过指定的测试套件或测试用例。  
 */

//示例1：
// add.js
function add(x, y) {
  return x + y;
}
module.exports = add;


// add.test.js
var add = require('./add.js');
var expect = require('chai').expect;

describe('加法函数的测试', function() {
    it('1 加 1 应该等于 2', function() {
    expect(add(1, 1)).to.be.equal(2);
    });
});

