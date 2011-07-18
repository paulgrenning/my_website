// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults


$(document).ready(function() {
  /*
  urchinMaxZ = 28;
  totalImages = 28;
  var isInPortrait = false;
  var easeOutIndex = 0;

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
  */
  $("a[rel^='prettyPhoto']").prettyPhoto({theme:'light_rounded', show_title: false, overlay_gallery: false});
});
