$(document).ready(function(){
   
  $.get('/e/game/xiaoyu/gettoplist.xml',function(data){
     var HTML = "<div class='top_list'>排行： </div>";
     HTML += "<table bgcolor='#EEEEEE' cellpadding=1 cellspacing=1 width='98%'>"; 
     HTML += "<tr bgcolor='#DDDDDD'><td>用户名</td><td>分数</td></tr>";
   
     $(data).find('history').each(function(){
       HTML = HTML + "<tr bgcolor='#FFFFFF'><td>" + $(this).find('user_name').text() + "</td><td>"
       + $(this).find('score').text() + "</td></tr>";
             });
             
     HTML += "</table>";
    
     $('#xiaoyu_list').prepend($(HTML));
      });
});


$(document).ready(function(){
   
  $.get('/e/firsttest/gettoplist.xml',function(data){
     var HTML = "<div class='top_list'>排行： </div>";
     HTML += "<table bgcolor='#EEEEEE' cellpadding=1 cellspacing=1 width='98%'>"; 
     HTML += "<tr bgcolor='#DDDDDD'><td>用户名</td><td>词汇量</td></tr>";
   
     $(data).find('history').each(function(){
       var username = $(this).find('user_name').text();
      if( username.indexOf('@') > 0 ) {
        username = username.substring(0,username.indexOf('@'));
                }
      
      if( username.length > 15 ) {
      		username = username.substring(0,14);
      	         }
     
       HTML = HTML + "<tr bgcolor='#FFFFFF'><td>" + username + "</td><td>"
       + $(this).find('voc_count').text() + "</td></tr>";
             });
             
     HTML += "</table>";
    
     $('#firsttest_list').prepend($(HTML));
      });
});