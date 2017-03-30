/**
 * Reflect 是ES6 为了操作对象而提供的API, Reflect 对象的设计目的如下：
 * 1、将 object 对象的一些语言内部的方法，放到 Reflect 对象上，这样就可以从 Reflect 对象上可以拿到语言内部的方法。
 * 2、修改某些 object 方法的返回结果，让其变得更加合理。
 * 3、让 object 操作都编程函数行为。
 * 4、Reflect 对象的方法与 Proxy 对象的方法一一对应。
 * 
 * 静态方法，Reflect 对象总共有13个静态方法，如下：
 * 
       - Reflect.apply(target,thisArg,args)
       - Reflect.construct(target,args)
       - Reflect.get(target,name,receiver)
       - Reflect.set(target,name,value,receiver)
       - Reflect.defineProperty(target,name,desc)
       - Reflect.deleteProperty(target,name)
       - Reflect.has(target,name)
       - Reflect.ownKeys(target)
       - Reflect.isExtensible(target)
       - Reflect.preventExtensions(target)
       - Reflect.getOwnPropertyDescriptor(target, name)
       - Reflect.getPrototypeOf(target)
       - Reflect.setPrototypeOf(target, prototype)

   上面的这些方法，大部分与object 对象的同名方法作用是相同的，而且它与Proxy 对象的方法是一一对应的。
 *
 */

//例子1
console.log("例子1：")
var myObject = {
  foo: 1,
  bar: 2,
  get baz() {
    return this.foo + this.bar;
  },
}

var myReceiverObject = {
  foo: 4,
  bar: 4,
};
var foo=Reflect.get(myObject, 'foo');console.log(foo);
var bar=Reflect.get(myObject, 'bar');console.log(bar);
var baz=Reflect.get(myObject, 'baz');console.log(baz);
var baz2 = Reflect.get(myObject,'baz',myReceiverObject);console.log(baz2);


//例子2：使用Proxy 实现观察者模式，思路：使用proxy 拦截赋值操作，触发充当观察者的各个函数。
console.log("\n例子2：")
const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach(observer => observer());
  return result;
}

const person = observable({
  name: '张三',
  age: 20
});

function print() {
  console.log(`${person.name}, ${person.age}`)
}

observe(print);
person.name = '李四';
