/**
concat() :连接两个或多个的数组，并返回新的数组。
join() : 把数组的所有元素通过指定的连接符连接一个字符串。默认为逗号“,”。返回字符串。
pop() :删除数组的最后一个元素，并返回该元素。
push();向数组的末尾添加一个或多个元素，并返回数组的新长度。
shift():删除数组的第一个元素，并返回该元素。
unshift():向数组的开头添加一个或多个元素，并返回数组的新长度。
reverse():颠倒数组中元素的顺序，
slice():从数组中切割指定元素
splice():从数组中删除，指定元素，并添加新元素
valueOf() :返回数组对象的原始值
sort():对数组进行排序
map();对数组中的元素依次进行处理
filter()
forEach()
every()
some()
indexOf():在数组中查找指定元素是否存在，存在返回索引值，不存在返回-1
lastIndexOf()
isArray()
of()
reduce()
reduceRight()
*/

//concat()
var arr1 = [1,2,3,4,5,6,7,8];
var arr1_result = arr1.concat(7,8,9);
console.log("原数组：",arr1);
console.log("返回值：",arr1_result);
console.log("concat() 不改变原数组\n");

//join()
var arr2 = [1,2,3,4,5,6,7,8];
var arr2_result = arr2.join("-");
console.log("原数组：",arr2);
console.log("返回值：",arr2_result);
console.log("join() 不改变原数组\n");

//pop()
var arr3 = [1,2,3,4,5,6,7,8];
var arr3_result = arr3.pop();
console.log("原数组：",arr3);
console.log("返回值：",arr3_result);
console.log("pop() 改变原数组\n");

//push()
var arr4 = [1,2,3,4,5,6,7,8];
var arr4_result = arr4.push(9,10);
console.log("原数组：",arr4);
console.log("返回值：",arr4_result);
console.log("push() 改变原数组\n");

//shift()
var arr5 = [1,2,3,4,5,6,7,8];
var arr5_result = arr5.shift();
console.log("原数组：",arr5);
console.log("返回值：",arr5_result);
console.log("shift() 改变原数组\n");

//unshift()
var arr6 = [1,2,3,4,5,6,7,8];
var arr6_result =arr6.unshift(-1,0);
console.log("原数组：",arr6);
console.log("返回值：",arr6_result);
console.log("unshift() 改变原数组\n");

//reverse()
var arr7 = [1,2,3,4,5,6,7,8];
var arr7_result = arr7.reverse();
console.log("原数组：",arr7);
console.log("返回值：",arr7_result);
console.log("reverse() 改变原数组\n");

//slice(start,end)
var arr8 = [1,2,3,4,5,6,7,8];
var arr8_result = arr8.slice(0,3);
console.log("原数组：",arr8);
console.log("返回值：",arr8_result);
console.log("slice() 不改变原数组\n");

//splice(index,num.arg1,arg2,...)
var arr9 = [1,2,3,4,5,6,7,8];
var arr9_result = arr9.splice(0,3,-1,0);
console.log("原数组：",arr9);
console.log("返回值：",arr9_result);
console.log("splice() 改变原数组\n");

//valueOf
var arr10 = [1,2,3,4,5,6,7,8];
var arr10_result = arr10.valueOf();
console.log("原数组：",arr10);
console.log("返回值：",arr10_result);
console.log("valueOf() 不改变原数组\n");

//sort
var arr11 = [1,2,3,4,5,6,7,8];
var arr11_result = arr11.sort(function(a,b){return b-a;});
console.log("原数组：",arr11);
console.log("返回值：",arr11_result);
console.log("sort() 改变原数组\n");

//map
var arr12 = [1,2,3,4,5,6,7,8];
var arr12_result = arr12.map(function(x){return 2*x;});
console.log("原数组：",arr12);
console.log("返回值：",arr12_result);
console.log("map() 不改变原数组\n");

// filter()
var arr13 = [1,2,3,4,5,6,7,8];
var arr13_result = arr13.filter(function(x){return x>3;});
console.log("原数组：",arr13);
console.log("返回值：",arr13_result);
console.log("filter() 不改变原数组\n");


// forEach()
var arr14 = [1,2,3,4,5,6,7,8];
var arr14_result = arr14.forEach(function(x){console.log(x)});
console.log("原数组：",arr14);
console.log("返回值：",arr14_result);
console.log("forEach() 不改变原数组\n");

// every()
var arr15 = [1,2,3,4,5,6,7,8];
var arr15_result = arr15.every(function(x){return x >5;});
console.log("原数组：",arr15);
console.log("返回值：",arr15_result);
console.log("every() 不改变原数组\n");

// some()
var arr16 = [1,2,3,4,5,6,7,8];
var arr16_result = arr16.some(function(x){return x>5});
console.log("原数组：",arr16);
console.log("返回值：",arr16_result);
console.log("some() 不改变原数组\n");

//indexOf
var arr17 = [1,2,3,4,5,6,7,8,8];
var arr17_result = arr17.indexOf(8);
console.log("原数组：",arr17);
console.log("返回值：",arr17_result);
console.log("indexOf() 不改变原数组\n");

//lastIndexOf()
var arr18 = [1,2,3,4,5,6,7,8,8];
var arr18_result = arr18.lastIndexOf(8);
console.log("原数组：",arr18);
console.log("返回值：",arr18_result);
console.log("lastIndexOf() 不改变原数组\n");

// of()
var arr19 = Array.of(1,2,3,4,5,6,7,8);
console.log("生成数组：",arr19);

// reduce()
var arr20 = [1,2,3,4,5,6,7,8];
var arr20_result = arr20.reduce(function(current,next){return current + next;});
console.log("原数组：",arr20);
console.log("返回值：",arr20_result);
console.log("reduce() 不改变原数组\n");

// reduceRight()
var arr21 = [1,2,3,4,5,6,7,8];
var arr21_result = arr21.reduceRight(function(current,next){return current - next;});
console.log("原数组：",arr21);
console.log("返回值：",arr21_result);
console.log("reduceRight() 不改变原数组\n");

//综上所述，改变原数组的方法有：pop() , push() ,shift() , unshift() , reverse() , splice() ,sort() 
