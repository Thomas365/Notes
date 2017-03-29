/**
 * Generator 函数是 ES6 提供的一种异步编程的解决方案，语法行文与传统函数完全相同。
 * 可以把 Generator 理解为一个状态机，内部封装了多个状态，不同状态之间可以加一些执行语句，每次执行只执行到下一个状态。
 * 
 * 特征：
 * 1、function 关键字与函数名之间有一个星号。
 * 2、函数内部使用 yield 语句来定义不同的内部状态。
 * 
 * Generator 函数调用方法与普通函数一样，不同的是，Generator 函数调用后，该函数并不执行，返回的也不是执行结果，
 *    而是返回一个指向内部状态的指针对象，即 遍历器对象。
 *    该遍历器对象拥有一个 next() 方法，调用 next() 方法，使得指针移向下一个状态，并执行状态之间的语句。
 *    内部指针从函数头部或者上一次停下了的地方开始执行，知道遇到下一个 yield 语句 或 return 语句。
 *    即 Generator 函数式分段执行的，yield 语句是暂停执行的标记，而next() 方法恢复执行。
 * 
 * yield 语句 与 return 语句的区别:
 *    1、相同点：都能返回紧跟在语句后面的那个表达式的值。
 *    2、不同点：函数执行每次遇到yield ，函数暂停执行，下一次再总该位置继续向后执行；而 return 语句不具备位置记忆功能；
 *             一个函数里面，只能执行一次return 语句，return 语句后面的所有代码都不会执行；但 yield 语句可以执行多次（或者说多个）。
 * 
 * 由于 Generator 函数中的 yield 由于可以执行多次且每次返回值，所以Generator 可以生成一系列的值，这也是其名字的由来，Generator 英文意思为生成器。
 * Generator 函数内部不使用 yield 语句，这时 Generator 就变成了一个单纯的暂缓执行函数。
 * yield 语句只能在 Generator 函数内使用，不能在其他普通函数内部使用 yield 语句。
 * yield 语句如果用在一个表达式中，则必须放在圆括号里面。如：console.log("hello"+(yield 123));
 * yield 语句用作 参数或者赋值表达式的右边，则可以不加圆括号。如：foo(yield 'a',yield 'b');
 * 
 * next 方法：
 *    yield 语句本身没有返回值，或者说总是返回 undefined。
 *    next() 方法可以带一个参数，该参数会被当做上一个 yield 语句的返回值。
 *    注意：由于next方法的参数表示上一个 yield 语句的返回值，所以第一次使用 next 方法时，不能带有参数，即使带了参数也会忽略。
 *         从语义上讲，第一个next 方法用来启动遍历器对象，所以不能带有参数。
 * 
 * for...of 循环：
 *    for...of 循环可以自动遍历 Generator 函数时生成的 Iterator 对象，且此时不再需要调用 next() 方法；
 * 
 * throw() 方法：
 *    Generator 函数执行返回的生成器对象拥有一个 throw 方法，该方法可以在函数体外抛出错误，在 Generator 函数体内捕获。
 * 
 * return() 方法：
 *    Generator函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历Generator函数。
 *    如果return方法调用时，不提供参数，则返回值的value属性为undefined。
 *    如果Generator函数内部有try...finally代码块，那么return方法会推迟到finally代码块执行完再执行。
 * 
 * yield* 语句：
 *    yield* 语句用来在一个 Generator 函数里面执行另一个 Generator 函数。
 *    如果在 Generator 函数内部，调用另一个 Generator 函数，默认情况下是没有效果的。
 */

//示例代码
console.log("\n例子1:")
function* myGenerator(){
        console.log("开始执行函数！",new Date())
        console.log("执行中。。。");
        console.log('第一部分执行完成，暂停!');
        var aa = yield '暂停1';
        console.log("继续执行函数!",new Date());
        console.log("执行中。。。",aa);
        console.log('第二部分执行完成，暂停!');
    yield '暂停2';
        console.log("继续执行函数!",new Date());
        console.log("执行中。。。");
        console.log('第三部分执行完成，暂停!');
    yield '暂停3';
        console.log("继续执行函数!",new Date());
        console.log("执行中。。。");
        console.log('第四部分执行完成，暂停!');
    yield '暂停4';
        console.log("继续执行函数!",new Date());
        console.log("执行中。。。");
        console.log('第五部分执行完成，暂停!');
    yield '暂停5';
        console.log("继续执行函数!",new Date());
        console.log("执行中。。。");
        console.log('第六部分执行完成，暂停!');
    return '结束'; 
        console.log("return 后面的代码不会执行",new Date());        
}

    // var test=myGenerator(); 

    // var stage1=test.next();
    // debugger;
    // var stage2=test.next("作为上一次yield返回值");
    // debugger;
    // var stage3=test.next();
    // debugger;
    // var stage4=test.next();
    // debugger;
    // var stage5=test.next();
    // debugger;
    // var stage6=test.next();
    // debugger;
    // var stage7=test.next();
    // debugger;
    // var stage8=test.next();
    // debugger;
    

//例子2：for...of 自动遍历 Generator 函数生成的 Iterator 对象
console.log("\n例子2:")
function* foo(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
    return 7;
}

for(let v of foo()){
    console.log(v)
}


//例子3：为对象加上 遍历器接口，使其可以遍历
console.log("\n例子3:")
function* objectEntries() {
  let propKeys = Object.keys(this);

  for (let propKey of propKeys) {
    yield [propKey, this[propKey]];
  }
}

let jane = { first: 'Jane', last: 'Doe' };

jane[Symbol.iterator] = objectEntries;

for (let [key, value] of jane) {
  console.log(`${key}: ${value}`);
}

//例子4：for...of ，扩展运算符（...）,解构赋值，Array.from 方法内部调用的都是遍历器接口，因此，他们都可以将 Generator 函数返回的 Iterator 对象作为参数。
console.log("\n例子4:")
function* numbers () {
  yield 1
  yield 2
  return 3
  yield 4
}

// 扩展运算符
var r1=[...numbers()] // [1, 2]

// Array.from 方法
var r2=Array.from(numbers()) // [1, 2]

// 解构赋值
let [x, y] = numbers();
x // 1
y // 2

// for...of 循环
for (let n of numbers()) {
  console.log(n)
}
// 1
// 2


//例子5：
console.log('\n例子5：');
function* aa(){
    yield console.log("yield1");
    yield console.log("yield2");
    yield console.log("yield3");
    yield console.log("yield4");
    yield 5
}
var bb=aa();
console.log([...bb])
    
    