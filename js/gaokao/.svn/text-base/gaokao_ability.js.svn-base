var global_topic_id = 2;
var global_ability_id = "listening";

$(document).ready( function() {
  
	initialize_topicTable();
	locate_topic();
	init_login();
  init_buy();
	
});

function locate_topic(){

	try{
		var local_url = document.location.href;
		var index_id = local_url.indexOf('topic');
		if( index_id > 0 ) {
			var c =  local_url.substring(index_id);
			var topic = c.slice(6);
			global_topic_id = topic;
		}
	}catch(err){
		global_topic_id = 1;
	}
}


function initialize_topicTable(){

	$.get('/st/xml/topics.xml',function(data){
	
		$('#products_category').empty();

		  var tableHTML = "<div class='topic_header'></div>"
		  tableHTML += "	<div class='topictitle'>冰果英语推出 以主题为中心的学习模式</div>";
			tableHTML +="<table width='100%' cellpadding=1 cellspacing=0 id='table_topics'>";
			
		$(data).find('item').each( function(){
		
			var $item = $(this);
		
			var html = "<tbody id='tbody_topic_" + $item.find('id').text() +"' title='" + $item.find('cn_long_name').text()+ "'>" + "<tr><td>";
			html += "<img src='" + $item.find('pic').text() + "' />";
			html +="</td><td>"
			html += $item.find('en_name').text() + "<br/>";
			html += $item.find('ch_long_name').text();
			html += "<hr class='dashedhr' /></td></tr></tbody>";
			
			tableHTML += html;

		});
		
		tableHTML += "</table>";
		
		$("#products_category").append( $(tableHTML));		
		
		loaddefaultcontent(global_topic_id, global_ability_id);
		
		var addEventToTable = function( $table ){
			$('tbody tr', $table).hover(
		      function () {
		        $(this).addClass("highlight");
		      }, 
		      function () {
		       $(this).removeClass("highlight");
		      }
		    );
		    
		    $('tbody', $table).click( function() {
		    	var topic_id =  $(this).attr("id").slice(12);		    	
		    	changetopic( topic_id);
		    });
		    
		    $('tbody tr',$table).click(function(){
		      $('tbody tr').each(function(){
		        $(this).removeClass('clickhighlight');
		                });
		    $(this).addClass('clickhighlight');
		    });
		    
			$('tbody tr:odd', $table ).addClass("odd");
			$('tbody tr:even', $table ).addClass("even");
		};
		
		
		$('#table_topics').each( function(){
			var $table = $(this);
			addEventToTable($table);			
		});
	});
	
	
}

