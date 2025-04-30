$(document).ready( function() {
	initialize_all();
});

function initialize_all(){
	   $.get('/st/xml/toeic_types.xml', showToeicTypes);
}


function showToeicTypes(data){
	var content = getContent(data);
	$('#toeic_content_div').append($(content));
}


function getContent(data){
  var categoryHTML = "";
  var exam = $(data).find('content').attr('exam');  
  $(data).find('category').each(function(){
  	var $item = $(this);
  	var type =  $item.find('type').text();
  	if( type == 'simtest'){
  		type = 'toeic'
  	}
  	categoryHTML = categoryHTML + "<div class='test_item' id='" + type + "'><a href='/st/demo/html/"+type+".html' target='_blank'>" + $item.find('name').text() 
   + "</a></div>";  
  });  
  return categoryHTML;   
 }
 