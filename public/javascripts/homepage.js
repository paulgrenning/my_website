// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

var ProjectsCarousel = {};

$(document).ready(function() {
  ProjectsCarousel.isAnimating = false;
  ProjectsCarousel.isScrollingSet = true;
  ProjectsCarousel.leftClicked = true;
  ProjectsCarousel.scrollInterval = setInterval(slideLeft, 4000);
  function slideRight() {
      if(ProjectsCarousel.isAnimating == false) {
        ProjectsCarousel.isAnimating = true;
        var carousel = $("#carousel-images"); carousel.animate({left: '-=300', queue: true});
        carousel.children("a").first().animate({queue: true}, function() { 
          $(this).remove();
          $(this).appendTo(carousel);
          $(carousel).css({left: "-300px"});
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
        carousel.animate({left: '+=300', queue: true});
        carousel.children("a").last().animate({queue: true}, function() { 
          $(this).remove();
          $(this).prependTo(carousel);
          $(carousel).css({left: "-300px"}) 
          $(this).animate({queue: true}, function() {
            ProjectsCarousel.isAnimating = false;
          });
        });
      }
  }
  var setOriginalData =function() {
    var image = $(this); 
    image.data('original_left', image.position().top);
    image.data('original_width', image.width());
    image.data('original_source', image.attr('src'));
  }
  var getOriginalPosition =function() {
    var list = $(this);
    list.data('original_left', list.position().left);
    list.data('original_right', list.position().right);
  }
  $("#portfolio").live('mouseover',
    function() {
        ProjectsCarousel.isScrollingSet = false;
        ProjectsCarousel.isAnimating = false;
        clearInterval(ProjectsCarousel.scrollInterval);
        $("#left-arrow").show();
        $("#right-arrow").show();
      })
  .each(setOriginalData).live('mouseout',
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
  $("#thumb-1").each(setOriginalData).live('mouseover',
    function() {
        $(this).attr("src", "images/darktide-logo-light.png");
      })
  .each(setOriginalData).live('mouseout',
    function() {
        $(this).attr("src", "images/darktide-logo-dark.png")// $(this).data('original_source'));
      }
  );
  $("#thumb-2").each(setOriginalData).live('mouseover',
    function() {
        $(this).attr("src", "images/bug-splat.png");
      })
  .each(setOriginalData).live('mouseout',
    function() {
        $(this).attr("src", "images/bug.png");
      }
  );
  $("#thumb-3").each(setOriginalData).live('mouseover',
    function() {
        $(this).attr("src", "images/urchin2.png");
      })
  .each(setOriginalData).live('mouseout',
    function() {
        $(this).attr("src", "images/urchin1.png");
      }
  );
  $("#thumb-4").each(setOriginalData).live('mouseover',
    function() {
        $(this).attr("src", "images/website-thumb2.png");
      })
  .each(setOriginalData).live('mouseout',
    function() {
        $(this).attr("src", "images/website-thumb.png");
      }
  );
  $("#thumb-5").each(setOriginalData).live('mouseover',
    function() {
        $(this).attr("src", "images/ninja-defense2.png");
      })
  .each(setOriginalData).live('mouseout',
    function() {
        $(this).attr("src", "images/ninja-defense1.png");
      }
  );
  $("#left-arrow").mousedown( 
    function() {
      clearInterval(ProjectsCarousel.scrollInterval);
      ProjectsCarousel.leftClicked = true;
      slideLeft();
      $(this).attr("src", "images/leftArrowClicked.png");
    });
    $("#left-arrow").mouseup(
      function() {
        $(this).attr("src", "images/leftArrow.png");
      });
  $("#right-arrow").mousedown( 
    function() {
      clearInterval(ProjectsCarousel.scrollInterval);
      ProjectsCarousel.leftClicked = false;
      slideRight();
      $(this).attr("src", "images/rightArrowClicked.png");
    });
    $("#right-arrow").mouseup(
      function() {
        $(this).attr("src", "images/rightArrow.png");
    });
});
