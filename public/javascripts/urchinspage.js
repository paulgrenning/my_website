// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults


$(document).ready(function() {
  urchinMaxZ = 26;
  randomizeImageLocations();
  function launchFancyBox() {
    $(".polaroid").fancybox({
      'titleShow'     : false,
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
      $("#polaroid_"+i).animate({queue: true}, function() {
        $(this).css({"-moz-transform" : "rotate(" + (Math.floor(Math.random()*80) - 40) + "deg)","-webkit-transform" : "rotate(" + (Math.floor(Math.random()*80) - 40) + "deg)", left: Math.floor(Math.random()*850)-75, zIndex: Math.floor(Math.random()*26) ,top: Math.floor(Math.random()*375) });
      });
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

  $("#refresh-button").live('click', function() {
    randomizeImageLocations();
  });
});
