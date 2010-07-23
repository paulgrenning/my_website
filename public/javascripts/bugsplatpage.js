// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

  var randIndex = new Array("0","1","2","3","4","5","6","7","8","9","10","11","12","13","14");
    var zSpiralIndex = new Array("16","15","14","13","12","11","10","9","8","7","6","5","4","3","2","1");
    var xSpiralPosition = new Array("370","410","490","560","620","640","610","580","500","420","320","240","180","130","100");
    var ySpiralPosition = new Array("60","25","0","30","110","210","260","310","330","340","335","300","220","130","30");

$(document).ready(function() {
  var totalImages = 15;
  var inPolaroidView = true;
  var spiralIsRotating = false;
  randomizeGrid();
  setImageSize();

  function randomizeGrid() {
      temp = randIndex.pop();
      randIndex.unshift(temp);
      $("#bug_polaroid_"+randIndex[0]).fadeOut(function() {
        $("#bug_polaroid_"+randIndex[14]).animate({queue: true}, function () {
          for(i = 0; i < totalImages; i++){
            $("#bug_polaroid_"+randIndex[i]).animate({left: xSpiralPosition[i], top: ySpiralPosition[i]});
            $("#bug_polaroid_"+randIndex[i]).css("zIndex", zSpiralIndex[i]); 
          }
        });
        $("#bug_polaroid_"+randIndex[0]).animate({queue: true}, function() {
          $(this).fadeIn(function() {
            spiralIsRotating = false;
          });
        });
      });
  }

  $(".pop-out").hover(function() {
    $(this).attr('title','');
  });

  $(".pop-out").mouseout(function() {
      $(this).attr('title',$(this).attr('backuptitle'));
  });

  $(".bug_polaroids").click(function() {
    var indexValue = $(this).attr('id').split('_')[2];
    $("#pop-out-"+indexValue).attr('title', $("#pop-out-"+indexValue).attr('backuptitle'));
  });

  function setImageSize() {
    $(".bug_portrait").animate({left: 135, top: 40});
  }

  $(".bug_polaroids").hover(function (e) {
    var currentPortrait = $(this);
    $("#mouseover-text").show();
    $("#mouseover-text").text(currentPortrait.attr("description"));
    $("#mouseover-text").css({left: currentPortrait.position().left + currentPortrait.width(), top: currentPortrait.position().top + currentPortrait.height()/3 + 20});
    $("#mouseover-top").show();
    $("#mouseover-top").css({left: currentPortrait.position().left + currentPortrait.width() -42, top: currentPortrait.position().top + currentPortrait.height()/3 + 8});
    $("#mouseover-bottom").show();
    $("#mouseover-bottom").css({left: currentPortrait.position().left + currentPortrait.width() - 20, top: currentPortrait.position().top + $("#mouseover-text").height()+ currentPortrait.height()/3 + 30});
  });

  $(".bug_polaroids").mouseout(function (e) {
    $("#mouseover-text").hide();
    $("#mouseover-bottom").hide();
    $("#mouseover-top").hide();
  });

  $(".bug_portrait").hover(function (e) {
    var currentPortrait = $(this);
    $("#mouseover-text").show();
    $("#mouseover-text").text(currentPortrait.attr("alt"));
    $("#mouseover-text").css({left: currentPortrait.position().left + currentPortrait.width() - 20, top: currentPortrait.position().top + currentPortrait.height()/3 + 20});
    $("#mouseover-top").show();
    $("#mouseover-top").css({left: currentPortrait.position().left + currentPortrait.width() -62, top: currentPortrait.position().top + currentPortrait.height()/3 + 8});
    $("#mouseover-bottom").show();
    $("#mouseover-bottom").css({left: currentPortrait.position().left + currentPortrait.width() - 40, top: currentPortrait.position().top + $("#mouseover-text").height()+ currentPortrait.height()/3 + 30});
  });

  $(".bug_portrait").mouseout(function (e) {
    $("#mouseover-text").hide();
    $("#mouseover-bottom").hide();
    $("#mouseover-top").hide();
  });

  $("#polaroid-view").click(function() {
    if(spiralIsRotating == false){
      spiralIsRotating = true;
      $(".bug_portrait").fadeOut();
      $(".bug_polaroids").fadeIn();    
      randomizeGrid();
    }
  });

  $("#portrait-view").click(function() {
    if(spiralIsRotating == false){
      $(".bug_polaroids").animate({left: 375, top: 200, queue: true}, function() {
        $(".bug_polaroids").fadeOut();    
        $(".bug_portrait").fadeIn();
        for(i = 0; i < totalImages; i++){
          $("#bug_portrait_"+i).css("-webkit-transform", "rotate(" + (Math.floor(Math.random()*30) -15) + "deg)");
          $("#bug_portrait_"+i).css("-moz-transform", "rotate(" + (Math.floor(Math.random()*30) -15) + "deg)");
        }
      });
    }
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
});
