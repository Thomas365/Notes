/**
 * 排序算法有以下几种：
 * 1、冒泡排序：比较相邻的元素，如果左边比右边大，则交换位置，针对所有的元素重复以上步骤，出最后一个。
 * 2、选择排序：每一次从待排序的数据中选出最小（或最大）的 元素，放在序列的起始位置，直到全部待排序的数据排完。
 * 3、插入排序，
 * 4、归并排序，
 * 5、快速排序，
 * 6、希尔排序
 * 7、堆排序
 * 
 * 稳定排序：假设在待排序的文件中，存在两个或两个以上的记录具有相同的关键字，在用某种排序后，若这些相同的关键字的元素的相对次序仍然不变，则这种排序方法为稳定排序。
 * 就地排序：若排序算法所需逇辅助空间并不依赖于问题的规模n，即辅助空间为O(1)，则称为就地排序。
 * 
 * 不稳定的排序算法：快速排序，希尔排序，堆排序，直接选择排序
 * 稳定的排序算法：基数排序、冒泡排序，直接插入排序，折半插入排序，归并排序
 */

//随机生成数组数据。
function MockData(num){    
    var localarr = [],
        num = num||10;
    for(var i=0;i<num;i++){
        localarr.push(Math.round(Math.random()*1000));
    }
    return localarr;
}

//冒泡排序
function MaoPao(arrData){    
    var startTime = new Date();
    console.log("冒泡排序：")
    console.log("原始数据：",arrData)
    var len = arrData.length;
    for(var i=0;i<len;i++){
        for(var j=0;j<len-1;j++){
            if(arrData[j]>arrData[j+1]){
                var temp = arrData[j];
                arrData[j] = arrData[j+1];
                arrData[j+1] = temp;
            }
        }
    }
    console.log("排序数据：",arrData);
    var endTime = new Date();

    console.log("耗时：",endTime-startTime)
}
// MaoPao(MockData())

//改进后的冒泡
function NewMaoPao(arrData){    
    var startTime = new Date();
    console.log("改进后冒泡排序：")
    console.log("原始数据：",arrData)
    var len = arrData.length;
    for(var i=0;i<len;i++){
        for(var j=0;j<len-1-i;j++){
            if(arrData[j]>arrData[j+1]){
                var temp = arrData[j];
                arrData[j] = arrData[j+1];
                arrData[j+1] = temp;
            }
        }
    }
    console.log("排序数据：",arrData);
    var endTime = new Date();

    console.log("耗时：",endTime-startTime)
}
NewMaoPao(MockData(10))

//选择排序
function XuanZe(arrData){
    var startTime = new Date();
    console.log("选择排序：")
    console.log("原始数据：",arrData);

    var len = arrData.length,
        indexMin;
    for(var i=0;i<len-1;i++){
        indexMin = i;
        for(var j=i;j<len;j++){
            if(arrData[indexMin]>arrData[j]){
                indexMin=j;
            }
        }
        if(i !== indexMin){
            var temp = arrData[i];
            arrData[i] = arrData[indexMin];
            arrData[indexMin] = temp;
        }
    }

    console.log("排序数据：",arrData);
    var endTime = new Date();
    console.log("耗时：",endTime-startTime)
}
// XuanZe(MockData(100))

//插入排序
function ChaRu(arrData){
    var startTime = new Date();
    console.log("插入排序：")
    console.log("原始数据：",arrData);

    var len = arrData.length,
        j,
        temp;
    
    for(var i=1;i<len;i++){
        j=i;
        temp =arrData[i];
        while(j>0&&arrData[j-1]>temp){
            arrData[j]= arrData[j-1];
            j--;
        }
        arrData[j] = temp;
    }

    console.log("排序数据：",arrData);
    var endTime = new Date();
    console.log("耗时：",endTime-startTime)
}
// ChaRu(MockData(100))