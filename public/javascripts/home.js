// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

var ProjectsCarousel = {};

$(document).ready(function() {
  ProjectsCarousel.originalThumb;
  ProjectsCarousel.isAnimating = false;
  ProjectsCarousel.isScrollingSet = true;
  ProjectsCarousel.leftClicked = true;
  firstSlide(true);
  ProjectsCarousel.scrollInterval = setInterval(slideLeft, 4000);
  function slideRight() {
      if(ProjectsCarousel.isAnimating == false) {
        ProjectsCarousel.isAnimating = true;
        var carousel = $("#carousel-images");
        carousel.animate({left: '-=870', queue: true});
        var title = carousel.children("a:nth-child(3)").children("img").first().attr("title")
        var description = carousel.children("a:nth-child(3)").children("img").first().attr("alt")
        $("#imageDescriptionHolder").html("<h3>"+title+"</h3><p>"+description+"</p>");
        carousel.children("a").first().animate({queue: true}, function() { 
          $(this).remove();
          $(this).appendTo(carousel);
          $(carousel).css({left: "-870"});
          $(this).animate({queue: true}, function() {
            ProjectsCarousel.isAnimating = false;
          });
        });
      }
  }
  function slideLeft() {
      if(ProjectsCarousel.isAnimating == false) {
        ProjectsCarousel.isAnimating = true;
        var carousel = $("#carousel-images");
        carousel.animate({left: '+=870', queue: true}, 300);
        var title = carousel.children("a").first().children("img").first().attr("title")
        var description = carousel.children("a").first().children("img").first().attr("alt")
        $("#imageDescriptionHolder").html("<h3>"+title+"</h3><p>"+description+"</p>");
        carousel.children("a").last().animate({queue: true}, function() { 
          $(this).remove();
          $(this).prependTo(carousel);
          $(carousel).css({left: "-870"}) 
          $(this).animate({queue: true}, function() {
            ProjectsCarousel.isAnimating = false;
          });
        });
      }
  }
  function firstSlide(firstTime) {
      if(ProjectsCarousel.isAnimating == false) {
        ProjectsCarousel.isAnimating = true;
        var carousel = $("#carousel-images");
        carousel.animate({left: '+=870', queue: true}, 10);
        var title = carousel.children("a").first().children("img").first().attr("title")
        var description = carousel.children("a").first().children("img").first().attr("alt")
        $("#imageDescriptionHolder").html("<h3>"+title+"</h3><p>"+description+"</p>");
        carousel.children("a").last().animate({queue: true}, function() { 
          $(this).remove();
          $(this).prependTo(carousel);
          $(carousel).css({left: "-870"}) 
          $(this).animate({queue: true}, 10, function() {
            ProjectsCarousel.isAnimating = false;
            if(firstTime == true){
              firstSlide(false);
            }
          });
        });
      }
  }
  $("#carousel-images").mouseover( function (){
        $("#imageDescriptionHolder").stop(true, true).animate({"bottom": "0"});
  });
  $("#carousel-images").mouseout( function (){
        $("#imageDescriptionHolder").stop(true, true).animate({"bottom": "-80"});
  });

  $("#portfolio").live('mouseover',
    function() {
        ProjectsCarousel.isScrollingSet = false;
        ProjectsCarousel.isAnimating = false;
        clearInterval(ProjectsCarousel.scrollInterval);
        $("#left-arrow").show();
        $("#right-arrow").show();
      })
  .live('mouseout',
    function() {
        $("#left-arrow").hide();
        $("#right-arrow").hide();
        if(ProjectsCarousel.isScrollingSet == false) {
          if(ProjectsCarousel.leftClicked == true) {
            ProjectsCarousel.scrollInterval = setInterval(slideLeft, 4000);
          } else { 
            ProjectsCarousel.scrollInterval = setInterval(slideRight, 4000);
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
      $(this).attr("src", "http://paulgrenning.com/leftArrowClicked.png");
    });
    $("#left-arrow").mouseup(
      function() {
        $(this).attr("src", "http://paulgrenning.com/leftArrow.png");
      });
  $("#right-arrow").mousedown( 
    function() {
      clearInterval(ProjectsCarousel.scrollInterval);
      ProjectsCarousel.leftClicked = false;
      slideRight();
      $(this).attr("src", "http://paulgrenning.com/rightArrowClicked.png");
    });
    $("#right-arrow").mouseup(
      function() {
        $(this).attr("src", "http://paulgrenning.com/rightArrow.png");
    });
});
