$(document).ready( function() {
  
	initialize_topicTable();
	load_menu();
	init_target();
});

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
		    	alert_target();
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

function load_menu( topic_id, ability ){
 
		var content_empty = true;	//内容是否为空
		
		$('#materials').empty();
		var tableHTML = "<div>";
		tableHTML += "<div id='vocMenu'></div>";
		tableHTML += "<div id='innerMenu'>";
		tableHTML += "<div class='normalMenu' id='listening_tab'>Listening</div>";
		tableHTML += "<div class='normalMenu' id='speaking_tab'>Speaking</div>";
		tableHTML += "<div class='normalMenu' id='reading_tab'>Reading</div>";
		tableHTML += "<div class='normalMenu' id='writing_tab'>Writing</div>";
		tableHTML += "<div class='normalMenu' id='translation_tab'>Translation</div>";
		tableHTML += "</div>";
		tableHTML += "</div>";
		
		$('#materials').append($(tableHTML));
		
		 $('#materials').find('#listening_tab').click(function(){
		  	alert_target();
  		   
		});
		
		$('#materials').find('#speaking_tab').click(function(){
		   alert_target();		  

		});
		
		$('#materials').find('#reading_tab').click(function(){
		   alert_target();		   
		    
		});
		
		$('#materials').find('#writing_tab').click(function(){
		   alert_target();
		    		   
		});
		
		$('#materials').find('#translation_tab').click(function(){
				alert_target(); 
		});
		
}

function alert_target(){
	//$('#alertmsg').animate({height:'show', width:'show', opacity:'show'}, 'slow');
	$('#alertmsg').hide();
	$('#alertmsg').fadeIn();
}

function init_target(){
	$('#table_target tbody').each( function(){
		var $tbody = $(this);
		var id = $tbody.attr('id');
		
		if( id != '') {
			$tbody.hover(
				function () {
		        $(this).addClass("highlight");
		      }, 
		      function () {
		       $(this).removeClass("highlight");
		      }
			);
			
			$tbody.click( function(){
				window.open( id,"_self");
			});
		}
		 
	});
}