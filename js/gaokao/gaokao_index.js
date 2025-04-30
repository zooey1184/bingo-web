$(document).ready( function() {
	initialize_all();
});

function initialize_all(){
	  $.get('/st/xml/skills/listening.xml', showlistening);
	  $.get('/st/xml/skills/reading.xml', showreading);
	  $.get('/st/xml/skills/speaking.xml', showspeaking);
	  $.get('/st/xml/skills/translation.xml', showtranslation);
	  $.get('/st/xml/skills/writing.xml', showwriting);
	  $.get('/e/daily/news.xml?serialNumber=N-102-33&contentType=news',shownews );
	  $.get('/e/daily/word.xml?serialNumber=WD-101-65',showword );
	  $.get('/e/daily/songs.xml?serialNumber=SO-103-38',showsongs );
} 

var nid = "";   
function showlistening(data){
	var items = "<div onclick='showlisteningcontent()' id='listening_div'><span class='itemtitle'>听</span>"
	  $(data).find('item').each(function(){
	  		var $item = $(this);
	  		var id = $item.find('id').text();
	  		var title = $item.find('title').text();
	  		var body = $item.find('body').text();
	  		var itemHTML = "";
	  		itemHTML += "<span class='title'>" + nid +"" + title +"</span><br /> ";
	  		if( id == '1' )
	  			itemHTML += "<div class='content'>" + body.substring(0,80) +"...</div>";
	  		
	  		items += itemHTML;
			});
	items += "</div>";
	$('#item_1').empty();
	$('#item_1').append( $(items));
	
	$('#listening_div').hover(
		function(){
			$('#listening_div').addClass("content_highlight");
		},
		function(){
			$('#listening_div').removeClass("content_highlight");
		}
	);
	
}

function showreading(data){
	var items = "<div onclick='showreadingcontent()' id='reading_div'><span class='itemtitle'>读</span>"
	  $(data).find('item').each(function(){
	  		var $item = $(this);
	  		var id = $item.find('id').text();
	  		var title = $item.find('title').text();
	  		var body = $item.find('body').text();
	  		var itemHTML = "";
	  		itemHTML += "<span class='title'>" + nid +"" + title +"</span> <br />";
	  		if( id == '1' )
	  			itemHTML += "<div class='content'>" + body.substring(0,80) +"...</div>";
	  		
	  		items += itemHTML;
			});
	items += "</div>";
	$('#item_2').html( $(items) );	
	
	$('#reading_div').hover(
		function(){
			$('#reading_div').addClass("content_highlight");
		},
		function(){
			$('#reading_div').removeClass("content_highlight");
		}
	);
}

function showspeaking(data){
	var items = "<div onclick='showspeakingcontent()' id='speaking_div'><span class='itemtitle'>说</span>"
	  $(data).find('item').each(function(){
	  		var $item = $(this);
	  		var id = $item.find('id').text();
	  		var title = $item.find('title').text();
	  		var body = $item.find('body').text();
	  		var itemHTML = "";
	  		itemHTML += "<span class='title'>" + nid +"" + title +"</span><br />";
	  		if( id == '1' )
	  			itemHTML += "<div class='content'>" + body.substring(0,80) +"...</div>";
	  		
	  		items += itemHTML;
			});
	items += "</div>";
	$('#item_3').html( $(items) );	
	
		$('#speaking_div').hover(
		function(){
			$('#speaking_div').addClass("content_highlight");
		},
		function(){
			$('#speaking_div').removeClass("content_highlight");
		}
	);
}

