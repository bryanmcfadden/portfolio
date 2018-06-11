/**
 * 
 */
var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
        var d_names = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
        
        function getCurrentTime(returnedDateString)
        {
            returnedDateString = returnedDateString.substring(0, 19)
            returnedDateString =returnedDateString.replace('T', ' ');
            returnedDateString =returnedDateString.replace(/-/g, '/');
            var returndate = new Date(returnedDateString);
            var currentdate = new Date();
            //alert(currentdate.getTime() );
            var timeDiff = Math.abs(currentdate.getTime() - returndate.getTime());
            var diffDays = Math.floor(timeDiff / (1000 * 3600 * 24)); 
            
           // alert(diffDays );
            
            if(diffDays==0)
            	{
            	 return   getTimeValue(returndate,currentdate);
            	
            	} else
            	{
                	 
                    return diffDays +" days ago ";
                }
                
              
                 
            
        }
          
        function getTimeValue(returndate,currentdate)
        {
            var minutes = returndate.getMinutes();
            //alert(currentdate.getHours()+"::"+returndate.getHours());
            if((currentdate.getHours()-returndate.getHours())<=1 && (currentdate.getMinutes()-returndate.getMinutes())<= 59)
            {
               return "few mins ago";
            }
            
            
            else  
            {
                return currentdate.getHours()-returndate.getHours()+  " hours ago";
            }
            
        }