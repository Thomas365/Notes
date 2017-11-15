/**
 * 一、使用原生js 来实现ajax 的功能
 * 需求：
 * 1.创建请求
 * 2.发送数据
 * 3.请求错误回调
 * 4.请求成功回调
 * 5.请求超时回调
 * 
 * ajax({
 *    url:'',
 *    type:'',
 *    data:{},
 *    dataType:'',
 *    timeout:'',
 *    success:function(response,xml){ //... },
 *    fail:function(status){ //.. }
 * })
 */

 function ajax(options){
    var options = options||{};
    options.type = (options.type||'GET').toUpperCase();
    options.dataType = options.dataType||'json';
    var params = formatParams(options.data);

    // 创建 xhr 
    if(window.XMLHttpRequest){
        var xhr = new XMLHttpRequest();
    }else{
        var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    //监听请求
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            try {
                var status = xhr.status;
                if(status >=200 && status <300){
                    options.success && options.success(xhr.responseText,xhr.responseXML);
                }else{
                    options.fail && options.fail(status);
                }
            } catch (error) {
                //错误处理
            }
        }
    }

    //发送请求
    if(options.type == "GET"){
        xhr.open("GET",options.url+"?"+params,true);
        xhr.send(null);
    }else if(options.type == "POST"){
        xhr.open("POST",options.url,true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencodeed");
        xhr.timeout = options.timeout||30000;
        xhr.ontimeout = function(){
            alert("请求超时")
        }
        xhr.send(params);
    }

    /** 
     * 格式化参数
     * param 将要转为URL参数字符串的对象 
     * key URL参数字符串的前缀 
     * encode true/false 是否进行URL编码,默认为true 
     *  
     * return URL参数字符串 
     */  
    function formatParams(param, key, encode) {  
        if(param==null) return '';  
        var paramStr = '';  
        var t = typeof (param);  
        if (t == 'string' || t == 'number' || t == 'boolean') {  
            paramStr += '&' + key + '=' + ((encode==null||encode) ? encodeURIComponent(param) : param);  
        } else {  
            for (var i in param) {  
                var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);  
                paramStr += formatParams(param[i], k, encode);  
            }  
        }         
        return paramStr;  
    };  
 }


 /**
  * 二、使用原生 js 实现 jsonp
  * 需求：
  * 1.创建 script 标签，利用 src 属性进行跨域请求数据
  * 2.发送请求数据
  * 3.成功回调函数
  * 4.失败回调函数
  * 5.超时回调函数
  * 由于是利用 src 送请求，所以请求方式只能是get 方式，所以不声明
    jsonp({
        url:'',
        data:{},
        time:'',        
        success:function(data){},
        fail:function(data){},
        timeout:function(){}
    })
  */

  function jsonp(options){
      var options = options||{};
      if(!options.url||!options.success){
          throw new Error("参数不合法");
      }

      //创建script 标签，并加入到页面中
      //先随机生成一个jsonp的回调函数名称
      var callbackName = ('jsonp_'+Math.random()).replace(".","");
      var mHead = document.getElementsByTagName('head')[0];
      //把回调函数名称，放到data中一起发送到服务器
      options.data.callback = callbackName;
      var mScript = document.createElement('script');
      mHead.appendChild(mScript);

      //创建 jsonp 回调函数,把回调函数注册到全局作用域中
      window[callbackName] = function(data){
        mHead.removeChild(mScript);
        clearTimeout(mScript.timer);
        window[callbackName]=null;
        mScript.onerror=null;
        options.success && options.success(data);
      };

      //监听script 错误，添加错误回调函数
      mScript.onerror = function(error){
        mHead.removeChild(mScript);
        clearTimeout(mScript.timer);
        window[callbackName]=null;
        mScript.onerror=null;
        options.fail && options.fail({message:"请求错误"});
      };

      //发送请求
      var params = formatParams(options.data);
      mScript.src = options.url+"?"+params;

      //超时处理，超时后，删除全局注册的回调函数，移除添加的script 标签，并执行超时回调函数
      if(options.timeout){
          mScript.timer = setTimeout(function(){
            mHead.removeChild(mScript);
            window[callbackName] = null;
            mScript.onerror=null;            
            options.timeout && options.timeout({message:"请求超时"})
          },options.time||30000);
      }


      /** 
      * 格式化参数
      * param 将要转为URL参数字符串的对象 
      * key URL参数字符串的前缀 
      * encode true/false 是否进行URL编码,默认为true 
      *  
      * return URL参数字符串 
      */  
     function formatParams(param, key, encode) {  
         if(param==null) return '';  
         var paramStr = '';  
         var t = typeof (param);  
         if (t == 'string' || t == 'number' || t == 'boolean') {  
             paramStr += '&' + key + '=' + ((encode==null||encode) ? encodeURIComponent(param) : param);  
         } else {  
             for (var i in param) {  
                 var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);  
                 paramStr += formatParams(param[i], k, encode);  
             }  
         }         
         return paramStr;  
     }
  }

 