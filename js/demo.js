/*
DEMO SHOW
*/
$(document).ready(function(){
		_init_menu();
});

function _init_menu(){
	
	var demoHTML = "<div class='demoinfo'>";
	demoHTML += "亲爱的冰果用户，您正在使用的冰果产品的试用版本，不能保存您的学习记录";
	demoHTML += "<div id='close'><a href='#null' onclick='closeWindow();return false;'>关闭</a></div>";
	demoHTML +="</div>";
	$('body').prepend($(demoHTML));
}

function closeWindow(){		
	window.opener=null;
	window.close();
}