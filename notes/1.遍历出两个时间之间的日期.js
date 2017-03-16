        // 遍历出两个给定日期之间的所有日期（可以按年、月、日分类）
		function getMyDate(startDate,endDate,type){
		  
		  var startTime = new Date(startDate),
		  		endTime = new Date(endDate);
			if(startTime.getTime()>endTime.getTime()){
				console.log("开始时间不能大于结束时间！");
				return false;
			}		
			
		  var dates=[];		  
		  
		  switch (type){
		    case "year":
					startTime=new Date(startTime.getFullYear().toString());
					endTime=new Date(endTime.getFullYear().toString());
		      while(endTime.getTime()-startTime.getTime()>=0){						
		        var year = startTime.getFullYear();          
		        dates.push(year);		        
		        startTime.setYear(year+1);		        
		      }        
		      break;
		    case "month":
		      while((endTime.getTime()-startTime.getTime())>=0){
		        var year = startTime.getFullYear(),
						    month = startTime.getMonth()+1;		        
		        if(month<10) month="0"+month;
		        dates.push(year+"-"+month);
		        startTime.setMonth(month);
		      }
		      break;
		    case "day":
		      while((endTime.getTime()-startTime.getTime())>=0){
		        var year = startTime.getFullYear(),
		            month = startTime.getMonth()+1,
								day = startTime.getDate().toString().length==1?"0"+startTime.getDate():startTime.getDate();		        
		        if(month<10) month='0'+month;		        
		        dates.push(year+"-"+month+"-"+day);
		        startTime.setDate(startTime.getDate()+1);
		      }
		      break;
		  }	  
		  
		  return dates;		  
		};
		var date1=getMyDate("2016-12-01","2017-02-01","year");console.log("输出2016-12-01~2017-02-01之间年份：",date1);
        var date2=getMyDate("2016-12-01","2017-01-01","month");console.log("输出2016-12-01~2017-01-01之间月份：",date2);
        var date3=getMyDate("2016-12-01","2017-01-01","day");console.log("输出2016-12-01~2017-01-01之间日期：",date3);
		
        
        
		