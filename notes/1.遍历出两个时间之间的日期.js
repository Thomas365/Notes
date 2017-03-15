        // 遍历出两个给定日期之间的所有日期（可以按年、月、日分类）
		function getMyDate(startDate,endDate,type){
		  
		  var startTime = new Date(startDate);
		  var endTime = new Date(endDate);
		  var dates=[];		  
		  
		  switch (type){
		    case "year":
		      while((endTime.getTime()-startTime.getTime())>=0){
		        var year = startTime.getFullYear();          
		        dates.push(year);		        
		        startTime.setYear(Number(year)+1);		        
		      }        
		      break;
		    case "month":
		      while((endTime.getTime()-startTime.getTime())>=0){
		        var year = startTime.getFullYear();
		        var month = startTime.getMonth().toString().length==1?"0"+startTime.getMonth().toString():startTime.getMonth();
		        	month = Number(month)+1;
		        dates.push(year+"-"+month);
		        startTime.setMonth(month);
		      }
		      break;
		    case "day":
		      while((endTime.getTime()-startTime.getTime())>=0){
		        var year = startTime.getFullYear();
		        var month = startTime.getMonth().toString().length==1?"0"+startTime.getMonth().toString():startTime.getMonth();
		        month = Number(month)+1;
		        if(month<10) month='0'+month;
		        var day = startTime.getDate().toString().length==1?"0"+startTime.getDate():startTime.getDate();
		        dates.push(year+"-"+month+"-"+day);
		        startTime.setDate(startTime.getDate()+1);
		      }
		      break;
		  }	  
		  
		  return dates;		  
		};
		var date1=getMyDate("2016-12-01","2017-01-01","year");console.log("输出2016-12-01~2017-01-01之间年份：",date1);
        var date2=getMyDate("2016-12-01","2017-01-01","month");console.log("输出2016-12-01~2017-01-01之间月份：",date2);
        var date3=getMyDate("2016-12-01","2017-01-01","day");console.log("输出2016-12-01~2017-01-01之间日期：",date3);
		
        
        
		