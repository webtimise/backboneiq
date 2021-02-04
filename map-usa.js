window.addEventListener("load", function () {
    $(function(){
          var patternAColor ='2A9400';
          var patternBColor ='BBD400';
          var patternCColor ='EAF2B2';
          var patternDColor ='E1E1E1';
  
          // Load patterns
  $(".wrapper .wrap #ajaxContent svg #g5").find("#AK").css({ fill: '#'+patternAColor });
  $(".wrapper .wrap #ajaxContent svg #g5").find("#MI").css({ fill: '#'+patternBColor });
  /*        
          $(".wrapper .wrap #ajaxContent svg").each(function(){
            $(this).find("#HI").css({ fill: '#'+patternBColor });
            $(this).find("#AK").css({ fill: '#'+patternAColor });
            $(this).find("#MI").css({ fill: '#'+patternBColor });
          });   
  */        
    }); 
  
  });
  /*
  $(document).ready(function(){
  });
  */
  
  $("path, circle").hover(function(e) {
    $('#info-box').css('display','block');
    $('#info-box').html($(this).data('info'));
  });
  
  $("path, circle").mouseleave(function(e) {
    $('#info-box').css('display','none');
  });
  
  $(document).mousemove(function(e) {
    $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
    $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
  }).mouseover();
  
  var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if(ios) {
    $('a').on('click touchend', function() { 
      var link = $(this).attr('href');   
      window.open(link,'_blank');
      return false;
    });
  }