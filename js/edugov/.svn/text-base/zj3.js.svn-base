$(document).ready(function(){
  $('#products_div').empty();
  $.get('/st/xml/zju3_types.xml', showTypes);
  init_login();
  init_buy();   
});              

var global_exam = "zju3";
var global_type = "realtest";

function showTypes(data){

  var categoryHTML = "";
  
  var exam = $(data).find('content').attr('exam');  
  
  categoryHTML = categoryHTML + "<div class='topic_header'></div>"
  
  $(data).find('category').each(function(){
  	var $item = $(this);
  	categoryHTML = categoryHTML + "<div class='left_menu_item' id='" + $item.find('type').text() + "'>" + $item.find('name').text() 
   + "</div>";  
  });  
  
 $("#category_div").append($(categoryHTML));   
 
  $('.left_menu_item').hover(
  			function () {
		        $(this).addClass("highlight");
		      }, 
		      function () {
		       $(this).removeClass("highlight");
		      }
	);	


 $("#category_div").each(function(){
	    var $category_div = $(this);
	    
	    $('div', $category_div).click(function(){
	    	addEventToItem($(this));
	    });
	    
  });
	
  loadcontent( global_exam, global_type );
  
var addEventToItem = function(a){
		$("#materials_div").block();
		var $alink = $(a);
	    var type = $alink.attr("id");
	    loadcontent( global_exam, type );
	    global_type = type;
      }
}

function loadcontentbyurl( content_url ) {
     var empty = true;
			var tableHTML ="";
			var global_valid = false;
			var global_online = false;
   			tableHTML += "<div id='testHeader'>" + "" + "</div>";
	    	$.get( content_url,
	     	
	     	function(data){
	     	
	   $('#materials_div').empty();
			$('#materials_div').unblock();
	     	global_valid = $(data).find('valid').text();
	     	global_online = $(data).find('online').text();
	     	
	    $(data).find('items').each(function() {
	     	var $items = $(this);
	     	$items.find('item').each( function(index_id){
		     empty = false;
		     
					var $item = $(this);
					
					var serial_number = $item.find('serial_number').text();
					var introduction = $item.find('introduction').text();
					var finished = $item.find('finished').text();
					var finished_time = $item.find('finished_time').text();
					var url = $item.find('url').text();
					var review_url = $item.find('review_url').text();
					var score = $item.find('score').text();
					
					var itemHTML = "";
					itemHTML +="<div class='todo_item'>";

					itemHTML += "<div class='serialNumber' title='" + serial_number+"'><img src='/st/images/gaokao_1/test/test.png' border='0'/></div>";
					
					
					if( finished == 'true'){
						itemHTML += "<div class='test_introduction'>" 
						itemHTML += introduction + "";  
						itemHTML += "<div class='finish_time'>完成时间:" + finished_time +"</div>";
						itemHTML +="</div>";
						itemHTML += "<div class='link_out'>"
						itemHTML += "得分：" + score;
						itemHTML += "<a href='" + url + "' target='_blank'><img src='/st/images/gaokao_1/tools/redo.gif' border=0/></a>";
						itemHTML += "<a href='" + review_url + "' target='_blank'><img src='/st/images/gaokao_1/tools/review.gif' border=0/></a></div>"; 
					}else{
	
						if( ( global_online == 'true') && ( global_valid == 'true' ) ) {
							itemHTML += "<div class='test_introduction'>" + introduction + "</div>";
							itemHTML += "<div class='link_out'><a href='" + url + "' target='_blank'><img src='/st/images/gaokao_1/tools/begin.gif' border=0/></a></div>";
						}else if( !(global_online == 'true') ){
							itemHTML += "<div class='test_introduction'>" + introduction + "</div>";
							itemHTML += "<div class='link_out'><a href='#null' id='a_not_login_"+index_id+"'><img src='/st/images/gaokao_1/tools/begin.gif' border=0/></a></div>";
						}else if( global_valid == 'false' ) {
							itemHTML += "<div class='test_introduction'>" + introduction + "</div>";
							itemHTML += "<div class='link_out'><a href='#null' id='a_not_buy_"+index_id+"'><img src='/st/images/gaokao_1/tools/begin.gif' border=0/></a></div>";
						}
					}
					itemHTML += "<div class='cleared'></div>";
					itemHTML += "</div>";
					tableHTML += itemHTML;

				});
			});
			
			if(empty == false){
			
			tableHTML += "<div class='cleared'></div>";
			tableHTML += "<div class='navs'>"; 	
			var count = $(data).find('count').text();
			tableHTML +="<div class='count'>共" + count +"条 </div>"
			$(data).find('buttons').each(function() {
	     		var $items = $(this);
	     		$items.find('item').each( function(){
		
					var $item = $(this);
					
					var current = $item.find('current').text();
					var page = $item.find('page').text();
					var url = $item.find('url').text();
					
					var itemHTML = "";

					itemHTML += "<div class='button_current_" + current + "' id='" + url + "'>" + page + "</div>";
					tableHTML += itemHTML;

				});
			});
			
			tableHTML += "</div>";
			
			}
			else{
				var divHTML = "<div class='detailTest'>";
	
				divHTML += "<div class='noitems'>" + "<img src='/st/images/gaokao_1/test/noitems.jpg'/>" + "</div>";
				
				divHTML += "</div>";
				
				tableHTML += divHTML;
			}
			
			$('#materials_div').append($(tableHTML));
			
			//缺省选定的效果
			
			$("#category_div").each(function(){
				    var $category_div = $(this);
				    
				    $('div', $category_div).each(function(){
				    	$(this).removeClass('clickhighlight');
				    });
				    
			});
			
			var addEventToNavItem = function(a){
				$("#materials_div").empty();
				var $alink = $(a);
			    var url = $alink.attr("id");
			    loadcontentbyurl(url );
		  	}
		  
			$(".navs div").each( function(){
					var $nav_item = $(this);
					var url = $nav_item.attr('id');
				    if( url != ''){
				    	$nav_item.click(function(){
				    		addEventToNavItem($nav_item);
				    	});
				    }
			});
			            
	    $('#'+global_type).addClass('clickhighlight');  
		    
		    //取得主题
		    var testHTML = $('#'+global_type).html();
		    $('#testHeader').html(testHTML);    
		    
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
		
		});//function(data)
}
//加载内容
function loadcontent( exam, type ) {
	    var ran = Math.random(); 
	   var url = '/e/mybingo/getTestMaterialsList.xml?exam=' + exam + '&type=' + type + "&ran=" + ran;
	   loadcontentbyurl(url);
}

