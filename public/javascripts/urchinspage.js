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

  $(".polaroid").mousedown( function() {
   launchFancyBox();
  });

  function randomizeImageLocations() {
    for(i = 0; i < 26; i++){
      urchinMaxZ = 26;
      $("#polaroid_"+i).animate({queue: true}, function() {
        $(this).css({left: Math.floor(Math.random()*850)-75 });
        $(this).css({top: Math.floor(Math.random()*450)});
        $(this).css({zIndex: Math.floor(Math.random()*26)});
      });
    }
  }

  $(".polaroid").draggable({
    containment: 'document',
    start: function(e,ui){
      urchinMaxZ++;
      $(this).css({zIndex: urchinMaxZ});
      preventClick=true;
    },
    stop: function(e, ui) {
    setTimeout(function(){ preventClick=false; }, 250);
  }
  });

  $("#refresh-button").live('click', function() {
      randomizeImageLocations();
    }
  );
});
