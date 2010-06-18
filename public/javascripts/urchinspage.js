// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults


$(document).ready(function() {
  urchinMaxZ = 26;
  randomizeImageLocations();
  var isInPortrait = false;
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
      $("#polaroid_"+i).animate({left: Math.floor(Math.random()*850)-75, top: Math.floor(Math.random()*375)});
    }
  }

  $(".the_polaroids").draggable({
    containment: [$("#polaroid_gallery").position().left, $("#polaroid_gallery").position().top, $("#polaroid_gallery").position().left + 800, $("#polaroid_gallery").position().top + 400],
    start: function(e,ui){
      urchinMaxZ++;
      $(this).css({zIndex: urchinMaxZ});
    },
    stop: function(e, ui) {
      setTimeout(function(){ preventClick=false; }, 250);
    }
  });

  $(".portrait").mousedown(function() {
    $(this).animate({left: 800, top: -100}, function() {
      for(i = 0; i < 26; i++){
        $("#portrait_"+i).css({zIndex: parseInt($("#portrait_"+i).css('zIndex'))+1});
      }
      $(this).css({zIndex: 0}); 
      $(this).animate({left: 255, top: 0});
    });
  });

  $("#refresh-button").live('click', function() {
    if(isInPortrait == false) {
      randomizeImageLocations();
    }
  });

  $("#polaroid-view").live('click', function() {
      $(".portrait").fadeOut();
      isInPortrait = false;
      $(".the_polaroids").fadeIn();
      randomizeImageLocations();
  });

  function displayPortraits() {
    for(i = 0; i < 26; i++){
      urchinMaxZ = 26;
      $("#portrait_"+i).css("-webkit-transform", "rotate(" + (Math.floor(Math.random()*30) -15) + "deg)");
      $("#portrait_"+i).css("-moz-transform", "rotate(" + (Math.floor(Math.random()*30) -15) + "deg)");
      $("#portrait_"+i).css("zIndex", Math.floor(Math.random()*26)); 
      $(".portrait").fadeIn();
    }
  }

  $("#portrait-view").live("click", function() {
    if(isInPortrait == false){
      isInPortrait = true;
      $(".the_polaroids").animate({left: 375, top: 200, queue: true}, function() {
        $(this).fadeOut();
      });
    }
   displayPortraits();
  });
});
