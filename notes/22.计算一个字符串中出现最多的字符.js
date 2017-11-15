/**
 * 题目：给出一个字符串，找到该字符串中出现次数最多的字符
 */
var str1 = 'aaabbbccc456255/////';
function GetA(str) {
    if (typeof str != 'string' || str.length === 0) {
        console.log('请输入格式正确的字符串');
        return false;
    }
    var obj = {};
    for (var i = 0, len = str.length; i < len; i++) {
        if (!obj[str[i]]) obj[str[i]] = 0
        obj[str[i]]++;
    }
    return obj;
}
function GetB(obj) {
    if(typeof obj != 'object') return false;
    var MaxObj = {
        maxTimes:0,
        chartArr:[]
    };
    for (var key in obj) {
        if (MaxObj.maxTimes === 0) {
            MaxObj.maxTimes = obj[key];
            MaxObj.chartArr.push(key);
        } else if (obj[key] == MaxObj.maxTimes) {
            MaxObj.chartArr.push(key);
        } else if (obj[key] > MaxObj.maxTimes) {
            MaxObj.maxTimes = obj[key];
            MaxObj.chartArr = [key];            
        }
    }
    return MaxObj;
}
console.log(GetB(GetA(str1)));