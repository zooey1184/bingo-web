function addBuyedItem( itemname ) {
	var $itemTbody = $('#'+itemname, $('#table_target'));
	$itemTbody.show();
	
	var id = $itemTbody.attr("id");
	var service = id;
	if( service == 'zju3'){
		service = 'zj3';
	}
	
	var url = "/st/"+service+".html";
	
	if(itemname != "none"){
		$itemTbody.click( function(){
		window.open( url,"_self");
	});
	}
	
	$itemTbody.hover(
		function(){
			$(this).addClass("buyed_itemhightlight");
		},
		function(){
			$(this).removeClass("buyed_itemhightlight");
		}
	);
}

function initialize_target_to_buy(){

	$('tbody', $('#table_target_to_buy')).each( function(){
		var $itemTbody = $(this);
		
		var id = $itemTbody.attr("id");
		var service = id.slice(3);
	
		var url = "/lib/account/"+service+"/index.do";
		
		$itemTbody.click( function(){
			window.open( url,"_self");
		});
		
		$itemTbody.hover(
			function(){
				$(this).addClass("buyed_itemhightlight");
			},
			function(){
				$(this).removeClass("buyed_itemhightlight");
			}
		);
	});
	
}