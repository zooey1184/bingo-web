$(document).ready(function(){
  $.get('/st/xml/cet6_types.xml', showCet6Types);
  $.get('/st/xml/cet4_types.xml', showCet4Types);
  $.get('/st/xml/gaokao_types.xml', showGaokaoTypes);
  $.get('/st/xml/graduate_types.xml', showGraduateTypes);
  $.get('/st/xml/toeic_types.xml', showToeicTypes);
  $.get('/st/xml/zju3_types.xml', showZj3Types);
  /*
  $.get('/lib/checksubmithistory.xml?exam=cet6', showCet6History );
  $.get('/lib/checksubmithistory.xml?exam=cet4', showCet4History );
  $.get('/lib/checksubmithistory.xml?exam=gaokao', showGaokaoHistory );
  $.get('/lib/checksubmithistory.xml?exam=toeic', showToeicHistory );
  $.get('/lib/checksubmithistory.xml?exam=graduate', showGraduateHistory );
  $.get('/lib/checksubmithistory.xml?exam=zj3', showZj3History );
  */
  init_target();   
});              


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

function showCet6Types(data){
	var content = getContent(data);
	$('#cet6_content_div').prepend($(content));
}

function showCet4Types(data){
	var content = getContent(data);
	$('#cet4_content_div').prepend($(content));
}

function showGaokaoTypes(data){
	var content = getContent(data);
	$('#gaokao_content_div').prepend($(content));
}

function showGraduateTypes(data){
	var content = getContent(data);
	$('#graduate_content_div').prepend($(content));
}

function showToeicTypes(data){
	var content = getContent(data);
	$('#toeic_content_div').prepend($(content));
}

function showZj3Types(data){
	var content = getContent(data);
	$('#zj3_content_div').prepend($(content));
}




function showCet6History(data){
	var content = getRecentHistory(data);
	$('#cet6_content_div').append($(content));
}

function showCet4History(data){
	var content = getRecentHistory(data);
	$('#cet4_content_div').append($(content));
}

function showGaokaoHistory(data){
	var content = getRecentHistory(data);
	$('#gaokao_content_div').append($(content));
}

function showGraduateHistory(data){
	var content = getRecentHistory(data);
	$('#graduate_content_div').append($(content));
}

function showToeicHistory(data){
	var content = getRecentHistory(data);
	$('#toeic_content_div').append($(content));
}

function showZj3History(data){
	var content = getRecentHistory(data);
	$('#zj3_content_div').append($(content));
}

function getContent(data){
  var categoryHTML = "";
  var exam = $(data).find('content').attr('exam');  
  $(data).find('category').each(function(){
  	var $item = $(this);
  	categoryHTML = categoryHTML + "<div class='test_item' id='" + $item.find('type').text() + "'>" + $item.find('name').text() 
   + "</div>";  
  });  
  return categoryHTML;   
 }
 
 function getRecentHistory( data ){

 var historyHTML = "<table width='100%' cellpadding='1' cellspacing='1' bgcolor='#DDDDDD'>";
 
 	 historyHTML += "<tr bgcolor='#EEEEEE'>";
  	 historyHTML +="<td>&nbsp;</td>"
  	 historyHTML +="<td>&nbsp;</td>"
  	 historyHTML +="<td>&nbsp;</td>"
  	 historyHTML +="<td>&nbsp;</td>"
  	 historyHTML += "</tr>";
  	 
  $(data).find('item').each(function(){
  
  	var $item = $(this);
  	var user_name = $item.find('user_name').text();
  	var type_cn = $item.find('type_cn').text();
  	var score = $item.find('score').text();
  	var date_time = $item.find('date_time').text();
  	
  	 historyHTML += "<tr bgcolor='#FFFFFF'>";
  	 historyHTML +="<td>" + date_time + "</td>"
  	 historyHTML +="<td>" + user_name + "</td>"
  	 historyHTML +="<td>" + type_cn + "</td>"
  	 historyHTML +="<td>" + score + "</td>"
  	 historyHTML += "</tr>";
  	 
  });  
  
  historyHTML +="</table>";
  
  return historyHTML;
 }
