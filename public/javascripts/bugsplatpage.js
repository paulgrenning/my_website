// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults


$(document).ready(function() {
  var totalImages = 15;
  randomizeGrid();
  setImageSize();

  function randomizeGrid() {
    var zValue = 4;
    var topValue = 2;
    var leftValue = 40;
    var randIndex = new Array("0","1","2","3","4","5","6","7","8","9","10","11","12","13","14");
    randIndex.sort(function() {return 0.5 - Math.random()});
    for(i = 0; i < totalImages; i++){
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

  function setImageSize() {
    $(".bug_portrait").animate({left: 155, top: 50});
  }

  $("#polaroid-grid").click(function() {
    $(".bug_portrait").fadeOut();
    $(".bug_polaroids").fadeIn();    
    randomizeGrid();
  });

  $("#portrait-grid").click(function() {
    $(".bug_polaroids").animate({left: 375, top: 200, queue: true}, function() {
      $(".bug_polaroids").fadeOut();    
      $(".bug_portrait").fadeIn();
      for(i = 0; i < totalImages; i++){
        $("#bug_portrait_"+i).css("-webkit-transform", "rotate(" + (Math.floor(Math.random()*30) -15) + "deg)");
        $("#bug_portrait_"+i).css("-moz-transform", "rotate(" + (Math.floor(Math.random()*30) -15) + "deg)");
      }
    });
  });

  $(".bug_portrait").click(function () {
    var currentWidth = $(this).width();
    $(this).fadeOut(function() {
      for(i = 0; i < 15; i++){
        parseInt($(this).css('z-index'))
        $("#bug_portrait_"+i).css("zIndex", parseInt($("#bug_portrait_"+i).css('z-index')) + 1);
        $(this).fadeIn();
        $(this).css("zIndex", 0);
       // $(this).animate({width: currentWidth});
      } 
    });
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