function loaddefaultcontent( topic_id, ability ){
 
		global_topic_id = topic_id;
		global_ability_id = ability;
		var content_empty = true;	//内容是否为空
		var global_online = false;//是否登录
		var global_valid = false; //是否购买服务
		var ran = Math.random();
		
		$.get('/e/mybingo/getNewAbilityMaterialsList.xml?testService=gaokao&ability='+ability+'&topic='+topic_id + '&bingoBand=2&ran=' + ran, function(data){
		$('#materials').empty();
		$('#materials').unblock();
		
		global_valid = $(data).find('valid').text();
	 global_online = $(data).find('online').text();
		
		var tableHTML = "<div>";
		tableHTML += "<div id='vocMenu'></div>";
		tableHTML += "<div id='innerMenu'>";
		tableHTML += "<div class='currentMenu' id='listening_tab'>Listening</div>";
		tableHTML += "<div class='normalMenu' id='speaking_tab'>Speaking</div>";
		tableHTML += "<div class='normalMenu' id='reading_tab'>Reading</div>";
		tableHTML += "<div class='normalMenu' id='writing_tab'>Writing</div>";
		tableHTML += "<div class='normalMenu' id='translation_tab'>Translation</div>";
		tableHTML += "</div>";		
		
		tableHTML += "<div id='ability_div'>";
		
		$(data).find('todo').each( function(){
			
			var $todo = $(this);
			var name = $todo.find('name').text();
			var $items = $todo.find('item');
			var item_length = $items.length;
			
			if( item_length > 0 ) {
				content_empty = false;
				var divHTML = "<div class='detailAbility'>";
				
				divHTML += "<div class='abilityName'>" + name + "</div>";
				
				$items.each(function(index_id){
					var $item = $(this);
					var serial_number = $item.find('serial_number').text();
					var introduction  =  $item.find('introduction').text();
					var url = $item.find('url').text();
					
					divHTML +="<div class='todo_item'>";
					//divHTML += "<div class='serialNumber'>" + serial_number + "</div>";
					if( ability == 'listening' ) {
						divHTML += "<div class='ability_img'><img src='/st/images/gaokao_1/ability/headphones.jpg'/></div>";
					}else if( ability =='reading' ) {
						divHTML += "<div class='ability_img'><img src='/st/images/gaokao_1/ability/book.jpg'/></div>";
					}else if( ability =='writing' ) {
						divHTML += "<div class='ability_img'><img src='/st/images/gaokao_1/ability/writing.jpg'/></div>";
					}else if( ability =='speaking' ) {
						divHTML += "<div class='ability_img'><img src='/st/images/gaokao_1/ability/speaking.jpg'/></div>";
					}else if( ability =='translation' ) {
						divHTML += "<div class='ability_img'><img src='/st/images/gaokao_1/ability/translation.jpg'/></div>";
					}
					divHTML += "<div class='ability_introduction'>" + introduction + "</div>";
					
					if(global_online == 'true'){
					divHTML += "<div class='link_out'><a href='" + url + "&testService=gaokao" +"' target='_blank'><img src='/st/images/gaokao_1/tools/begin.gif' border=0/></a></div>";
					}
					else if(global_online == 'false'){
					divHTML += "<div class='link_out'><a href='#null' id='a_not_login_" + index_id + "'><img src='/st/images/gaokao_1/tools/begin.gif' border=0/></a></div>";
					}

					
					divHTML += "<div class='cleared'></div>";
					divHTML += "</div>";
				});
				
				divHTML += "</div>";
				
				tableHTML += divHTML;
			}
		});

		if( content_empty == true ) {
				var divHTML = "<div class='detailAbility'>";
	
				divHTML += "<div class='noitems'>" + "<img src='/st/images/gaokao_1/ability/noitems.jpg'/>" + "</div>";
				
				divHTML += "</div>";
				
				tableHTML += divHTML;
		} 			
	
	
		$(data).find('history').each( function(){
		
			var $history = $(this);
			var name = $history.find('name').text();
			var $items = $history.find('item');
			var item_length = $items.length;
			
			if( item_length > 0 ) {
				var divHTML = "<div class='history_item'>History:<br />";
				
				divHTML += "<div class='abilityName'>" + name + "</div>";
				
				$items.each(function(){
					var $item = $(this);
					var serial_number = $item.find('serial_number').text();
					var introduction = $item.find('introduction').text();
					var url = $item.find('url').text();
					var redo_url = $item.find('redo_url').text();
					var score = $item.find('score').text();
					/*
					divHTML +="<div class='history_item'>";
					divHTML += "<div class='introduction'>" + introduction + "</div>";
					divHTML += "<div class='link_out'><a href='" + url +"' target='_blank'>Enter</a></div>";
					divHTML += "<div class='link_out'><a href='" + redo_url + "' target='_blank'>Review</a></div>";
					divHTML += "</div>";
					*/
					divHTML +="<div class='todo_item'>";
					//divHTML += "<div class='serialNumber'>" + serial_number + "</div>";
					if( ability == 'listening' ) {
						divHTML += "<div class='ability_img'><img src='/st/images/gaokao_1/ability/headphones.jpg'/></div>";
					}else if( ability =='reading' ) {
						divHTML += "<div class='ability_img'><img src='/st/images/gaokao_1/ability/book.jpg'/></div>";
					}else if( ability =='writing' ) {
						divHTML += "<div class='ability_img'><img src='/st/images/gaokao_1/ability/writing.jpg'/></div>";
					}else if( ability =='speaking' ) {
						divHTML += "<div class='ability_img'><img src='/st/images/gaokao_1/ability/speaking.jpg'/></div>";
					}else if( ability =='translation' ) {
						divHTML += "<div class='ability_img'><img src='/st/images/gaokao_1/ability/translation.jpg'/></div>";
					}
					divHTML += "<div class='ability_introduction'>" + introduction + "</div>";
					divHTML += "<div class='link_out'>"
					divHTML += "得分：" + score +"<br />";
					divHTML +="<a href='" + url +"' target='_blank'><img src='/st/images/gaokao_1/tools/redo.gif' border=0/></a><br/>";
					divHTML += "<a href='" + redo_url +"' target='_blank'><img src='/st/images/gaokao_1/tools/review.gif' border=0/></a></div>";
					divHTML += "<div class='cleared'></div>";
					divHTML += "</div>";
				});
				
				divHTML += "</div>";
				
				tableHTML += divHTML;
			}else{
				
			}
			
		});
		
				
		tableHTML += "</div></div>";
		
		$("#materials").append( $(tableHTML));
		
		//取得主题

		
		var $topicTbody = $('#tbody_topic_'+ topic_id);
		
			
				
		$(document).ready(function(){
		   $.get('/e/vocbook/getvoccount.xml?topic=' + topic_id + '&bingoBand=2', function(data){
		      var vocCount = $(data).find('voc_count').text();
		      
		      var topicHTML ="<table width='90%'><tr>";
			     var tb_1_html = "<td>" + $('td:eq(0)',$topicTbody).html() +"</td>";
			     var tb_2_html = "<td>" +$('td:eq(1)',$topicTbody).html()+"</td>";	
		      var tb_3_html = "<td><div id='div_vocbooklink'>" + vocCount +"</div></td>";
		      
		      topicHTML += tb_1_html + tb_2_html + tb_3_html;
		      topicHTML +="</table>";
		       			
		      $('#vocMenu').prepend($(topicHTML));
		      
		      if(global_online == 'true'){
		        $('#vocMenu').find('td:eq(2)').click(function(){
		          window.open("/e/vocbook/index.do?topic="+topic_id+"&bingoBand=2&org=gaokao","_self");
		                     });
		                }
		      else if(global_online == 'false'){
		        $('#vocMenu').find('td:eq(2)').click(function(){
		           block_with_login();
		                     });
		                }
		      
		        });
		});
		
		
		
		///regist changeAbility.
		
		 $('#materials').find('#listening_tab').click(function(){
		   changeability('listening');
  		   
		});
		
		$('#materials').find('#speaking_tab').click(function(){
		   changeability('speaking');		  

		});
		
		$('#materials').find('#reading_tab').click(function(){
		   changeability('reading');		   
		    
		});
		
		$('#materials').find('#writing_tab').click(function(){
		   changeability('writing');  
		    		   
		});
		
		$('#materials').find('#translation_tab').click(function(){
		   changeability('translation');	  
		});
		
		
	  $('div',$('#innerMenu')).each(function(){
	    $(this).removeClass('currentMenu').addClass('normalMenu');
	     });
	  
	  $('#' + ability + '_tab').removeClass().addClass('currentMenu');
	  $('tr',$('#tbody_topic_' + topic_id)).addClass('clickhighlight');
	  
	  $('a[@id^="a_not_login_"]').each( function( index ){
			var $alink = $(this);
			$alink.click( function(){
					block_with_login();
				}
			);
		});
		
		$('a[@id^="a_not_buy_"]').each( function( index ){
			var $alink = $(this);
			
			$alink.click( function(){
					block_with_no_buy();
				}
			);
		});
	  
	});
}

