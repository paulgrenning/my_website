// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function() {

  initializeGlass();
  var hoveredLink = $("#firstChild");
  var isMouseHovering = false;

  function initializeGlass(){
    $("#navigation-glass").stop().animate({left: $("#footer-navigation li").position().left-18, width: $("#footer-navigation li").width()+35, height: 32});
  }

  $(".header-navigation-button").hover(function() {
    $(this).stop().animate({top: 89});
  });

  $(".header-navigation-button").mouseout(function() {
    $(this).stop().animate({top: 56});
  });

  $("#footer-navigation a").hover(function () {
    isMouseHovering = true;
    hoveredLink = $(this);
    $("#navigation-glass").stop().animate({left: hoveredLink.position().left-18, width: hoveredLink.width()+35, height: 32}, function() {
      if(isMouseHovering == true) {
        hoveredLink.css({"text-decoration": "underline"}); 
      }
    });
    $("a.glass-link").attr("href", hoveredLink.attr("href"));
  });

  $("#navigation-glass").hover(function () {
    hoveredLink.css({"text-decoration": "underline"}); 
  });

  $("#navigation-glass").mouseout(function () {
    hoveredLink.css({"text-decoration": "none"}); 
  });

  $("#footer-navigation a").mouseout(function() {
    isMouseHovering = false;
    $(this).css({"text-decoration": "none"});
  });
});
