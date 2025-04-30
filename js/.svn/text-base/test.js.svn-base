function getProducts(exam){
  $('#products_div').empty();
  $.get('/st/xml/' + exam + '_types.xml', showTypes);   
}                             

function showTypes(data){

  var totalHTML = "";
  var exam = $(data).find('content').attr('exam');
  var type = "";
  
  $(data).find('category').each(function(){
  
  var $item = $(this);
  totalHTML = totalHTML + "<div type='" + $item.find('type').text() + "'>" + $item.find('name').text() + "&nbsp;&nbsp;&nbsp;" + "<a href='#null'><img src='/st/edugov/images/fold.png'/>"
   + "</a>";
  totalHTML = totalHTML + "<div id='materials_div'></div></div>";  
  
  });  
  
    
 $("#products_div").append( $(totalHTML));
  
  
 var clickEvent = function(a){
   
   $(a).click(function(){
              
     $.get('/lib/mybingo/getTestMaterialsList.html?exam=' + exam + '&type=' + $(a).parent().attr('type'),function(data){
        $(a).parent().find("#materials_div").empty();
        $(a).parent().find("#materials_div").append($(data));
       //regist changePage response 
        $(a).parent().find('#materials_div').find('span').find('a').each(function(){       
         nextPageClick($(this),$(a));                    
                   });                
              });                 
        });  
        
   $(a).toggle(
   function(){
      
      $(a).parent().find('#materials_div').show();
        },
   function(){
      
      $(a).parent().find('#materials_div').hide();
        });
  };
  
  
 var nextPageClick = function(a,b){
  
  $(a).click(function(){    
    var url = $(a).attr('attribute');
    
    $.get(url,function(data){
      $(b).parent().find("#materials_div").empty();
      $(b).parent().find('#materials_div').append($(data));
      
      $(b).parent().find('#materials_div').find('span').find('a').each(function(){
       nextPageClick($(this),$(b));
                });            
           });     
      } );  
  }; 
  
  
  $('#products_div').each(function(){
    var products_div = $(this);
    
    $('#products_div a').each(function(){
   
       clickEvent($(this));
     });  
  });
  
}



