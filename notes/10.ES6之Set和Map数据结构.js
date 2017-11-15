/**
 * Set() : ES6 提供了新的的数据结构 Set，它类似于数组，但是成员的值是唯一的，没有重复值。Set() 是构造函数，用来生成Set数据。
 *         @@ Set() 函数可以接受一个数组或者类数组对象 作为参数，用来初始化。
 *         @@ 向 Set 加入值得时候，不会发生类型转换，Set 内部判断两个值是否相同，使用类似于 “===” 算法，所以字符串 '5' 和 5 不是同一个值。
 *         @@ 在 Set 内部认为 两个NaN 是相等的，所以一个set 中只能添加一个NaN 
 * 
 * Set 实例的属性和方法：
 *         Set 结构的实例有以下属性：
 *              1、Set.prototype.constructor : 构造函数，默认是 Set() 函数。
 *              2、Set.prototype.size: 返回 Set 实例的成员总数，类似数组的length
 *         Set 结构的实例有以下方法：
 *              主要分两类，操作方法 和 遍历方法
 *              1、add(value) : 添加某个值，返回 Set 结构本身，与 数组 push() 方法类似，但返回值不一样，push() 放回数组的长度
 *              2、delete(value):删除某个值，返回一个布尔值，表示是否删除成功。
 *              3、has(value):返回一个布尔值，表示是否存在。
 *              4、clear():清除所有成员，没有返回值。
 * 注：Set 中的值的类型没有限制。
 * 
 * 
 * WeakSet : 与 Set 结构类似，也是不重复值得集合，与 Set 结构有两个区别：
 *      1、WeakSet 结构的值的数据类型只能是对象，而不能是其他类型的值。
 *      2、WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用。
 *                 WeakSet 结构是不可遍历的。
 *      WeakSet() 有以下几个方法：
 *          1、WeakSet.prototype.add(value);返回 weakset 结构
 *          2、WeakSet.prototype.delete(value);返回 true 或 false
 *          3、WeakSet.prototype.has(value);返回 true 或 false;
 * 
 * Map ： map 结构是为了弥补传统对象无法使用其他数据类型做”键“而新增的数据结构。
 *      传统的对象(object)，本质上是键值对的集合（Hash结构），但传统上只能用字符串做键；
 * 
 * Map 结构的方法与 Set 结构方法大部分相同，额外的方法如下：
 *      Map.prototype.set(key,value);
 *      Map.prototype.get(key);
 * 
 * WeakMap : 和map 结构类似，区别是 只能使用对象 作 key,且 key 使用弱引用，无法遍历。
 */

//例子1：使用 Set 进行数组去重
console.log("例子1：")
var oldArr=[1,1,8,2,3,2,3,2,4,5,6,4,6,7];
var newArr=[...new Set(oldArr)];
console.log(newArr) 

//例子2：
console.log("\n例子2：");
var mySet =new Set([1,3,3,4,4,5,2]);
console.log(mySet.constructor);
console.log(mySet.size);

console.log(mySet.add(100));
console.log(mySet.delete(1));
console.log(mySet.has(1));
//console.log(mySet.clear());

//迭代
console.log('\n')
for(let item of mySet) console.log(item);

console.log('\n')
for(let item of mySet.keys()) console.log(item);

console.log('\n')
for(let [key,value] of mySet.entries()) console.log(key,value);

console.log('\n');
mySet.forEach(function(value){
    console.log(value)
})

console.log('\n')
var set2 = new Set([1,23,4,435,6]);

//例子3：WeakSet
console.log("\n例子3：Weaset")
var myWeakSet = new WeakSet();
var obj1={a:1},
    obj2={b:1};
myWeakSet.add(obj1).add(obj2);

