$(document).ready( function() {
	initialize_all();
});

function initialize_all(){
	   $.get('/st/xml/zju3_types.xml', showZju3Types);
}


function showZju3Types(data){
	var content = getContent(data);
	$('#zj3_content_div').append($(content));
}


function getContent(data){
  var categoryHTML = "";
  var exam = $(data).find('content').attr('exam');  
  $(data).find('category').each(function(){
  	var $item = $(this);
  	categoryHTML = categoryHTML + "<div class='test_item' id='" + $item.find('type').text() + "'><a href='/st/demo/html/"+$item.find('type').text()+".html' target='_blank'>" + $item.find('name').text() 
   + "</a></div>";  
  });  
  return categoryHTML;   
 }
 