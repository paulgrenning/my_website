// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function() {
  $("#project1Area").css({height: 30});
  $("#project1_5Area").css({height: 30});
  $("#project2Area").css({height: 30});
  $("#project2_5Area").css({height: 30});
  $("#project3Area").css({height: 30});
  $("#project4Area").css({height: 30});

  $("#project1Area").mouseover(function(){
    $(this).stop(true, false).animate({height: 410});
  });
  $("#project1Area").mouseout(function(){
    $(this).stop(true, false).animate({height: 30});
  });
  
  $("#project1_5Area").mouseover(function(){
    $(this).stop(true, false).animate({height: 158});
  });
  $("#project1_5Area").mouseout(function(){
    $(this).stop(true, false).animate({height: 30});
  });

  $("#project2Area").mouseover(function(){
    $(this).stop(true, false).animate({height: 464});
  });
  $("#project2Area").mouseout(function(){
    $(this).stop(true, false).animate({height: 30});
  });

  $("#project2_5Area").mouseover(function(){
    $(this).stop(true, false).animate({height: 158});
  });
  $("#project2_5Area").mouseout(function(){
    $(this).stop(true, false).animate({height: 30});
  });

  $("#project3Area").mouseover(function(){
    $(this).stop(true, false).animate({height: 446});
  });
  $("#project3Area").mouseout(function(){
    $(this).stop(true, false).animate({height: 30});
  });

  $("#project4Area").mouseover(function(){
    $(this).stop(true, false).animate({height: 446});
  });
  $("#project4Area").mouseout(function(){
    $(this).stop(true, false).animate({height: 30});
  });
  
  // 158
  // 464
  //158
  //4460
  //446 
  //
  //
  //
});