function showwriting(data){
	var items = "<div onclick='showwritingcontent()' id='writing_div'><span class='itemtitle'>写</span>"
	  $(data).find('item').each(function(){
	  		var $item = $(this);
	  		var id = $item.find('id').text();
	  		var title = $item.find('title').text();
	  		var body = $item.find('body').text();
	  		var itemHTML = "";
	  		itemHTML += "<span class='title'>" + nid +"" + title +"</span><br /> ";
	  		if( id == '1' )
	  			itemHTML += "<div class='content'>" + body.substring(0,80) +"...</div>";
	  		
	  		items += itemHTML;
			});
	items += "</div>";
	$('#item_4').html( $(items) );	
	
	$('#writing_div').hover(
		function(){
			$('#writing_div').addClass("content_highlight");
		},
		function(){
			$('#writing_div').removeClass("content_highlight");
		}
	);
}

function showtranslation(data){
	var items = "<div onclick='showtranslationcontent()' id='translation_div'><span class='itemtitle'>译</span>"
	  $(data).find('item').each(function(){
	  		var $item = $(this);
	  		var id = $item.find('id').text();
	  		var title = $item.find('title').text();
	  		var body = $item.find('body').text();
	  		var itemHTML = "";
	  		itemHTML += "<span class='title'>" + nid +"" + title +"</span><br />";
	  		if( id == '1' )
	  			itemHTML += "<div class='content'>" + body.substring(0,80) +"...</div> ";
	  		
	  		items += itemHTML;
			});
	items += "</div>";
	$('#item_5').html( $(items) );	
	
	$('#translation_div').hover(
		function(){
			$('#translation_div').addClass("content_highlight");
		},
		function(){
			$('#translation_div').removeClass("content_highlight");
		}
	);
}

function shownews(data){
	var date = $(data).find('date').text();
	var title = $(data).find('title').text();
	var mediafile = "http://www.bingoenglish.com" + $(data).find('url').text();
	var content = $(data).find('content').text().substring(0,200) + "...";
	var html = "";
	html +="<div class='newstitle'>" + title.substring(0,30) +"</div>";
	html +="<div class='date'>" + date +"</div>";
	html +="<div class='content'><img src='" + mediafile+"' align='left' width='80' height='80' border='1' />" +  content + " </div>";
	html +="<div style='text-align:right'><a href='/st/gaokao/ent.html'>More...</a></div>";
	$('#div_ent_1').append( $(html) );
}

function showword(data){
	var date = $(data).find('date').text();
	var word = $(data).find('word').text();
	var story = $(data).find('story').text().substring(0,400) + "...";
	var html = "";
	html +="<div class='newstitle'>" + word +"</div>";
	html +="<div class='date'>" + date +"</div>";
	html +="<div class='content'>" + story + " </div>";
	html +="<div style='text-align:right'><a href='/st/gaokao/ent.html'>More...</a></div>";
	$('#div_ent_2').append( $(html) );
}

function showsongs(data){
	var title = $(data).find('title').text();
	var mediafile = "http://www.bingoenglish.com" + $(data).find('artisturl').text();
	var intro = $(data).find('intro').text().substring(0,200) + "...";
	var html = "";
	html +="<div class='newstitle'>" + title.substring(0,30) +"</div>";
	html +="<div class='content'><img src='" + mediafile+"' align='left' width='80' height='80' border='1' />" +  intro + " </div>";
	html +="<div style='text-align:right'><a href='/st/gaokao/ent.html'>More...</a></div>";
	$('#div_ent_3').append( $(html) );
}


function showlisteningcontent(){
	$.get('/st/xml/skills/listening.xml', showlistening_inner);
}

function showspeakingcontent(){
	$.get('/st/xml/skills/speaking.xml', showspeaking_inner);
}

function showreadingcontent(){
	$.get('/st/xml/skills/reading.xml', showreading_inner);
}

function showwritingcontent(){
	$.get('/st/xml/skills/writing.xml', showwriting_inner);
}

function showtranslationcontent(){
	$.get('/st/xml/skills/translation.xml', showtranslation_inner);
}

