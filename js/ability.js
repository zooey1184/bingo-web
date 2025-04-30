$(document).ready( function() {
	initialize_topicTable();
});

var global_topic_id = 1;
var global_ability_id = "listening";

function initialize_topicTable(){

	$.get('/st/xml/topics.xml',function(data){
	
		$('#products_category').empty();
		
		var tableHTML = "<table cellpadding=0 cellspacing=0 bgcolor='#DDDDDD' id='table_topics'>";
			
		$(data).find('item').each( function(){
		
			var $item = $(this);
		
			var html = "<tbody id='tbody_topic_" + $item.find('id').text() +"' title='" + $item.find('cn_long_name').text()+ "'>" + "<tr><td>";
			html += "<img src='" + $item.find('pic').text() + "' />";
			html +="</td><td>"
			html += $item.find('en_name').text() + "<br/>";
			html += $item.find('ch_long_name').text();
			html += "</td></tr></tbody>";
		
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
		
		$.get('/lib/mybingo/getNewAbilityMaterialsList.xml?ability='+ability+'&topic='+topic_id, function(data){
			
		var tableHTML = "<div>";
		
		tableHTML += "<div id='innerMenu'>";			
		tableHTML += "<div class='currentMenu' id='listening_tab'>Listening</div>";
		tableHTML += "<div class='normalMenu' id='speaking_tab'>Speaking</div>";
		tableHTML += "<div class='normalMenu' id='reading_tab'>Reading</div>";
		tableHTML += "<div class='normalMenu' id='writing_tab'>Writing</div>";
		tableHTML += "<div class='normalMenu' id='translation_tab'>Translation</div>";
		tableHTML += "</div>";		
					
		$(data).find('todo').each( function(){
			
			var $todo = $(this);
			var name = $todo.find('name').text();
			var $items = $todo.find('item');
			var item_length = $items.length;
			
			if( item_length > 0 ) {
				var divHTML = "<div class='detailAbility'>";
				
	
				divHTML += "<div class='abilityName'>" + name + "</div>";
				
				$items.each(function(){
					var $item = $(this);
					var serial_number = $item.find('serial_number').text();
					var introduction  =  $item.find('introduction').text();
					var url = $item.find('url').text();
					
					divHTML +="<div class='todo_item'>";
					//divHTML += "<div class='serialNumber'>" + serial_number + "</div>";
					divHTML += "<div class='introduction'>" + introduction + "</div>";
					divHTML += "<div class='link_out'><a href='" + url +"'>Enter</a></div>";
					divHTML += "</div>";
				});
				
				divHTML += "</div>";
				
				tableHTML += divHTML;
			}
		});

		$(data).find('history').each( function(){
		
			var $history = $(this);
			var name = $history.find('name').text();
			var $items = $history.find('item');
			var item_length = $items.length;
			
			if( item_length > 0 ) {
				var divHTML = "<div>History:<br />";
				divHTML += name;
				
				$items.each(function(){
					var $item = $(this);
					var serial_number = $item.find('serial_number').text();
					var introduction = $item.find('introduction').text();
					var url = $item.find('url').text();
					divHTML +="<div class='history_item'>";
					//divHTML += "<div class='serialNumber'>" + serial_number + "</div>";
					divHTML += "<div class='introduction'>" + introduction + "</div>";
					divHTML += "<div class='link_out'><a href='" + url +"'>Enter</a></div>";
					divHTML += "</div>";
				});
				
				divHTML += "</div>";
				
				tableHTML += divHTML;
			}else{
				
			}
			
		});
		
				
		tableHTML += "</table>";
		
		$("#materials").append( $(tableHTML));
		
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
	});
}

function changeability(ability){
  $('#materials').empty(); 

	loaddefaultcontent(global_topic_id, ability );

}

function changetopic( topic_id ){
	$('#materials').empty();
	loaddefaultcontent(topic_id, global_ability_id );	
}