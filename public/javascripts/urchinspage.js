// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults


$(document).ready(function() {
  urchinMaxZ = 26;
  randomizeImageLocations();
  var isInPortrait = false;
  var easeOutIndex = 0;
  function launchFancyBox() {
    $(".pop-out").fancybox({
      'titlePosition' : 'inside',
      'titleShow'     : true,
      'transitionIn'  : 'elastic',
      'transitionOut' : 'elastic',
      'easingIn'      : 'easeOutBack',
      'easingOut'     : 'easeInBack'
    });
  }

  $('.the_polaroids').mousedown( function() {
    launchFancyBox();
  });

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
    containment: [$("#main-content").position().left, $("#main-content").position().top+100, $("#main-content").position().left + 800, $("#main-content").position().top + 400],
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

  $(".portrait").mouseover(function (e) {
    var currentPortrait = $(this);
    $("#mouseover-text").show();
    $("#mouseover-text").text(currentPortrait.attr("alt"));
    $("#mouseover-text").css({left: currentPortrait.position().left, top: currentPortrait.position().top});
  });

  $(".portrait").mouseout(function (e) {
    $("#mouseover-text").hide();
  });

  $("#refresh-button").live('click', function() {
    if(isInPortrait == false) {
      randomizeImageLocations();
    }
  });

  $("#polaroid-view").live('click', function() {
      fadeOutPortraits();
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
});
