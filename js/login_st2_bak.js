
var needLogin = true;

function login(){
		var href = window.location.href;
		var returnURL = document.getElementById("returnURL");
		returnURL.value = href;
		document.getElementById("loginForm").submit.click();	
	}

function loginasdemo(){
		var href = window.location.href;
		/*
		var returnURL = document.getElementById("returnURL");
		document.getElementById("username").value ='bingodemo';
		document.getElementById("password").value ='bingodemo';
		returnURL.value = href;		
		document.getElementById("loginForm").submit.click();
		*/
		$.post("/lib/common/login.html", 
		{ Action: "post", username: "bingodemo" , password: "bingodemo"}, 
		function (data, textStatus){
		window.location.href = href;
		});
	}
	
	function _initLogin(){
		var ran = Math.random();
		var url = "/lib/common/initlogingaokao.html?ran="+ran;
		
		$.get(url,function(data){		   
		    $('#div_account').append($(data));
		});
	}
	
	function fillLoginDiv(originalRequest){
	   var loginDiv = $("#account");
	   loginDiv.innerHTML = originalRequest.responseText;
	}
	
	function initfail(){
	   var loginDiv = $("#account");
	   loginDiv.innerText = "系统维护中......";
	}
	
	function logout(){
	 var href = window.location.href;	 
	 window.open("/lib/common/logout.html?returnURL=" + href , "_self");
	}
	

	
	function initIp(){
	  var ran = Math.random();
	  var current = document.location.href;
	  var host = getHostFromURL(current);


	 if( host =='www.bingoenglish.net.ez.zust.edu.cn' ) {
		  goURL( "http://www."+"bingoenglish.net/st/try/zust.html");
		  return;
	  }
	  	  
	  $.get("/lib/common/getuserip.xml?host=" + host + "&ran=" + ran, function(data){
		 var serverURL = $(data).find('server_url').text();
		var school = $(data).find('school').text();
	    var html = "<div id='current_location'><div style='float:left'>您来自: " +  $(data).find('school').text();
	    var ip_valid = $(data).find('ip_valid').text();
	    var online = $(data).find('online').text();
	    var stop = $(data).find('stop').text();
	    var user_name =  $(data).find('user_name').text();
	    
	   // if( school == "www.english1490.com" || school == "浙江工商大学"){
	    //	try{
	    //		$("#writing_link").show();
	    //	}catch(err){
	    //	alert(err);
	    //	}
	    //}
	    
	    if(( ip_valid == 'true') && ( online == 'false')){
	    		html += " &nbsp;&nbsp;&nbsp;&nbsp;<input type='button' value='公共帐号进入'  name='demoentry' onclick='loginasdemo()'/>";
	           }
	    if( (online == 'true') && (user_name =='bingodemo') ) {
	    		if( stop == '0' ) {
	            	html += "&nbsp;<img src='/st/images/okschool.jpg'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#333333'>您现在以公共帐号登录，如需保存个人学习记录，您可以<a href='javascript:logout()'>登出</a>并注册个人帐号</font>";
	            }else{
	            	html += "&nbsp;<img src='/st/images/noschool.jpg'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='#333333'>您现在以公共帐号登录，如需保存个人学习记录，您可以<a href='javascript:logout()'>登出</a>并注册个人帐号</font>";
	            }
	       }
	   
	    html += "</div></div>";
	    $('#div_school_info').append($(html));	    
	    determineServer( serverURL );	
	    _initLogin();	    	    
	     });	  
	}
	
	function determineServer( serverURL ){
		var current = document.location.href;
		
		var host = getHostFromURL(current);
		var obj = getObjectFromURL(current);
		
		if( serverURL!="" && serverURL != host ){
			document.location.href = "http://" + serverURL + obj;
		}
	}
	
	function getHostFromURL( url ) {
		var host = url.replace("http://","");
		var slash_end = host.indexOf("/");
		if( slash_end != -1 ){
			host = host.substring( 0, slash_end );
		}
		return host;
	}
	
	function getObjectFromURL( url ){
		var host = url.replace("http://","");
		var obj = "";
		var slash_end = host.indexOf("/");
		
		if( slash_end != -1 ){
			obj = host.substring(slash_end );
		}
		return obj;
	}
	

$(document).ready(function(){
		if(needLogin == true) {
		   initIp();				
		}			
});

function init_event(){
	$(".content_panel_menu_item").hover(
		function() {
			$(this).addClass("content_panel_menu_item_over");
		}, function() {
			$(this).removeClass("content_panel_menu_item_over");
		}); 

}

function goURL( url ){
	window.open( url ,"_self");
}

$(document).ready(function(){
	init_event();
});
