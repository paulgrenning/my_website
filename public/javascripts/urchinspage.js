// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults


$(document).ready(function() {
  urchinMaxZ = 28;
  totalImages = 28;
  setImageSize();
  randomizeImageLocations();
  var isInPortrait = false;
  var easeOutIndex = 0;

  function setImageSize() {
    $(".portrait").css("width", 275);
    $(".portrait").animate({left: 255});
  }

  function randomizeImageLocations() {
    for(i = 0; i < totalImages; i++){
      urchinMaxZ = 28;
      $("#polaroid_"+i).css("-webkit-transform", "rotate(" + (Math.floor(Math.random()*80) -40) + "deg)");
      $("#polaroid_"+i).css("-moz-transform", "rotate(" + (Math.floor(Math.random()*80) -40) + "deg)");
      $("#polaroid_"+i).css("zIndex", Math.floor(Math.random()*28)); 
      $("#polaroid_"+i).animate({left: Math.floor(Math.random()*850), top: Math.floor(Math.random()*335)});
    }
  }

  $(".pop-out").hover(function() {
    $(this).attr('title','');
  });

  $(".pop-out").mouseout(function() {
      $(this).attr('title',$(this).attr('backuptitle'));
  });

  $(".the_polaroids").click(function() {
    var indexValue = $(this).attr('id').split('_')[1];
    $("#urchin-pop-out-"+indexValue).attr('title', $("#urchin-pop-out-"+indexValue).attr('backuptitle'));
  });

  $(".the_polaroids").hover(function (e) {
    var currentPortrait = $(this);
    $("#mouseover-text").show();
    $("#mouseover-text").text(currentPortrait.attr("description"));
    $("#mouseover-text").css({left: currentPortrait.position().left + currentPortrait.width() + 30, top: currentPortrait.position().top + currentPortrait.height()/3 + 20});
    $("#mouseover-top").show();
    $("#mouseover-top").css({left: currentPortrait.position().left + currentPortrait.width() - 12, top: currentPortrait.position().top + currentPortrait.height()/3 + 8});
    $("#mouseover-bottom").show();
    $("#mouseover-bottom").css({left: currentPortrait.position().left + currentPortrait.width() + 10, top: currentPortrait.position().top + $("#mouseover-text").height()+ currentPortrait.height()/3 + 30});
  });

  $(".the_polaroids").mouseout(function (e) {
    $("#mouseover-text").hide();
    $("#mouseover-bottom").hide();
    $("#mouseover-top").hide();
  });

  $(".the_polaroids").draggable({
    containment: [$("#main-content").position().left, $("#main-content").position().top+1120, $("#main-content").position().left + 800, $("#main-content").position().top + 1475],
    start: function(e,ui){
      urchinMaxZ++;
      $(this).css({zIndex: urchinMaxZ});
    },
    stop: function(e, ui) {
      setTimeout(function(){ preventClick=false; }, 250);
    }
  });

  $(".portrait").mousedown(function() {
    $(this).css("-webkit-transform", "rotate(0deg)");
    if($(this).position().left == 255) {
      $(this).animate({left: 600, width: 135}, 1000, function() {
        $(this).css({zIndex: easeOutIndex});
        $(this).animate({left: 750, width: 80}, function() {
          $(this).css("-webkit-transform", "rotate(" + (Math.floor(Math.random()*30)-15) + "deg)");
        });
      });
      easeOutIndex++;
    } else if($(this).position().left == 750) {
      $(this).css({zIndex: 100 - easeOutIndex});
      $(this).animate({left: 500, width: 175}, function() {
        $(this).animate({left: 255, width: 275}, 400, function() {
          $(this).css("-webkit-transform", "rotate(" + (Math.floor(Math.random()*30)-15) + "deg)");
        });
      });
      easeOutIndex--;
    }
  });

  $(".portrait").hover(function (e) {
    var currentPortrait = $(this);
    $("#mouseover-text").show();
    $("#mouseover-text").text(currentPortrait.attr("alt"));
    $("#mouseover-text").css({left: currentPortrait.position().left + currentPortrait.width() + 20, top: currentPortrait.position().top + currentPortrait.height()/3 + 20});
    $("#mouseover-top").show();
    $("#mouseover-top").css({left: currentPortrait.position().left + currentPortrait.width() - 22, top: currentPortrait.position().top + currentPortrait.height()/3 + 8});
    $("#mouseover-bottom").show();
    $("#mouseover-bottom").css({left: currentPortrait.position().left + currentPortrait.width(), top: currentPortrait.position().top + $("#mouseover-text").height()+ currentPortrait.height()/3 + 30});
  });

  $(".portrait").mouseout(function (e) {
    $("#mouseover-text").hide();
    $("#mouseover-bottom").hide();
    $("#mouseover-top").hide();
  });

  function fadeOutPortraits() {
      $(".portrait").fadeOut();
  }

  function fadeInPolaroids() {
    $(".the_polaroids").fadeIn();
  }

  function displayPortraits() {
    for(i = 0; i < totalImages; i++){
      urchinMaxZ = 28;
      $("#portrait_"+i).css("-webkit-transform", "rotate(" + (Math.floor(Math.random()*30) -15) + "deg)");
      $("#portrait_"+i).css("-moz-transform", "rotate(" + (Math.floor(Math.random()*30) -15) + "deg)");
      $("#portrait_"+i).fadeIn();
    }
  }

  $("#polaroid-view").live('click', function() {
    isInPortrait = false;
    fadeOutPortraits();
    fadeInPolaroids();
    randomizeImageLocations();
  });

  $("#portrait-view").live("click", function() {
    if(isInPortrait == false){
      isInPortrait = true;
      $(".the_polaroids").animate({left: 375, top: 200, queue: true}, function() {
        $(this).fadeOut(function() {
          displayPortraits();
        });
      });
    }
  });

  $("#portrait-view").hover( function() {
    $(this).stop().animate({height: 85});
  });

  $("#polaroid-view").hover( function() {
    $(this).stop().animate({height: 85});
  });

  $("#portrait-view").mouseout( function() {
    $(this).stop().animate({height: 75});
  });

  $("#polaroid-view").mouseout( function() {
    $(this).stop().animate({height: 75});
  });

  $("a[rel^='prettyPhoto']").prettyPhoto({theme:'light_rounded', show_title: false, overlay_gallery: false});
});
