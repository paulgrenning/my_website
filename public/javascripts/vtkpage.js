// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function() {

  /*$(".collapsableArea").mouseover(function() {
    var wantedHeight = $(this).attr("normalHeight");
    $(this).stop(true, false).animate({height: wantedHeight}, 600);
  });
  $(".collapsableArea").mouseout(function() {
    $(this).stop(true, false).animate({height: 35}, 600);
  });
  */
  $(".expandArrow").click(function() {
    if($(this).attr("state") == "closed"){
      $(this).attr("state", "open");
      $(this).attr("src", "http://renaissancesoftware.net/paulgrenning/contractArrow.png");
      var parentDiv = $(this.parentNode.parentNode.parentNode);//.parentNode;
      var newHeight = parentDiv.attr("normalHeight");
      parentDiv.stop(true, false).animate({height: newHeight}, 600);
    } else {
      $(this).attr("state", "closed");
      $(this).attr("src", "http://renaissancesoftware.net/paulgrenning/expandArrow.png");
      var parentDiv = $(this.parentNode.parentNode.parentNode);//.parentNode;
      parentDiv.stop(true, false).animate({height: 35}, 600);
    }
  });
});
