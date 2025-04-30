$(document).ready( function() {
	initialize_all();
});

function initialize_all(){
	   $.get('/st/xml/graduate_types.xml', showGraduateTypes);
}


function showGraduateTypes(data){
	var content = getContent(data);
	$('#graduate_content_div').append($(content));
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
 