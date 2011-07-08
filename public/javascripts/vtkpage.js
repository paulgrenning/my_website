// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function() {

  $(".collapsableArea").mouseover(function() {
    var wantedHeight = $(this).attr("normalHeight");
    $(this).stop(true, false).animate({height: wantedHeight}, 600);
  });
  $(".collapsableArea").mouseout(function() {
    $(this).stop(true, false).animate({height: 35}, 600);
  });
});
