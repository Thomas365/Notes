/*
ES6新增Promise对象,这是异步编程的一种解决方案，和传统的解决方案（回调函数和事件）相比，Promise 更合理、更强大。

特性：
1、promise 对象的状态不受外接影响。promise 对象拥有三种状态：pending(进行中)、resolved/fulfilled(已完成)、rejected(已失败),
    promise 只有异步操作的结果才可以决定当前的状态。
2、promise 对象，一旦状态改变就不会再变，任何时候都可以得到这个状态。状态默认 pending ，
    改变过程：pending -> Resolved 或者 pending -> Rejected;
3、promise 对象缺点：无法取消，一旦创建就立即执行；其次，如果不设置回调函数，promise 内部跑出的错误，不会反应到外部。
    第三，当 promise 处于 pending 状态时，无法得知目前进展进度。

4、promise 链式调用中，考虑两个问题：一是如何链式调用，二是如何中止链式调用。注意点：then() 中发生异常时，则会跳过后面的 then(),执行后面的catch()；没有发生异常时，则会跳过后面的catch()，执行 then();

promise 对象提供的方法：

1、promise.all([arr]):当所有给定的可迭代的promise 完成时执行 resolve，或者任何  promises 失败时执行 reject,所有的 Promise 的值立即失败，丢弃所有的其他 promises。如果传递任意的空数组，那么这个方法将立刻完成。

2、promise.race([arr]):方法返回一个 promise，在可迭代的 resolves 或 rejects 中 promises 有一个完成或失败，将显示其值或原因。
    race 函数返回一个 Promise，它将与第一个传递的 promise 相同的完成方式被完成。它可以是完成（ resolves），也可以是失败（rejects），这要取决于第一个完成的方式是两个中的哪个。

3、promise.then():then() 方法返回一个  Promise。它最多需要有两个参数：Promise的成功和失败情况的回调函数，可以省略第二个参数。如果省略第二个参数，则只捕获promise的fulfilled 状态，语法如下：
    p.then(onFulfilled, onRejected);

    p.then(function(value) {
        // fulfillment
        }, function(reason) {
        // rejection
    });

4、promise.catch():该方法相当于 promise.then(undifine,onRejected),捕获promise到rejected 状态时调用
*/


// 现在我们写个Promise的例子
var times=100;
var Diaosi={
    "身高":"170cm",
    "体重":"65kg",
    "年薪":"150k",
    name:"屌丝",
    rate:0.5,
    request:function(obj){
        if(Math.random()>(1-this.rate)){
            obj.success();
        }else{
            obj.error();
        }
    }
};
var Nasheng={
    "身高":"185cm",
    "体重":"75kg",
    "年薪":"500k",
    name:"男神",
    rate:0.5,
    request:function(obj){               
        if(Math.random()>(1-this.rate)){            
            obj.success();
        }else{            
            obj.error();
        }
    }
};

var Marry = function(man,woman){
    return new Promise(function(resolve,reject){
        var failed = 0,
            MarryRequest = function(){
                man.request({                    
                    success:function(){
                        console.log(man.name,"追求",woman,"成功！");
                        failed=0;
                        resolve();
                    },
                    error:function(){
                        if(failed==0){
                            console.log(man.name,"第一次追求",woman,"失败，再追一次！");
                            failed=1;
                            MarryRequest();
                        }else{
                            console.log(man.name,"依然没有追到",woman,"追求失败！;");
                            MarryRequest();
                        }
                    }
                })
            };
            console.log("\n",man.name,"开始追求：",woman)
            MarryRequest();
    })
}

//例子1：每个 promise 产生两种情况，且都有返回一个 promise 
// Marry(Diaosi,"女神1")
//     .then(function(){
//         return Marry(Nasheng,"女神2")
//                 .then(function(){console.log("1, Diaosi 追女神1成功！,男神追女神2成功！")})
//                 .catch(function(){console.log("2, Diaosi 追女神1成功！,男神追女神2失败！")}) 
//     })              
//     .catch(function(){
//         return Marry(Nasheng,"女神1")
//                 .then(function(){console.log("3, Diaosi 追女神1失败,男神追女神1成功！")})
//                 .catch(function(){console.log("4, Diaosi 追女神1失败,男神追女神1失败！")})
//     })
        
    


//例子2：多个promise 链式调用
function Request(man,womanArr){
    var index=Marry(man,womanArr[0]);
    for(var i=1;i<womanArr.length;i++){
        (function(i){index=index.catch(function(){return Marry(man,womanArr[i])})})(i)
    }
    index.catch(function(){console.log("\n",man.name,"注孤生！")});
}

// Request(Diaosi,["女神1","女神2","女神3","女神4","女神5","女神6","女神7","女神8","女神9",]);
// Request(Nasheng,["女神1","女神2","女神3","女神4","女神5","女神6","女神7","女神8","女神9",])


//例子3：重复执行，直到成功
function marryRepeat(man,woman){
    return new Promise(function(resolve,reject){
        var times = 1,
            request = function(){
                man.request({                    
                    success:function(){
                        console.log(man.name,"追求",woman,"第",times,"次成功！");                        
                        resolve();
                    },
                    error:function(){                        
                        console.log(man.name,"第",times,"追求",woman,"失败，再追一次！");
                        times++;
                        request();
                    }
                })
            };
            console.log(man.name,"开始追求：",woman,"每次成功率为：",man.rate)
            request();
    })
}
// marryRepeat(Diaosi,"女神")