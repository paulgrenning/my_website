// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

var ProjectsCarousel = {};

$(document).ready(function() {
  ProjectsCarousel.isAnimating = false;
  ProjectsCarousel.isScrollingSet = true;
  ProjectsCarousel.leftClicked = true;
//  ProjectsCarousel.scrollInterval = setInterval(slideLeft, 4000);
/*  function slideRight() {
      if(ProjectsCarousel.isAnimating == false) {
        ProjectsCarousel.isAnimating = true;
        var carousel = $("#carousel-images");
        carousel.animate({left: '-=294', queue: true});
        carousel.children("a").first().animate({queue: true}, function() { 
          $(this).remove();
          $(this).appendTo(carousel);
          $(carousel).css({left: "-346"});
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
        carousel.animate({left: '+=294', queue: true});
        carousel.children("a").last().animate({queue: true}, function() { 
          $(this).remove();
          $(this).prependTo(carousel);
          $(carousel).css({left: "-346"}) 
          $(this).animate({queue: true}, function() {
            ProjectsCarousel.isAnimating = false;
          });
        });
      }
  }
  
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
      */
  $("#thumb-1").live('mouseover',
    function() {
        $(this).attr("src", "http://paulgrenning.com/carouselImages/darkTide2.png");
      })
  .live('mouseout',
    function() {
        $(this).attr("src", "http://paulgrenning.com/carouselImages/darkTide1.png")// $(this).data('original_source'));
      }
  );
  $("#thumb-2").live('mouseover',
    function() {
        $(this).attr("src", "http://paulgrenning.com/carouselImages/splat.png");
      })
  .live('mouseout',
    function() {
        $(this).attr("src", "http://paulgrenning.com/carouselImages/bug.png");
      }
  );
  $("#thumb-3").live('mouseover',
    function() {
        $(this).attr("src", "http://paulgrenning.com/carouselImages/urchin1.png");
      })
  .live('mouseout',
    function() {
        $(this).attr("src", "http://paulgrenning.com/carouselImages/urchin2.png");
      }
  );
  $("#thumb-4").live('mouseover',
    function() {
        $(this).attr("src", "http://paulgrenning.com/carouselImages/website2.png");
      })
  .live('mouseout',
    function() {
        $(this).attr("src", "http://paulgrenning.com/carouselImages/website1.png");
      }
  );
  $("#thumb-5").live('mouseover',
    function() {
        $(this).attr("src", "http://paulgrenning.com/carouselImages/ninja1.png");
      })
  .live('mouseout',
    function() {
        $(this).attr("src", "http://paulgrenning.com/carouselImages/ninja2.png");
      }
  );
  /*
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
    */
});
