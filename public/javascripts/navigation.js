// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function() {
  $(".header-navigation-button").hover(function() {
    $(this).stop(true, false).animate({top: 6, "border-color": "#999"}, 200);
  });

  $(".header-navigation-button").mouseout(function() {
    $(this).stop(true, false).animate({top: 0, "border-color": "#282828"}, 400);
  });
});