function changeability(ability){ 
	$('#materials').block({ message: 'waiting...' }); 
	loaddefaultcontent(global_topic_id, ability );

}

function changetopic( topic_id ){
	$('#materials').block({ message: 'waiting...' });
	loaddefaultcontent(topic_id, global_ability_id );	
}

function init_login() {

  var href = window.location.href;

	var strHTML = "<div id='div_no_login' style='display:none;width:400px;bgcolor:#b7d8ed;'>";
	strHTML += "<div class='alertmsg'>";
	
	strHTML += "<form action='/e/common/login.html'  method='POST'>";
	strHTML += "<table bgcolor='#b7d8ed' width='350'><tr>";
	strHTML += "<td colspan='2' align='left'> <span class='account_title'>请先登录</span> <br/><br/></td></tr>";
	strHTML += "<tr><td valign='top'><img src='/st/images/ut.png'/></td><td>";
	strHTML += "<table><tr><td>帐号：</td><td align='left'><input name='username' type='text' size='20'/></td></tr>";
	strHTML += "<tr><td>密码：</td><td align='left'><input name='password' type='password' size='21'/></td></tr>";
	strHTML += "<tr><td colspan='2' align='left'><input type='submit' value='登录'/>";
	strHTML += "<input type='hidden' name='returnURL' value='" + href + "'/></td></tr></table></td></tr>";
	strHTML += "<tr><td colspan='2' align='left'><hr class='dashedhr'/><table width='200'>";
	strHTML += "<tr><td width='50'><img src='/st/images/y_index_arrow.png' /></td><td>忘记密码？</td>";
	strHTML += "<td><a href='/e/common/findbackpwd.html'>取回密码</a></td></tr><tr>";
	strHTML += "<td><img src='/st/images/y_index_arrow.png' /></td><td>没有帐号？</td>";
	strHTML += "<td><a href='/e/common/registuser.html'>注册</a></td></tr></table></td></tr></table></form>";
	
	
	strHTML += "</div>";
	strHTML += "<div id='close' style='text-align:center;cursor:hand;'><img src='/st/images/close.gif'/></div>";
	strHTML += "</div>";
	$(strHTML).prependTo('body');	
	$('#div_no_login').find('#close').click(function(){
	   $('#materials').unblock();
	});
}

