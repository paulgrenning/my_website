// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function() {

  initializeGlass();

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
    var hoveredLink = $(this);
    $("#navigation-glass").stop().animate({left: hoveredLink.position().left-18, width: hoveredLink.width()+35, height: 32});
    $("a.glass-link").attr("href", hoveredLink.attr("href"));
  });
});
