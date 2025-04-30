var word = 'a';

$(document).ready( function() {
	locate_word_index();
	locate_word();
});

function locate_word(){

	try{
		var local_url = document.location.href;
		var index_id = local_url.indexOf('word=');
		if( index_id > 0 ) {
			var c =  local_url.substring(index_id);
			word = c.slice(5);
			load_word( word );
		}
	}catch(err){
		word = 'a';
	}
}
//load in the index
function locate_word_index(){
	if($('#dynamic_word_div')){
		load_word_index();
	}
}

function load_word_index(){

var categoryArr = new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
try{
	var step = Math.random();
	step = Math.round(step*26);
	category = categoryArr[step];
	
 }catch(err){
 	alert(err);
 }
 
	var count = 8; 
	var index = 0;
	$.get("/st/xml/words/"+category+".xml",function(data){
		var strHTML = "";
		var current_word = "";
		$(data).find("item").each( 
			function(){
				var $item = $(this);
				var relate_word = $item.find('word').text();
				var chinese = $item.find('chinese').text();
				
				if( relate_word != current_word ){
					strHTML +="<div>";
					strHTML += "<div><a href='/st/index/word.html?word=" + relate_word + "'>" + relate_word + "</a>: " +chinese +  "</div>";
					strHTML += "</div>";
					current_word = relate_word;
					
					index++;
				}else{
					
				}
				
				
				if( index > count ) {
					return false;
				}
			}
			
		);
		
		
		$('#dynamic_word_div').empty();
		$('#dynamic_word_div').append($( strHTML));
	
	});
}

function load_word( word ) {
	$('#word_title').html( word );
	$.get("/genwaygame/wordassociates.wor",{word:word},function(data){
		var strHTML = "";
		var strWords = "<div>关联单词：<br />";
		var current_word = "";
		var xmlDom=new ActiveXObject("Microsoft.XMLDOM");
		xmlDom.loadXML(data); 
		$(xmlDom).find("item").each( 
			function(){
				var $item = $(this);
				var relate_word = $item.find('word').text();
				
				var english = $item.find('english').text();
				var chinese = $item.find('chinese').text();
				var example = $item.find('example').text();
				
				if( current_word != relate_word ){
					strWords += "<div class='word_token'><a href='/st/index/word.html?word=" + relate_word+"'>" + relate_word + "</a></div>";
					
					var m_strHTML = "";
					m_strHTML +="<div class='word_item'>";
					m_strHTML += "<div>" + relate_word + "</div>";
					m_strHTML += "<div>" + english + "</div>";
					m_strHTML += "<div>" + chinese + "</div>";
					m_strHTML += "<div>" + example + "</div>";
					m_strHTML += "</div>";
					
					strHTML += m_strHTML;
					current_word = relate_word;
					
					if( current_word == word ) {
						if($('#word_title')){
							$('#word_title').append($(m_strHTML));
						}
					}
					
				}else{
					
				}
				
			}
		);
		
		strWords +="</div><div class='cleared'></div>";
		$('#word_content').append($(strWords + strHTML));
	});
}