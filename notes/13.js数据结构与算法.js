/**
 * js 数组 array 对象 
 * 常用方法有：
 *  concat()
 *  every()
 *  filter()
 *  forEach()
 *  join()
 *  indexOf()
 *  lastIndexOf()
 *  map()
 *  reverse()
 *  slice()
 *  some()
 *  sort()
 *  toString()
 *  valueOf()
 * 
 * 我们使用 数组 来模拟其他数据结构
 */


//栈
function Stack(){
    var items= [];
    this.push=function(element){
        items.push(element);
    }
    this.pop =function(){
        return items.pop();
    }
    this.peek = function(){
        return items[items.length-1];
    }
    this.isEmpty = function(){
        return items.length == 0;
    }
    this.size =function(){
        return items.length;
    }
    this.clear = function(){
        items = [];
    }
    this.print = function(){
        console.log(items.toString());
    }
}
console.log('栈')
//新建一个栈
var stack1 = new Stack();

//添加数据
stack1.push("Tom");
stack1.push("Bob");
stack1.push(111)

stack1.print();

//队列
function Queue(){
    var items = [];

    this.enqueue = function(element){
        items.push(element);
    };

    this.dequeue = function(){
        return items.shift();
    };

    this.front = function(){
        return items[0];
    };

    this.isEmpty = function(){
        return items.length==0;
    };

    this.clear = function(){
        items=[];
    };
    
    this.size = function(){
        return items.length;
    }

    this.print = function(){
        console.log(items.toString());
    }
}

console.log("\n队列");
//实例一个队列
var queue1 = new Queue();
queue1.enqueue("a");
queue1.enqueue("b");
queue1.enqueue(0);

queue1.print();
queue1.dequeue();
queue1.print();


//优先队列 : 添加函数不一样，其他一样
function PriorityQueue(){
    var items = [];

    function QueueElement(element,priority){
        this.element  = element;
        this.priority = priority;
    }

    this.enqueue = function(element,priority){
        var queueElement = new QueueElement(element,priority);

        if(this.isEmpty()){
            items.unshift(queueElement);
        }else{
            var added = false;
            for(var i=0;i<items.length;i++){
                if(queueElement.priority<items[i].priority){
                    items.splice(i,0,queueElement);
                    added =true;
                    break;
                }
            }
            if(!added){
                items.push(queueElement);
            }
        }
    };

    this.dequeue = function(){
        return items.shift();
    };

    this.front = function(){
        return items[0];
    };

    this.isEmpty = function(){
        return items.length==0;
    };

    this.clear = function(){
        items=[];
    };
    
    this.size = function(){
        return items.length;
    }

    this.print = function(){
        var elements = items.map(function(i){return i.element});
        console.log(elements.toString());
    }
}

console.log("\n优先队列：")
var priorityQueue1 = new PriorityQueue();

priorityQueue1.enqueue("John",2);
priorityQueue1.enqueue("Tom",1);
priorityQueue1.enqueue("Jack",3);

priorityQueue1.print();

priorityQueue1.dequeue();
priorityQueue1.print();


//链表
function LinkedList(){
    var Node = function(element){
        this.element = element;
        this.next = null;
    };

    var length = 0;
    var head = null;

    this.append = function(element){
        var node = new Node(element),
            current;
        
        if(head === null){
            head = node;
        }else{
            current = head;

            while(current.next){
                current = current.next;
            }

            current.next = node;
        }
        length++;
    };

    this.insert = function(position,element){};

    this.removeAt = function(position){};

    this.indexOf = function(element){};

    this.isEmpty = function(){};

    this.size = function(){};

    this.getHead =function(){};

    this.toString = function(){};

    this.print = function(){};
}