// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

var ProjectsCarousel = {};


$(document).ready(function() {
  ProjectsCarousel.isAnimating = false;
  ProjectsCarousel.isScrollingSet = true;
  ProjectsCarousel.leftClicked = true;
  ProjectsCarousel.currentOffset = -870;
  ProjectsCarousel.currentIndex = 2;
  ProjectsCarousel.scrollInterval = setInterval(slideRight, 3500);
  setImageDescription();
  function slideRight() {
    if(ProjectsCarousel.isAnimating == false) {
      ProjectsCarousel.isAnimating = true;  
      ProjectsCarousel.currentOffset -= 870;
      var carousel = $("#carousel-images");
      ProjectsCarousel.currentIndex++;
      if(ProjectsCarousel.currentOffset == -8700){
          ProjectsCarousel.currentIndex = 2;
          carousel.css({left: 0});  
          ProjectsCarousel.currentOffset = -870;
      }
      var title = carousel.children("a:nth-child("+ProjectsCarousel.currentIndex+")").children("img").first().attr("title")
      var description = carousel.children("a:nth-child("+ProjectsCarousel.currentIndex+")").children("img").first().attr("alt")
      $("#imageDescriptionHolder").html("<h3>"+title+"</h3><p>"+description+"</p>");
      carousel.animate({left: ProjectsCarousel.currentOffset, queue: true}, function(){
        ProjectsCarousel.isAnimating = false;  
      });
    }
  }
  function slideLeft() {
    if(ProjectsCarousel.isAnimating == false) {
      ProjectsCarousel.isAnimating = true;  
      ProjectsCarousel.currentOffset += 870;
      var carousel = $("#carousel-images");
      ProjectsCarousel.currentIndex--;
      if(ProjectsCarousel.currentOffset == 0){
          ProjectsCarousel.currentIndex = 10;
          carousel.css({left: -8700});  
          ProjectsCarousel.currentOffset = -7830; 
      }
      var title = carousel.children("a:nth-child("+ProjectsCarousel.currentIndex+")").children("img").first().attr("title")
      var description = carousel.children("a:nth-child("+ProjectsCarousel.currentIndex+")").children("img").first().attr("alt")
      $("#imageDescriptionHolder").html("<h3>"+title+"</h3><p>"+description+"</p>");
      carousel.animate({left: ProjectsCarousel.currentOffset, queue: true}, function(){
        ProjectsCarousel.isAnimating = false;  
      });
    }
  }
  function setImageDescription() {
      var carousel = $("#carousel-images");
      var title = carousel.children("a:nth-child(2)").children("img").first().attr("title")
      var description = carousel.children("a:nth-child(2)").children("img").first().attr("alt")
      $("#imageDescriptionHolder").html("<h3>"+title+"</h3><p>"+description+"</p>");
  }
  $("#carousel-images").mouseenter( function (){
        $("#imageDescriptionHolder").stop(true, false).animate({"bottom": "0"});
        $("#left-arrow").stop(true, false).animate({"margin-left": 0});
        $("#right-arrow").stop(true, false).animate({"margin-left": 830});
  });
  $("#carousel-images").mouseout( function (){
        $("#imageDescriptionHolder").stop(true, false).animate({"bottom": "-80"});
        $("#left-arrow").stop(true, false).animate({"margin-left": -40});
        $("#right-arrow").stop(true, false).animate({"margin-left": 870});
  });

  $(".arrowHolder").mouseenter(function (){
        $("#imageDescriptionHolder").stop(true, false).animate({"bottom": "0"});
        $("#left-arrow").stop(true, false).animate({"margin-left": 0});
        $("#right-arrow").stop(true, false).animate({"margin-left": 830});
  });
  $(".arrowHolder").mouseout(function (){
        $("#imageDescriptionHolder").stop(true, false).animate({"bottom": "-80"});
        $("#left-arrow").stop(true, false).animate({"margin-left": -40});
        $("#right-arrow").stop(true, false).animate({"margin-left": 870});
  });

  $("#portfolio").mouseover(
    function() {
        ProjectsCarousel.isScrollingSet = false;
        ProjectsCarousel.isAnimating = false;
        clearInterval(ProjectsCarousel.scrollInterval);
    });
  $("#portfolio").mouseout(
    function() {
        if(ProjectsCarousel.isScrollingSet == false) {
          if(ProjectsCarousel.leftClicked == true) {
            ProjectsCarousel.scrollInterval = setInterval(slideLeft, 3500);
          } else { 
            ProjectsCarousel.scrollInterval = setInterval(slideRight, 3500);
          }
          ProjectsCarousel.isScrollingSet = true;
        }
    }
  );
  $("#left-arrow").mousedown( 
    function() {
      clearInterval(ProjectsCarousel.scrollInterval);
      ProjectsCarousel.leftClicked = true;
      slideLeft();
//      $(this).attr("src", "http://renaissancesoftware.net/paulgrenning/leftArrowClicked.png");
    });
    $("#left-arrow").mouseup(
      function() {
 //       $(this).attr("src", "http://renaissancesoftware.net/paulgrenning/leftArrow.png");
      });
  $("#right-arrow").mousedown( 
    function() {
      clearInterval(ProjectsCarousel.scrollInterval);
      ProjectsCarousel.leftClicked = false;
      slideRight();
      $(this).attr("src", "http://renaissancesoftware.net/paulgrenning/rightArrowClicked.png");
    });
    $("#right-arrow").mouseup(
      function() {
        $(this).attr("src", "http://renaissancesoftware.net/paulgrenning/rightArrow.png");
    });
});
