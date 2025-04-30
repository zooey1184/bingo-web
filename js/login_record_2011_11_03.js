	
function initIp(){
	  var ran = Math.random();
	  var current = document.location.href;
	  
	  $.get("/lib/common/getuserip.xml?ran=" + ran, function(data){
	     });
}
	
$(document).ready(function(){
		   initIp();				
});