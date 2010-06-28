// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults


$(document).ready(function() {
  urchinMaxZ = 26;
  randomizeImageLocations();
  var isInPortrait = false;
  var easeOutIndex = 0;

  function randomizeImageLocations() {
    for(i = 0; i < 26; i++){
      urchinMaxZ = 26;
      $("#polaroid_"+i).css("-webkit-transform", "rotate(" + (Math.floor(Math.random()*80) -40) + "deg)");
      $("#polaroid_"+i).css("-moz-transform", "rotate(" + (Math.floor(Math.random()*80) -40) + "deg)");
      $("#polaroid_"+i).css("zIndex", Math.floor(Math.random()*26)); 
      $("#polaroid_"+i).animate({left: Math.floor(Math.random()*850), top: Math.floor(Math.random()*335)});
    }
  }

  $(".the_polaroids").draggable({
    containment: [$("#main-content").position().left, $("#main-content").position().top+900, $("#main-content").position().left + 800, $("#main-content").position().top + 1250],
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
    $("#mouseover-top").css({left: currentPortrait.position().left + currentPortrait.width(), top: currentPortrait.position().top + currentPortrait.height()/3 +10});
    $("#mouseover-bottom").show();
    $("#mouseover-bottom").css({left: currentPortrait.position().left + currentPortrait.width(), top: currentPortrait.position().top + $("#mouseover-text").height()+ currentPortrait.height()/3 + 30});
  });
/*
  $(".the_polaroids").hover(function (e) {
    var currentPortrait = $(this);
    $("#mouseover-text").show();
    $("#mouseover-text").html(currentPortrait.attr("alt"));
    $("#mouseover-text").css({left: currentPortrait.position().left + 3*currentPortrait.width()/4 + 20, top: currentPortrait.position().top + currentPortrait.height()/3 + 20});
    $("#mouseover-top").show();
    $("#mouseover-top").css({left: currentPortrait.position().left + 3*currentPortrait.width()/4, top: currentPortrait.position().top + currentPortrait.height()/3 +10});
    $("#mouseover-bottom").show();
    $("#mouseover-bottom").css({left: currentPortrait.position().left + 3*currentPortrait.width()/4, top: currentPortrait.position().top + $("#mouseover-text").height()+ currentPortrait.height()/3 + 30});
  });

  $(".the_polaroids").mouseout(function (e) {
    $("#mouseover-text").hide();
    $("#mouseover-bottom").hide();
    $("#mouseover-top").hide();
  });
  */
  $(".portrait").mouseout(function (e) {
    $("#mouseover-text").hide();
    $("#mouseover-bottom").hide();
    $("#mouseover-top").hide();
  });

  $("#refresh-button").live('click', function() {
    if(isInPortrait == false) {
      randomizeImageLocations();
    }
  });

  $("#polaroid-view").live('click', function() {
    $(this).effect("bounce"); fadeOutPortraits();
    isInPortrait = false;
    fadeInPolaroids();
    randomizeImageLocations();
  });

  function fadeOutPortraits() {
      $(".portrait").fadeOut();
  }

  function fadeInPolaroids() {
    $(".the_polaroids").fadeIn();
  }

  function displayPortraits() {
    for(i = 0; i < 26; i++){
      urchinMaxZ = 26;
      $("#portrait_"+i).css("-webkit-transform", "rotate(" + (Math.floor(Math.random()*30) -15) + "deg)");
      $("#portrait_"+i).css("-moz-transform", "rotate(" + (Math.floor(Math.random()*30) -15) + "deg)");
      $("#portrait_"+i).fadeIn();
    }
  }

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

  $("#portrait-view").live("click", function() {
    $(this).effect("bounce");
    if(isInPortrait == false){
      isInPortrait = true;
      $(".the_polaroids").animate({left: 375, top: 200, queue: true}, function() {
        $(this).fadeOut(function() {
          displayPortraits();
        });
      });
    }
  });

  $("a[rel^='prettyPhoto']").prettyPhoto();
});
