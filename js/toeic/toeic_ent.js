//daily words.
$(document).ready(function(){
   getWords(0);
});

function getWords(page){
   
   $('#div_words_content').empty();
   $.get('/jsp/freeaccount/daily/widgetwords.xml?page=' + page, function(data){
   
      var HTML = ""; 
      HTML +="<ul>"
      $(data).find('item').each(function(index){
          HTML = HTML + "<li>" + "<a href=\"javascript:tb_show('words','/jsp/freeaccount/daily/words.html?serialNumber=" + $(this).find('serialNumber').text() + "&KeepThis=true&TB_iframe=true&height=600&width=600','')\">" 
          + (page*5+index + 1) + "." + $(this).find('word').text() + "</a>"; 
                });
      
      HTML +="</ul>"          
      HTML = HTML + "<br>";
                
      var currentPage = $(data).find('page').text();
      var pageCount = $(data).find('page_count').text();
                
      for(var i= 0; i < pageCount; i ++){
       HTML = HTML + "<div id='wordpage" + i + "' class='navpage'><a href='#null'>" + (i+1) + "</a></div>";
                }
                
      $('#div_words_content').append($(HTML));   
      $('#wordpage'+currentPage).removeClass('navpage').addClass('navpage_current');
      $('div[@id^="wordpage"]').each(function(index){
         var pageIndex = $(this).attr('id').slice(8);
         $(this).find('a').click(function(){            
            getWords(pageIndex);
                        });
                 });
        });        
}

//daily_news
$(document).ready(function(){
   getNews(0);
});

function getNews(page){
   
   $('#div_news_content').empty();
   $.get('/jsp/freeaccount/daily/widgetnews.xml?page=' + page, function(data){
   
      var HTML = ""; 
      HTML +="<ul>"
      $(data).find('item').each(function(index){
          HTML = HTML + "<li>" + "<a href=\"javascript:tb_show('news','/jsp/freeaccount/daily/news.html?serialNumber=" + $(this).find('serialNumber').text() + "&KeepThis=true&TB_iframe=true&height=600&width=600','')\">" 
          + (page*5+index + 1) + "." + $(this).find('title').text() + "</a>"; 
                });
      HTML +="</ul>"          
      HTML = HTML + "<br>";
                
      var currentPage = $(data).find('page').text();
      var pageCount = $(data).find('page_count').text();
                
      for(var i= 0; i < pageCount; i ++){
       HTML = HTML + "<div id='newpage" + i + "' class='navpage'><a href='#null'>" + (i+1) + "</a></div>";
      }
                
      $('#div_news_content').append($(HTML));   
      $('#newpage'+currentPage).removeClass('navpage').addClass('navpage_current');
      $('div[@id^="newpage"]').each(function(index){
         var pageIndex = $(this).attr('id').slice(7);
         $(this).find('a').click(function(){            
            getNews(pageIndex);
            });
      });
  });        
}

//daily_songs
$(document).ready(function(){
   getSongs(0);
});

function getSongs(page){
   
   $('#div_songs_content').empty();
   $.get('/jsp/freeaccount/daily/widgetsongs.xml?page=' + page, function(data){
   
      var HTML = ""; 
      HTML +="<ul>"
      $(data).find('item').each(function(index){
          HTML = HTML + "<li>" + "<a href=\"javascript:tb_show('songs','/jsp/freeaccount/daily/songs.html?serialNumber=" + $(this).find('serialNumber').text() + "&KeepThis=true&TB_iframe=true&height=600&width=600','')\">" 
          + (page*5+index + 1) + "." + $(this).find('title').text() + "</a>"; 
                });
      HTML +="</ul>"          
      HTML = HTML + "<br>";
                
      var currentPage = $(data).find('page').text();
      var pageCount = $(data).find('page_count').text();
                
      for(var i= 0; i < pageCount; i ++){
       HTML = HTML + "<div id='songpage" + i + "' class='navpage'><a href='#null'>" + (i+1) + "</a></div>";
                }
                
      $('#div_songs_content').append($(HTML));   
      $('#songpage'+currentPage).removeClass('navpage').addClass('navpage_current');
      $('div[@id^="songpage"]').each(function(index){
         var pageIndex = $(this).attr('id').slice(8);
         $(this).find('a').click(function(){            
            getSongs(pageIndex);
          });
    	});
    });        
}


//daily_which
$(document).ready(function(){
   getWhichs(0);
});

function getWhichs(page){
   
   $('#div_which_content').empty();
   $.get('/jsp/freeaccount/daily/widgetwhich.xml?page=' + page, function(data){
   
      var HTML = ""; 
      HTML +="<ul>"
      $(data).find('item').each(function(index){
          HTML = HTML + "<li>" + "<a href=\"javascript:tb_show('words','/jsp/freeaccount/daily/which.html?serialNumber=" + $(this).find('serialNumber').text() + "&KeepThis=true&TB_iframe=true&height=600&width=600','')\">" 
          + (page*5+index + 1) + "." + $(this).find('title').text() + "</a>"; 
                });
      HTML +="</ul>"          
      HTML = HTML + "<br>";
                
      var currentPage = $(data).find('page').text();
      var pageCount = $(data).find('page_count').text();
                
      for(var i= 0; i < pageCount; i ++){
       HTML = HTML + "<div id='whichpage" + i + "' class='navpage'><a href='#null'>" + (i+1) + "</a></div>";
       }
                
      $('#div_which_content').append($(HTML));   
      $('#whichpage'+currentPage).removeClass('navpage').addClass('navpage_current');
      $('div[@id^="whichpage"]').each(function(index){
         var pageIndex = $(this).attr('id').slice(9);
         $(this).find('a').click(function(){            
            getWhichs(pageIndex);
         });
       });
     });        
}


//daily_video
$(document).ready(function(){
   getVideos(0);
});

function getVideos(page){
   
   $('#div_videos_content').empty();
   $.get('/jsp/freeaccount/daily/widgetvideo.xml?page=' + page, function(data){
   
      var HTML = ""; 
      HTML +="<ul>"
      $(data).find('item').each(function(index){
          HTML = HTML + "<li>" + "<a href=\"javascript:tb_show('words','/jsp/freeaccount/daily/videos.html?serialNumber=" + $(this).find('serialNumber').text() + "&KeepThis=true&TB_iframe=true&height=600&width=600','')\">" 
          + (page*5+index + 1) + "." + $(this).find('title').text() + "</a>"; 
                });
      HTML +="</ul>"          
      HTML = HTML + "<br>";
                
      var currentPage = $(data).find('page').text();
      var pageCount = $(data).find('page_count').text();
                
      for(var i= 0; i < pageCount; i ++){
       HTML = HTML + "<div id='videopage" + i + "' class='navpage'><a href='#null'>" + (i+1) + "</a></div>";
      }
                
      $('#div_videos_content').append($(HTML));   
      $('#videopage'+currentPage).removeClass('navpage').addClass('navpage_current');
      $('div[@id^="videopage"]').each(function(index){
         var pageIndex = $(this).attr('id').slice(9);
         $(this).find('a').click(function(){            
            getVideos(pageIndex);
          });
      });
   });        
}