// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function() {
  $(".thumb").mouseover(function (){
    var oldSrc = $(this).attr("src");
    var newSrc = $(this).attr("src2");
    $(this).attr("src", newSrc);
    $(this).attr("src2", oldSrc);
  });
  $(".thumb").mouseout(function (){
    var oldSrc = $(this).attr("src");
    var newSrc = $(this).attr("src2");
    $(this).attr("src", newSrc);
    $(this).attr("src2", oldSrc);
  });
});
