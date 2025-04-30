$(document).ready(function(){
   $('div[@id^="service"]').each(function(){
     $(this).find('div:gt(0)').click(function(){
       var type = $(this).attr('type');
       
       $.get('/lib/account/viewcharge.do?type=' + type, viewCharge);
      });
      
      $(this).find('div:gt(0)').hover(
      function(){
      	$(this).addClass("highlight");
      },
      function(){
      	$(this).removeClass("highlight");
      });
      
   });
});

function viewCharge(data){
   var chargeType = $(data).find('charge_type').text();
   if(chargeType == "card"){
      fillCardView(data);
   }
   else if(chargeType == "online"){
      fillOnlineView(data);
   }
}


function fillCardView(data){
  var ran = Math.random();
  $('#current_service_info').empty();
  var HTML = "<p>" + $(data).find('info').text() + "<p><br/>";
  HTML = HTML + "<p>" + $(data).find('discription').text() + "</p>";
  HTML = HTML + "<form action='/lib/account/docardcharge.do' method='POST' id='cardchargeform'><table><tr><td>帐号</td><td>";
  
  HTML = HTML + $(data).find('user_name').text() + "</td></tr>";
  HTML = HTML + "<tr><td>卡号</td><td>" + "<input name='cardNum' type='text'" + 
			" value='" + $(data).find('card_num').text() + "'/></td></tr>";
  HTML = HTML + "<tr><td>密码(冰果卡上的密码)<br>(注意区分大小写)</td><td>" + "<input name='securePass' type='text'"
  + " value='" + $(data).find('secure_pass').text() + "'/></td></tr>";
  HTML = HTML + "<tr><td>验证码</td><td><IMG src='/lib/jcaptcha?ran=" + ran + "' border='0'	 id='jcaptchImg'/></td></tr>";
  HTML = HTML + "<tr><td colspan='2'><a href='javascript:refreshImg()'>看不清楚上面的图片？点击此处换一张</a></td></tr>";
  HTML = HTML + "<tr><td>请输入验证码</td><td><input type='text' name='captchNum'/></td></tr>";
  HTML = HTML + "<tr><td><input type='hidden' name='type' value='" + $(data).find('type').text() + "'/></td><td><input type='button' id='submitButton' value='下一步'/></td></tr></table></form>";
  
  
  $('#current_service_info').append($(HTML)); 
  
  
  $('#cardchargeform').ajaxForm();
  $('#submitButton').click(function(){
    $('#cardchargeform').ajaxSubmit(function(callback){
      var doResult = $(callback).find('doResult').text();
      
      if(doResult == 'false'){
         fillCardView(callback);
                }
      else if(doResult == 'true'){
         fillSuccessView(callback);
                }      
           });
      });  
      
}


function fillOnlineView(data){
  var order_id = $(data).find('order_id').text();
  var amount =  $(data).find('amount').text();  
  var discription = $(data).find('discription').text();
  
  var merchant_id = $(data).find('merchant_id').text();
  var currency = $(data).find('currency').text();
  var isSupportDES = $(data).find('isSupportDES').text();
  var mac = $(data).find('mac').text();
  var merchant_url = $(data).find('merchant_url').text();
  var pname = $(data).find('pname').text();
  var commodity_info = $(data).find('commodity_info').text();
  var merchant_param = $(data).find('merchant_param').text();
  var pemail = $(data).find('pemail').text();;
  var pid = $(data).find('pid').text();

  $('#current_service_info').empty();
  var HTML = "<p>请确认订单的内容</p>";
  HTML = HTML + "<table><tr><td>订单号</td><td>" + order_id + "</td></tr>";
  HTML = HTML + "<tr><td>订单金额</td><td>" + amount + "</td></tr>";
  HTML = HTML + "<tr><td>支付人</td><td>" + pname + "</td></tr>";
  HTML = HTML + "<tr><td>商品名称</td><td>" + discription + "</td></tr></table>";
  
  HTML = HTML + "<form method='POST' action='https://www.99bill.com/webapp/receiveMerchantInfoAction.do' target='_blank' id='billForm'>";
  HTML = HTML + "<input type='hidden' name='merchant_id' value='" + merchant_id + "'/>";
  HTML = HTML + "<input type='hidden' name='orderid' value='" + order_id + "'/>";
  HTML = HTML + "<input type='hidden' name='amount' value='" + amount + "'/>";
  HTML = HTML + "<input type='hidden' name='currency' value='" + currency + "'/>";
  HTML = HTML + "<input type='hidden' name='isSupportDES' value='" + isSupportDES + "'/>";
  HTML = HTML + "<input type='hidden' name='mac' value='" + mac + "'/>";
  HTML = HTML + "<input type='hidden' name='merchant_url' value='" + merchant_url + "'/>";
  HTML = HTML + "<input type='hidden' name='pname' value='" + pname + "'/>";
  HTML = HTML + "<input type='hidden' name='commodity_info' value='" + commodity_info + "'/>";
  HTML = HTML + "<input type='hidden' name='merchant_param' value='" + merchant_param + "'/>";
  HTML = HTML + "<input type='hidden' name='pemail' value='" + pemail + "'/>";
  HTML = HTML + "<input type='hidden' name='pid' value='" + pid + "'/>";
  HTML = HTML + "<input type='image' id='payby99bill' name='payby99bill' src='/static/ui/v1/images/99bill/button/99bill_buy_b.gif' value='快钱支付'/>";
  HTML = HTML + "</form>";
  
  $('#current_service_info').append($(HTML));
  $('#billForm').ajaxForm();
  $('#payby99bill').click(function(){
     $('#billForm').ajaxSubmit();
      });  
}

function refreshImg(){
	var ran = Math.random();
	document.getElementById("jcaptchImg").src = "/lib/jcaptcha?ran="+ran;
}

function fillSuccessView(data){
  $('#current_service_info').empty();
  var HTML = "";
  HTML = HTML + "<p>" + $(data).find('info').text() + "</p>";
  HTML = HTML + "<a href='/lib/account/" + $(data).find('service').text() + "/index.do' target='_self'>返回</a>";
  $('#current_service_info').append($(HTML));
}

function addBuyedItem( itemname ) {
	var $itemTbody = $('#'+itemname, $('#table_target'));
	$itemTbody.show();
	
	var id = $itemTbody.attr("id");
	var service = id;
	if( service == 'zju3'){
		service = 'zj3';
	}
	
	var url = "/st/"+service+".html";
	
		if(itemname != "none"){
		$itemTbody.click( function(){
		window.open( url,"_self");
	});
	}
	
	$itemTbody.hover(
		function(){
			$(this).addClass("buyed_itemhightlight");
		},
		function(){
			$(this).removeClass("buyed_itemhightlight");
		}
	);
}
