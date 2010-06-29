// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults


$(document).ready(function() {
  randomizeGrid();
  

  function randomizeGrid() {
    var zValue = 4;
    var topValue = 2;
    var leftValue = 40;
    var randIndex = new Array("0","1","2","3","4","5","6","7","8","9","10","11","12","13","14");
    randIndex.sort(function() {return 0.5 - Math.random()});
    for(i = 0; i < 15; i++){
      $("#bug_polaroid_"+randIndex[i]).animate({left: leftValue, top: topValue});
      $("#bug_polaroid_"+randIndex[i]).css("zIndex", zValue); 
      if(leftValue == 744){
        leftValue = 40;
        topValue += 155;
        zValue -=1;
      } else {
        leftValue += 176;
      }
    }
  }

  $("#polaroid-grid").click(function() {
    randomizeGrid();
  });

  $("#portrait-grid").hover( function() {
    $(this).stop().animate({height: 85});
  });

  $("#polaroid-grid").hover( function() {
    $(this).stop().animate({height: 85});
  });

  $("#portrait-grid").mouseout( function() {
    $(this).stop().animate({height: 75});
  });

  $("#polaroid-grid").mouseout( function() {
    $(this).stop().animate({height: 75});
  });
});