function showlistening_inner(data){
	var items = "<div>";
	items += "<div id='div_back_content'><div style='width:100px;text-align:center;padding-top:10px'><a href='/st/gaokao.html'>返回</a></div></div>";
	items += "<div class='itemtitle'>听</div>"
	
	  $(data).find('item').each(function(){
	  		var $item = $(this);
	  		var id = $item.find('id').text();
	  		var title = $item.find('title').text();
	  		var body = $item.find('body').text();
	  		
	  		var itemHTML = "";
	  		
	  		itemHTML += "<hr class='dashedhr'/>";
	  		itemHTML += "<div class='title'>" + nid +"" + title +"</div><br /> ";
			itemHTML += "<div class='content'>" + body +"</div>";

			items += itemHTML;
			});
	items += "</div>";
	$('#div_main').html( $(items) );	
}


function showspeaking_inner(data){
	var items = "<div>";
	items += "<div id='div_back_content'><div style='width:100px;text-align:center;padding-top:10px'><a href='/st/gaokao.html'>返回</a></div></div>";
	items += "<div class='itemtitle'>说</div>"
	
	  $(data).find('item').each(function(){
	  		var $item = $(this);
	  		var id = $item.find('id').text();
	  		var title = $item.find('title').text();
	  		var body = $item.find('body').text();
	  		
	  		var itemHTML = "";
	  		
	  		itemHTML += "<hr class='dashedhr'/>";
	  		itemHTML += "<div class='title'>" + nid +"" + title +"</div><br /> ";
			itemHTML += "<div class='content'>" + body +"</div>";

			items += itemHTML;
			});
	items += "</div>";
	$('#div_main').html( $(items) );	
}



function showreading_inner(data){
	var items = "<div>";
	items += "<div id='div_back_content'><div style='width:100px;text-align:center;padding-top:10px'><a href='/st/gaokao.html'>返回</a></div></div>";
	items += "<div class='itemtitle'>读</div>"
	
	  $(data).find('item').each(function(){
	  		var $item = $(this);
	  		var id = $item.find('id').text();
	  		var title = $item.find('title').text();
	  		var body = $item.find('body').text();
	  		
	  		var itemHTML = "";
	  		
	  		itemHTML += "<hr class='dashedhr'/>";
	  		itemHTML += "<div class='title'>" + nid +"" + title +"</div><br /> ";
			itemHTML += "<div class='content'>" + body +"</div>";

			items += itemHTML;
			});
	items += "</div>";
	$('#div_main').html( $(items) );	
}


function showwriting_inner(data){
	var items = "<div>";
	items += "<div id='div_back_content'><div style='width:100px;text-align:center;padding-top:10px'><a href='/st/gaokao.html'>返回</a></div></div>";
	items += "<div class='itemtitle'>写</div>"
	
	  $(data).find('item').each(function(){
	  		var $item = $(this);
	  		var id = $item.find('id').text();
	  		var title = $item.find('title').text();
	  		var body = $item.find('body').text();
	  		
	  		var itemHTML = "";
	  		
	  		itemHTML += "<hr class='dashedhr'/>";
	  		itemHTML += "<div class='title'>" + nid +"" + title +"</div><br /> ";
			itemHTML += "<div class='content'>" + body +"</div>";

			items += itemHTML;
			});
	items += "</div>";
	$('#div_main').html( $(items) );	
}


function showtranslation_inner(data){
	var items = "<div>";
	items += "<div id='div_back_content'><div style='width:100px;text-align:center;padding-top:10px'><a href='/st/gaokao.html'>返回</a></div></div>";
	items += "<div class='itemtitle'>译</div>"
	
	  $(data).find('item').each(function(){
	  		var $item = $(this);
	  		var id = $item.find('id').text();
	  		var title = $item.find('title').text();
	  		var body = $item.find('text').text();
	  		
	  		var itemHTML = "";
	  		
	  		itemHTML += "<hr class='dashedhr'/>";
	  		itemHTML += "<div class='title'>" + nid +"" + title +"</div><br /> ";
			itemHTML += "<div class='content'>" + body +"</div>";

			items += itemHTML;
			});
	items += "</div>";
	$('#div_main').html( $(items) );	
}
