/**
 * Proxy 用于修改某些操作的默认行为，等同于语言层面做出修改，属于一种“元编程”。
 * Proxy 可以理解成，在目标对象之前架设了一层“拦截”，外界对该对象的访问都必须先通过这层拦截，因此我们可以对外界的访问进行过滤和改写。
 * 
 * ES6 原生提供了 Proxy 构造函数，用来生成 Proxy 实例。
 * var myProxy = new Proxy(target,handler)
 * 
 * Proxy 对象的所有用法都是上面的这种形式，不同的只是 handler 参数的写法。
 * 其中 new Proxy（） 表示生成一个 proxy 实例，target 参数表示所要拦截的目标对象，handler 参数也是一种对象，用来定制拦截行为。
 * 
 *  Proxy 支持的操作如下：
 *      - get(target,propKey,receiver)
 *      - set(target,propKey,value,receiver)
 *      - has(target,propKey)
 *      - deleteproperty(target,propKey)
 *      - ownKeys(target)
 *      - getOwnPropertyDescriptor(target,propKey)
 *      - defineProperty(target,propKey,propDesc)
 *      - preventExtensions(target)
 *      - getPrototypeOf(target)
 *      - isExtensible(target)
 *      - setPrototypeOf(target,setPrototypeOf)
 *      - apply(target,object,args)
 *      - construct(target,args)
 */

//例子
console.log("例子1：")
var myProxy = new Proxy({},{
    get:function(target,prop){
        console.log("拦截get");
    },
    set:function(target,prop,value){
        console.log("拦截set")
    }
})

myProxy.a;
myProxy.b=2;

//例子2：利用 Proxy，可以将读取属性的操作（get），转变为执行某个函数，从而实现属性的链式操作。
console.log("\n例子2：")
var pipe = (function () {
  return function (value) {
    var funcArr = [];    
    var oproxy = new Proxy({} , {
      get : function (pipeObject, fnName) {
        if (fnName === 'get') {
          return funcArr.reduce(function (pre,current) {
                return eval(current+"("+pre+")");                            
          },value);
        }
        funcArr.push(fnName);        
        return oproxy;
      }
    });
    return oproxy;
  }
}());

var double = n => n * 2;
var pow    = n => n * n;
var reverseInt = n => n.toString().split("").reverse().join("") | 0;
var result=pipe(3).double.pow.reverseInt.get; // 63
console.log(result)

