/*
学习正则表达式，特指 javascript，js中 正则表达式对象为 RegExp
1、创建 RegExp 对象，有两张方法，
    - var patt = new RegExp(pattern,modifiers);modifiers 为修饰符，值为 i(不区分大小写),g（全局匹配）,m（多行匹配）
    - var patt =/pattern/modifiers;

    注意：当使用构造函数创造正则对象时，需要常规的字符转义规则（在前面加反斜杠 \）。比如，以下是等价的： 

    var re = new RegExp('\\w+');
    var re = /\w+/; 

2、方括号[]
    - [abc]：查找方括号之间的任何字符，可以不连续
    - [^abc]:查找任何不在方括号之间的字符。
    - [0-9]:查找任何0-9的数字
    - [a-z]:查找任何a到z之间的任何字符
    - [A-Z]:查找任何A-Z之间的任何字符
    - [A-z]：查找任何A-z之间的任何字符
    - (red|blue|green):查找任何指定选项

3、元字符
    元字符是指拥有特殊含义的字符
    -  .  :‘点’，查找单个字符，除了换行和行结束符
    -  \w :查找单词字符，单词字符包括 a-z,A-Z,0-9,下划线(_)
    -  \W :查找非单词字符
    -  \d :查找数字字符，即 0-9
    -  \D :查找非数字字符
    -  \s :查找空白符，空白符包括:空格符('')，制表符（\t,\v），回车符(\r)，换行符(\n)，垂直换行符，换页符(\f)
    -  \S :查找非空白符
    -  \b :查找单词边界，即单词的开头和结尾
    -  \B :查找非单词边界
    -  \0 :查找NULL字符
    -  \n,\f,\r,\t,\v
    -  \xxx :查找以八进制数 xxx规定的字符,如 /\127/ 匹配 W （ASCII 中十进制值为87）
    -  \xdd :查找以十六进制数 dd 规定的字符，如 /\x57/ 匹配 W
    -  \uxxxx :查找以十六进制数 xxxx 规定的 Unicode 字符,如 \u0057 匹配 W 

4、量词
    量词表示匹配的字符出现多少次，这里我们使用a 代表需要陪陪的字符
    - a+ :+ 表示至少出现一次。
    - a* :* 表示零次或多次
    - a? :? 表示出现零次或一次
    - a{x} : 表示 字符 a 必须连续出现 x 次
    - a{x,} :表示 字符 a 至少出现 x 次 
    - a{x,y} :表示字符 a 连续出现  至少 x 次 至多 y 次 ，出现次数超过 y 次 也只匹配前面 y 次 
    - a$ :$ 表示匹配字符串结尾，所以表示匹配任何以 a 字符 结尾的字符串
    - ^a :^ 表示匹配字符串开头，所以表示匹配任何以 a 字符 开头的字符串
    - ?=a :表示匹配任何 其后紧跟 a 字符的 字符串
    - ?!a

5、RegExp 方法
    创建正则对象，我要使用以下方法使用
    - test() :RegExpObject.test(string) ,如果字符串中有匹配的值返回 true ，否则返回 false。
    - exec() :RegExpObject.exec(string) ,如果字符串中有匹配的值返回该匹配值，否则返回 null。
    - compile() :RegExpObject.compile(regexp,modifier) ,
                compile() 方法用于在脚本执行过程中编译正则表达式。
                compile() 方法也可用于改变和重新编译正则表达式。

6、支持正则表达式的 String 对象方法
    字符串对象中的一些方法可以把正则表达式当做参数传入
    - search :string.search(searchvalue) ;search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。（按顺序匹配第一个满足条件的）与指定查找的字符串或者正则表达式相匹配的 String 对象起始位置(Number 类型)。如果没有找到任何匹配的子串，则返回 -1。
    - match ：string.match(regexp) ；match() 方法可在字符串内检索指定的值，如果正则表达式 加上 g 标志，则返回多次匹配结果，否则只返回一次，多次结果 以数组形式
    - replace : string.replace(searchvalue,newvalue); replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
    - split : string.split(separator,limit),split() 方法用于把一个字符串分割成字符串数组。

7、正则表达式中的 (),[],{}
    正则表达式的() [] {}有不同的意思。

    - () 是为了提取匹配的字符串。表达式中有几个()就有几个相应的匹配字符串。

    - (\s*)表示连续空格的字符串。

    - []是定义匹配的字符范围。比如 [a-zA-Z0-9] 表示相应位置的字符要匹配英文字符和数字。[\s*]表示空格或者*号。

    - {}一般用来表示匹配的长度，比如 \s{3} 表示匹配三个空格，\s[1,3]表示匹配一到三个空格。

    - (0-9) 匹配 '0-9′ 本身。 [0-9]* 匹配数字（注意后面有 *，可以为空）[0-9]+ 匹配数字（注意后面有 +，不可以为空）{1-9} 写法错误。

    - [0-9]{0,9} 表示长度为 0 到 9 的数字字符串。

    - 用法推荐：http://www.jb51.net/article/102258.htm
*/

//获取URL 参数值
function getQueryString(url,param) {
    var reg = new RegExp("(^|\\?|&)"+param + "=([^&]+)", "i");console.log(reg)
    var r = url.match(reg);
    console.log(r)
    // if (r != null) return unescape(r[2]); return null;
} 

//test
var testurl='http://www.example.com?param1=sdjfasgfjsa&param2=123123'
// getQueryString(testurl,'param1');

function createPhoneNumber(){
    var Mock = require('mockjs');
    var phoneNumbers=[];
    while(phoneNumbers.length<10){
        var p=Mock.mock(/^1(3|4|5|7|8)\d{9}$/);
        phoneNumbers.push(p)
    }
    console.log(phoneNumbers)
}
// createPhoneNumber()
