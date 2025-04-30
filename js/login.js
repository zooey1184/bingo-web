
	function login(){
	 var href = window.location.href;
	 var returnURL = document.getElementById("returnURL");
	 returnURL.value = href;
		document.forms['loginForm'].submit();
	}
	
	function _initLogin(){
	
	var url = "/lib/common/initlogin.html";
	
	var ran = Math.random();
	
	try{
		 new Ajax.Request(url + "?ran=" + ran,	
		    {method: 'get', onSuccess: fillLoginDiv, 
		     onFailure: initfail});		
	       }
	  catch(err){
	    var loginDiv = document.getElementById("account");
	    
		  loginDiv.innerHTML = "系统维护中，不能取得资源......";
	     }	      	
	}
	
	function fillLoginDiv(originalRequest){
	   var loginDiv = document.getElementById("account");
	   
	   loginDiv.innerHTML = originalRequest.responseText;
	}
	
	function initfail(){
	   var loginDiv = document.getElementById("account");
	   loginDiv.innerText = "系统维护中......";
	}
	
	function logout(){
	 var href = window.location.href;	 
	 window.open("/lib/common/logout.html?returnURL=" + href , "_self");
	}
	
	_initLogin();