function init_login() {

  var href = window.location.href;

	var strHTML = "<div id='div_no_login' style='display:none;width:400px;bgcolor:#b7d8ed;'>";
	strHTML += "<div class='alertmsg'>";
  strHTML += "<a href='#'>请点击这里登录</a>";
	
	strHTML += "</div>";
	strHTML += "<div id='close' style='text-align:center;cursor:hand;'><img src='/st/images/close.gif'/></div>";
	strHTML += "</div>";
	$(strHTML).prependTo('body');	
	$('#div_no_login').find('#close').click(function(){
	   $('#materials_div').unblock();
	});
}

function init_buy() {
	var strHTML = "<div id='div_no_buy' style='display:none;width:400px;'>";
	strHTML +="<div class='alertmsg'><table><tr><td><img src='/st/images/gaokao_1/account/forbid.png' border='0'></td><td align='right'>您还没有购买该产品或者您的服务已经到期，请先购买<br/><hr class='dashedhr'/><a href='/e/account/cet4/index.do' target='_self'>购买</a></td></tr></table><div>";
	strHTML += "<div id='close' style='text-align:center'><img src='/st/images/close.gif'/></div>";
	strHTML +="</div>"
	$(strHTML).prependTo('body');
	$('#div_no_buy').find('#close').click(function(){
	   $('#materials_div').unblock();
	});
}

function block_with_login(){
	$('#materials_div').block(
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
		        position:       'fixed',
		        left:           '50%' ,
		        textAlign:      'center',  
		        color:          '#000',  
		        border:         '3px solid #aaa', 
		        backgroundColor:'#b7d8ed',
		        cursor:         'auto' 
    		}
    	}
	);
}

function block_with_no_buy(){
	$('#materials_div').block(
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
		        left:           '50%',
		        textAlign:      'center',  
		        color:          '#000',  
		        border:         '3px solid #aaa', 
		        backgroundColor:'#fff', 
		        cursor:         'auto' 
    		}
    	}
	);
}