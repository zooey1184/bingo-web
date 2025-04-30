$(document).ready(function(){
		_init_news();
});		

function _init_news(){
	 $.get('/content/index.html.xml', showNews);
}

function showNews( data ){
	var strHTML = getPicNews( data );
	$('#pic_news_div').append($(strHTML));
	var str = getTopNews( data );
	$('#top_news_div').append( $(str));
	
}

function getPicNews(data){
  var returnHTML = "";  
  $(data).find('pic_news').each( function(){
  		var $pic_news = $(this);
  		$pic_news.find('item').each(function(index){
  		
		  	var $item = $(this);
		  	returnHTML += "<div class='pic_news_item_div'>";
		  	returnHTML += "<a href='" +$item.find('pic').text() +"'>";
		  	returnHTML +=  $item.find('image').text() ;
		  	returnHTML += "</a>";
		  	returnHTML +=  "<br/>";
		  	var title = $item.find('text').text();
		  	if( title.indexOf("[") > -1 && title.indexOf("]") > -1) {
		  		var startIndex = title.indexOf("[");
		  		var endIndex = title.indexOf("]");
		  		var outTitle = title.substring(0,startIndex);
		  		outTitle += title.substring( endIndex + 1);
		  		title = outTitle;
		  	}
		  	returnHTML = returnHTML + title;  
		  	returnHTML += "</div>";
	
	  	});
  	});  
  return returnHTML;   
 }
 
function getTopNews( data ){
	var returnHTML = "";  
  
  	returnHTML = "<table width='100%'><tr><td width='50%'>";
  
	$(data).find('head_line_news').each( function(){
  		var $head_line_news = $(this);
  		$head_line_news.find('item').each(function(index){
		  	var $item = $(this);
		  		if( index < 8 ){
		  		
			  	if ( index == 4 ){
			  		returnHTML +="</td><td>";
			  	} 
		  	returnHTML += "<div class='headline_news_item_div'>";
	
		  		
		  	var title = $item.find('url').text()
		  	if( title.indexOf("[") > -1 && title.indexOf("]") > -1) {
		  		var startIndex = title.indexOf("[");
		  		var endIndex = title.indexOf("]");
		  		var outTitle = title.substring(0,startIndex);
		  		outTitle += title.substring( endIndex + 1);
		  		title = outTitle;
		  	}
		  	returnHTML = returnHTML +  title ;
		  	returnHTML += "</div>";
		  	} 
	  	});
  	});  
  	returnHTML += "</td></tr></table>";
	return returnHTML;
}
 
//function getTopNews( data ){
//
//  var returnHTML = "";  
//  $(data).find('head_line_news').each( function(){
//  		var $head_line_news = $(this);
//  		$head_line_news.find('item').each(function(index){
//		  	var $item = $(this);
//		  		if( index < 6 ){
//		  		returnHTML += "<div class='headline_news_item_div'>";
//	
//		  		
//		  	var title = $item.find('url').text()
//		  	if( title.indexOf("[") > -1 && title.indexOf("]") > -1) {
//		  		var startIndex = title.indexOf("[");
//		  		var endIndex = title.indexOf("]");
//		  		var outTitle = title.substring(0,startIndex);
//		  		outTitle += title.substring( endIndex + 1);
//		  		title = outTitle;
//		  	}
//		  	returnHTML = returnHTML +  title ;
//		  	returnHTML += "</div>";
//		  	} 
//	  	});
//  	});  
//  return returnHTML;   
//}
