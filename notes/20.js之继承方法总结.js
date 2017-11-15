/**
 * js 有6种继承方法，分别是：
 * 1、原型链：原型中包含引用类型的值，在所有实例都会共享，改变一处，则会反映到所有实例上，一般不单独使用。
 * 
 * 2、借用构造函数：此方法为了解决原型中包含引用类型值所带来的问题。这种方法的思想就是在“子类构造函数的内部调用父类构造函数”，可以借助apply()和call()方法来改变对象的执行上下文。
 *               但是这个模式中方法只能在构造函数中定义，无法达到复用，所以一般不单独使用。
 * 
 * 3、原型链+构造函数的组合继承：组合继承是将原型链继承和构造函数结合起来，从而发挥二者之长的一种模式。
                            思路就是使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。
                            这样，既通过在原型上定义方法实现了函数复用，又能够保证每个实例都有它自己的属性。

 * 4、原型式继承：借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型。
 * 
 * 5、寄生式继承：寄生式继承的思路与寄生构造函数和工厂模式类似，即创建一个仅用于封装继承过程的函数。
 * 
 * 6、原型式+寄生式的组合继承： 这种模式通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。
 */

 //1、原型链继承
//  function f1(){
//      this.age = 20;
//      this.colors= ['red','blue'];
//  }
//  function f2(){}
//  f2.prototype =new f1();
//  var instance1 = new f2();
//  var instance2 = new f2();

//  instance1.colors.push("white");
//  console.log(instance1.colors,instance2.colors);
//  instance1.age = 30;
//  console.log(instance1.age,instance2.age)

//2、借用构造函数
// function f1(){
//     this.colors =['red','blue'];
// }
// function f2(){
//     f1.call(this);
// }
// var instance1 = new f2();
// var instance2 = new f2();

// instance1.colors.push("white");
// console.log(instance1.colors,instance2.colors);


 //3、原型链+构造函数
//  function f1(name){
//     this.name = name;
//     this.colors = ['red','blue','green'];
//  }
//  f1.prototype.sayName = function(){
//      console.log(this.name);
//  }
//  function f2(name,job){
//      f1.call(this,name);
//      this.job = job;
//  }
//  f2.prototype = new f1();
//  f2.prototype.constructor = f1;
//  f2.prototype.sayJob = function(){
//      console.log(this.job);
//  }

//  var instance1 = new f2("Jiang","student");
//  instance1.colors.push("white");
//  console.log(instance1.colors);
//  instance1.sayName();
//  instance1.sayJob();

//  var instance2 = new f2("Tom","teacher");
//  console.log(instance2.colors);
//  instance2.sayName();
//  instance2.sayJob();

//4、原型式继承
// function obj(o){
//     function F(){}
//     F.prototype = o;
//     return new F();
// }
// var person = {
//     name:"Tom",
//     friends:["Alice","Bob"]
// }
// var anotherPerson1  = obj(person);
// var anotherPerson2  = obj(person);

// anotherPerson1.friends.push("Jonh");
// console.log(anotherPerson1.friends);
// console.log(anotherPerson2.friends);

//使用 Object.create()
// var person ={
//     name:"Tom",
//     friends:['alice','bob']
// }
// var p1 = Object.create(person);
// var p2 = Object.create(person);
// p1.friends.push("Jonh");
// console.log(p1.friends,p2.friends);

//5、寄生式继承
// function createAnother(o){
//     var clone = Object.create(o);
//     clone.sayHi = function(){
//         console.log(this.friends)
//     }
//     return clone;
// }
// var person ={
//     name:"Tom",
//     friends:['alice','bob']
// }
// var p1 = createAnother(person);
// var p2 = createAnother(person);
// p1.friends.push("Jonh");
// p1.sayHi();
// p2.sayHi();

//6、构造函数+寄生式组合继承
// function f1(name){
//     this.name = name;
//     this.colors = ["red","blue"];
// }
// f1.prototype.sayName = function(){
//     console.log(this.name);
// }
// function f2(name,job){
//     f1.call(this,name);
//     this.job = job;
// }
// f2.prototype = Object.create(f1.prototype);
// f2.prototype.constructor = f1;
// var instance1 = new f2('Tom','student');
// var instance2 = new f2('candy','teacher');
// instance1.sayName();
// instance2.sayName();

//使用ES6 中的 Object.setPrototypeOf(),可以不用显示的指定constructor

// function f1(name){
//     this.name = name;
//     this.colors = ["red","blue"];
// }
// f1.prototype.sayName = function(){
//     console.log(this.name);
// }
// function f2(name,job){
//     f1.call(this,name);
//     this.job = job;
// }
// Object.setPrototypeOf(f2.prototype,f1.prototype);
// var instance1 = new f2("Feak","Master");
// instance1.sayName();