function init_buy() {
	var strHTML = "<div id='div_no_buy' style='display:none;width:400px;'>";
	strHTML +="<div class='alertmsg'><table><tr><td><img src='/st/images/gaokao_1/account/forbid.png' border='0'></td><td align='right'>您还没有购买该产品或者您的服务已经到期，请先购买<br/><hr class='dashedhr'/><a href='/e/account/gaokao/index.do' target='_self'><img src='/st/images/buy.gif' border='0'/></a></td></tr></table><div>";
	strHTML += "<div id='close' style='text-align:center'><img src='/st/images/close.gif'/></div>";
	strHTML +="</div>"
	$(strHTML).prependTo('body');
	$('#div_no_buy').find('#close').click(function(){
	   $('#materials').unblock();
	});
}

function block_with_login(){

	$('#materials').block(
		{ 
			message: $('#div_no_login'),
			overlayCSS:  {  
        		backgroundColor:'#000',  
        		opacity:        '0.8'  
    		},
    	css:{
    			padding:        0, 
		        margin:         0, 
		        width:          '30%',		         
		        color:          '#000',  
		        border:         '3px solid #aaa', 
		        cursor:         'auto', 
		        backgroundColor:'#b7d8ed',    
		        position:       'fixed',
		        left:           '50%'
    		}
    	}
	);
	
}

function block_with_no_buy(){
	$('#materials').block(
		{ 
			message: $('#div_no_buy'),
			overlayCSS:  {  
        		backgroundColor:'#000',  
        		opacity:        '0.8'  
    		},
    		css:{
    			padding:        0, 
		        margin:         0, 
		        width:          '30%',  
		        position:       'fixed',
		        left:           '50%' ,
		        textAlign:      'center',  
		        color:          '#000',  
		        border:         '3px solid #aaa', 
		        backgroundColor:'#fff',
		        cursor:         'auto' 		       
    		}
    	}
	);
}